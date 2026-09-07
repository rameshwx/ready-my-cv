import 'dart:async';
import 'dart:typed_data';

import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:pdf_parser_contract/pdf_parser_contract.dart';
import 'package:scoring_engine/scoring_engine.dart';
import 'package:validation/validation.dart';

abstract interface class WorkflowAgent<I, O> {
  String get id;
  Future<AgentExecution<O>> execute(I input, WorkflowContext context);
}

class AgentExecution<T> {
  const AgentExecution(this.output, this.trajectory);

  final T output;
  final List<TrajectoryEntry> trajectory;
}

class CancellationToken {
  bool _cancelled = false;

  bool get isCancelled => _cancelled;

  void cancel() => _cancelled = true;

  void throwIfCancelled() {
    if (_cancelled) throw const WorkflowCancelledException();
  }
}

class WorkflowContext {
  WorkflowContext({
    required this.catalog,
    required this.role,
    required this.engineVersion,
    CancellationToken? cancellationToken,
  }) : cancellation = cancellationToken ?? CancellationToken();

  final CatalogSnapshot catalog;
  final JobRole role;
  final String engineVersion;
  final CancellationToken cancellation;
  final List<TrajectoryEntry> trajectory = [];
  int _step = 0;

  void record({
    required String agent,
    required String goal,
    required String tool,
    required String observation,
    required String decision,
    required double confidence,
    required String stateUpdate,
    String? nextAgent,
    bool retry = false,
  }) {
    trajectory.add(
      TrajectoryEntry(
        agent: agent,
        step: _step++,
        goal: goal,
        tool: tool,
        observation: observation,
        decision: decision,
        confidence: confidence,
        stateUpdate: stateUpdate,
        nextAgent: nextAgent,
        retry: retry,
      ),
    );
  }
}

class WorkflowRequest {
  const WorkflowRequest({
    required this.bytes,
    required this.role,
    required this.catalog,
    required this.engineVersion,
    this.seniority,
    this.cancellationToken,
  });

  final Uint8List bytes;
  final JobRole role;
  final CatalogSnapshot catalog;
  final String engineVersion;
  final String? seniority;
  final CancellationToken? cancellationToken;
}

class WorkflowCancelledException implements Exception {
  const WorkflowCancelledException();
}

class RequirementPlan {
  const RequirementPlan(this.requirements);

  final List<RoleRequirement> requirements;
}

class CvWorkflowParserAgent implements WorkflowAgent<Uint8List, CvDocument> {
  const CvWorkflowParserAgent(this.parser);

  final LocalPdfParser parser;

  @override
  String get id => 'CvParserAgent';

  @override
  Future<AgentExecution<CvDocument>> execute(
    Uint8List input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final result = await parser.parse(input);
    context.record(
      agent: id,
      goal: 'Convert local PDF into structured CV data',
      tool: 'localPdfJsParser',
      observation: '${result.pageCount} pages parsed locally',
      decision: 'parsed',
      confidence: 1,
      stateUpdate: 'document = parsed local document',
      nextAgent: 'RequirementAnalysisAgent',
    );
    return AgentExecution(
      result.document,
      List.unmodifiable(context.trajectory),
    );
  }
}

class RequirementAnalysisAgent
    implements WorkflowAgent<CatalogSnapshot, RequirementPlan> {
  const RequirementAnalysisAgent();

  @override
  String get id => 'RequirementAnalysisAgent';

  @override
  Future<AgentExecution<RequirementPlan>> execute(
    CatalogSnapshot input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final result = CatalogValidator().validate(input);
    if (!result.isValid) throw StateError(result.errors.join('; '));
    final plan = RequirementPlan(List.unmodifiable(context.role.requirements));
    context.record(
      agent: id,
      goal: 'Build the weighted requirement plan',
      tool: 'publishedCatalog',
      observation: '${plan.requirements.length} validated rules',
      decision: 'planned',
      confidence: 1,
      stateUpdate: 'requirements = ordered published rules',
      nextAgent: 'SkillNormalizationAgent',
    );
    return AgentExecution(plan, List.unmodifiable(context.trajectory));
  }
}

class SkillNormalizationAgent
    implements WorkflowAgent<NormalizationInput, List<NormalizedTerm>> {
  const SkillNormalizationAgent();

  @override
  String get id => 'SkillNormalizationAgent';

  @override
  Future<AgentExecution<List<NormalizedTerm>>> execute(
    NormalizationInput input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final normalized = <NormalizedTerm>[];
    for (final rule in input.plan.requirements) {
      for (final candidate in [rule.term, ...rule.aliases]) {
        final match = RegExp(
          '(?:^|[^a-z0-9])${RegExp.escape(candidate.toLowerCase())}(?:\$|[^a-z0-9])',
        ).firstMatch(input.document.normalizedText.toLowerCase());
        if (match != null) {
          normalized.add(
            NormalizedTerm(
              requirementId: rule.id,
              canonicalTerm: rule.term,
              matchedTerm: candidate,
              aliasUsed: candidate != rule.term,
              start: match.start,
              end: match.end,
              page: _pageFor(input.document, match.start),
            ),
          );
          break;
        }
      }
    }
    context.record(
      agent: id,
      goal: 'Resolve only approved canonical terms and aliases',
      tool: 'boundaryMatcher',
      observation: '${normalized.length} approved term matches',
      decision: 'normalized',
      confidence: 1,
      stateUpdate: 'normalizedTerms = approved matches',
      nextAgent: 'EvidenceInvestigationAgent',
    );
    return AgentExecution(
      List.unmodifiable(normalized),
      List.unmodifiable(context.trajectory),
    );
  }

  int _pageFor(CvDocument document, int offset) {
    var running = 0;
    for (final page in document.pages) {
      running += page.text.length;
      if (offset <= running) return page.number;
    }
    return document.pages.isEmpty ? 1 : document.pages.last.number;
  }
}

class EvidenceInvestigationAgent
    implements WorkflowAgent<EvidenceInput, List<Evidence>> {
  const EvidenceInvestigationAgent();

  @override
  String get id => 'EvidenceInvestigationAgent';

  @override
  Future<AgentExecution<List<Evidence>>> execute(
    EvidenceInput input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final evidence = <Evidence>[];
    for (final rule in input.plan.requirements) {
      final term = input.terms
          .where((x) => x.requirementId == rule.id)
          .firstOrNull;
      if (term == null) {
        evidence.add(_missing(rule));
        continue;
      }
      final surrounding = input.document.normalizedText.substring(
        (term.start - 120).clamp(0, input.document.normalizedText.length),
        (term.end + 120).clamp(0, input.document.normalizedText.length),
      );
      final section = _sectionFor(input.document, term.start);
      final inExperience = {'experience', 'projects'}.contains(section);
      final hasAction = RegExp(
        r'\b(built|developed|designed|implemented|led|delivered|tested|managed|improved|created|used)\b',
      ).hasMatch(surrounding.toLowerCase());
      final classification = inExperience && hasAction
          ? EvidenceClassification.strong
          : inExperience
          ? EvidenceClassification.weak
          : section == 'skills'
          ? EvidenceClassification.mentionOnly
          : EvidenceClassification.weak;
      evidence.add(
        Evidence(
          id: '${rule.id}:${term.start}',
          requirementId: rule.id,
          canonicalTerm: rule.term,
          matchedTerm: term.matchedTerm,
          classification: classification,
          explanation:
              '$section section with${hasAction ? '' : 'out'} an action signal',
          section: section,
          page: term.page,
          start: term.start,
          end: term.end,
          matchingTool: 'sectionAwareMatcher',
        ),
      );
    }
    context.record(
      agent: id,
      goal: 'Classify credible evidence for each requirement',
      tool: 'sectionAwareMatcher',
      observation: '${evidence.length} requirement classifications',
      decision: 'classified',
      confidence: 1,
      stateUpdate: 'evidence = bounded per-rule classifications',
      nextAgent: 'ScoringAgent',
    );
    return AgentExecution(
      List.unmodifiable(evidence),
      List.unmodifiable(context.trajectory),
    );
  }

  Evidence _missing(RoleRequirement rule) => Evidence(
    id: '${rule.id}:missing',
    requirementId: rule.id,
    canonicalTerm: rule.term,
    matchedTerm: null,
    classification: EvidenceClassification.missing,
    explanation: 'No canonical term or approved alias was found',
    section: null,
    page: null,
    start: null,
    end: null,
    matchingTool: 'sectionAwareMatcher',
  );

  String? _sectionFor(CvDocument document, int offset) => document.sections
      .where((x) => offset >= x.start && offset <= x.end)
      .map((x) => x.name)
      .firstOrNull;
}

class ScoringAgent implements WorkflowAgent<ScoreInput, ScoreBreakdown> {
  const ScoringAgent(this.engine);

  final DeterministicScoringEngine engine;

  @override
  String get id => 'ScoringAgent';

  @override
  Future<AgentExecution<ScoreBreakdown>> execute(
    ScoreInput input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final score = engine.score(
      role: context.role,
      evidence: input.evidence,
      text: input.document.normalizedText,
      detectedSections: input.document.sections.map((x) => x.name).toSet(),
    );
    context.record(
      agent: id,
      goal: 'Calculate bounded deterministic score components',
      tool: 'scoringPolicy',
      observation: 'total=${score.total}',
      decision: 'scored',
      confidence: 1,
      stateUpdate: 'score = recomputable bounded components',
      nextAgent: 'RecommendationAgent',
    );
    return AgentExecution(score, List.unmodifiable(context.trajectory));
  }
}

class RecommendationAgent
    implements WorkflowAgent<List<Evidence>, List<Recommendation>> {
  const RecommendationAgent();

  @override
  String get id => 'RecommendationAgent';

  @override
  Future<AgentExecution<List<Recommendation>>> execute(
    List<Evidence> input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final recommendations = <Recommendation>[];
    if (input.any((x) => x.classification == EvidenceClassification.missing)) {
      recommendations.add(
        const Recommendation(
          id: 'add-evidence',
          text:
              'Add truthful project or experience evidence for important missing skills you genuinely have.',
          conditional: true,
        ),
      );
    }
    if (!input.any(
      (x) =>
          x.section == 'experience' &&
          x.classification == EvidenceClassification.strong,
    )) {
      recommendations.add(
        const Recommendation(
          id: 'add-impact',
          text:
              'Replace vague responsibilities with specific outcomes and measurable impact where possible.',
          conditional: true,
        ),
      );
    }
    context.record(
      agent: id,
      goal: 'Select truthful predefined recommendations',
      tool: 'recommendationCatalog',
      observation: '${recommendations.length} conditional recommendations',
      decision: 'recommended',
      confidence: 1,
      stateUpdate: 'recommendations = predefined truthful copy',
      nextAgent: 'VerificationAgent',
    );
    return AgentExecution(
      List.unmodifiable(recommendations),
      List.unmodifiable(context.trajectory),
    );
  }
}

class VerificationAgent
    implements WorkflowAgent<VerificationInput, VerificationResult> {
  const VerificationAgent();

  @override
  String get id => 'VerificationAgent';

  @override
  Future<AgentExecution<VerificationResult>> execute(
    VerificationInput input,
    WorkflowContext context,
  ) async {
    context.cancellation.throwIfCancelled();
    final failures = <String>[];
    final ids = <String>{};
    for (final item in input.evidence) {
      if (!ids.add(item.requirementId)) {
        failures.add('Duplicate rule credit: ${item.requirementId}');
      }
      if (item.page != null && item.page! > input.document.pages.length) {
        failures.add('Evidence page is outside the current document');
      }
      if (item.page != null && item.page! < 1) {
        failures.add('Evidence page is invalid');
      }
      if (item.start != null &&
          item.end != null &&
          (item.start! < 0 ||
              item.end! < item.start! ||
              item.end! > input.document.normalizedText.length)) {
        failures.add('Evidence span is outside the current document');
      }
    }
    if (input.score.total < 0 || input.score.total > 100) {
      failures.add('Score is out of bounds');
    }
    if (context.trajectory.length < 6) failures.add('Trajectory is incomplete');
    final result = VerificationResult(
      valid: failures.isEmpty,
      failures: failures,
    );
    context.record(
      agent: id,
      goal: 'Reject unsupported or inconsistent completed results',
      tool: 'verificationPolicy',
      observation: result.valid ? 'all checks passed' : failures.join('; '),
      decision: result.valid ? 'verified' : 'failed',
      confidence: 1,
      stateUpdate: 'verification = ${result.valid}',
    );
    return AgentExecution(result, List.unmodifiable(context.trajectory));
  }
}

class WorkflowOrchestrator {
  WorkflowOrchestrator({
    required LocalPdfParser parser,
    DeterministicScoringEngine scoring = const DeterministicScoringEngine(),
  }) : _parserAgent = CvWorkflowParserAgent(parser),
       _scoringAgent = ScoringAgent(scoring);

  final CvWorkflowParserAgent _parserAgent;
  final ScoringAgent _scoringAgent;

  Future<AnalysisResult> run(WorkflowRequest request) async {
    final context = WorkflowContext(
      catalog: request.catalog,
      role: request.role,
      engineVersion: request.engineVersion,
      cancellationToken: request.cancellationToken,
    );
    final document = (await _parserAgent.execute(
      request.bytes,
      context,
    )).output;
    final plan = (await const RequirementAnalysisAgent().execute(
      request.catalog,
      context,
    )).output;
    final terms = (await const SkillNormalizationAgent().execute(
      NormalizationInput(document, plan),
      context,
    )).output;
    final evidence = (await const EvidenceInvestigationAgent().execute(
      EvidenceInput(document, plan, terms),
      context,
    )).output;
    final score = (await _scoringAgent.execute(
      ScoreInput(document, evidence),
      context,
    )).output;
    final recommendations = (await const RecommendationAgent().execute(
      evidence,
      context,
    )).output;
    var verification = (await const VerificationAgent().execute(
      VerificationInput(document, evidence, score),
      context,
    )).output;
    if (!verification.valid) {
      context.record(
        agent: 'WorkflowOrchestrator',
        goal: 'Retry the relevant verification stage once',
        tool: 'boundedRetry',
        observation: verification.failures.join('; '),
        decision: 'retry',
        confidence: 1,
        stateUpdate: 'verification retry requested',
        retry: true,
      );
      verification = (await const VerificationAgent().execute(
        VerificationInput(document, evidence, score),
        context,
      )).output;
    }
    if (!verification.valid) throw StateError(verification.failures.join('; '));
    return AnalysisResult(
      roleSlug: request.role.slug,
      roleTitle: request.role.title,
      seniority: request.seniority,
      catalogVersion: request.catalog.version,
      engineVersion: request.engineVersion,
      evidence: evidence,
      score: score,
      recommendations: recommendations,
      trajectory: List.unmodifiable(context.trajectory),
      verification: verification,
    );
  }
}

class NormalizationInput {
  const NormalizationInput(this.document, this.plan);
  final CvDocument document;
  final RequirementPlan plan;
}

class EvidenceInput {
  const EvidenceInput(this.document, this.plan, this.terms);
  final CvDocument document;
  final RequirementPlan plan;
  final List<NormalizedTerm> terms;
}

class ScoreInput {
  const ScoreInput(this.document, this.evidence);
  final CvDocument document;
  final List<Evidence> evidence;
}

class VerificationInput {
  const VerificationInput(this.document, this.evidence, this.score);
  final CvDocument document;
  final List<Evidence> evidence;
  final ScoreBreakdown score;
}

extension<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}

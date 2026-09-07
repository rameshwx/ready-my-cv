import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';

class ScoringPolicy {
  const ScoringPolicy({
    this.roleSkillsMaximum = 35,
    this.experienceMaximum = 25,
    this.atsMaximum = 20,
    this.completenessMaximum = 10,
    this.impactMaximum = 10,
  });

  final double roleSkillsMaximum;
  final double experienceMaximum;
  final double atsMaximum;
  final double completenessMaximum;
  final double impactMaximum;
}

class DeterministicScoringEngine {
  const DeterministicScoringEngine({this.policy = const ScoringPolicy()});

  final ScoringPolicy policy;

  ScoreBreakdown score({
    required JobRole role,
    required List<Evidence> evidence,
    required String text,
    required Set<String> detectedSections,
  }) {
    final evidenceByRequirement = <String, Evidence>{};
    for (final item in evidence) {
      if (!role.requirements.any((rule) => rule.id == item.requirementId)) {
        throw StateError('Evidence references an unknown requirement.');
      }
      if (evidenceByRequirement.containsKey(item.requirementId)) {
        throw StateError('Evidence contains duplicate requirement credit.');
      }
      evidenceByRequirement[item.requirementId] = item;
    }
    final weight = role.requirements.fold<double>(
      0,
      (sum, item) => sum + item.weight,
    );
    final credit = evidenceByRequirement.values.fold<double>(
      0,
      (sum, item) => sum + _weightFor(item, role) * item.multiplier,
    );
    final strong = evidenceByRequirement.values
        .where((item) => item.classification == EvidenceClassification.strong)
        .length;
    final roleSkills = weight == 0
        ? 0
        : policy.roleSkillsMaximum * credit / weight;
    final experience = evidence.isEmpty
        ? 0
        : policy.experienceMaximum * strong / evidence.length;
    final ats = _ats(text).clamp(0, policy.atsMaximum).toDouble();
    final completeness =
        (policy.completenessMaximum *
                {
                  'skills',
                  'experience',
                  'projects',
                  'education',
                }.intersection(detectedSections).length /
                4)
            .clamp(0, policy.completenessMaximum)
            .toDouble();
    final impact = _hasImpact(text)
        ? policy.impactMaximum
        : policy.impactMaximum / 2;
    return ScoreBreakdown(
      roleSkills: roleSkills.clamp(0, policy.roleSkillsMaximum).toDouble(),
      experience: experience.clamp(0, policy.experienceMaximum).toDouble(),
      ats: ats,
      completeness: completeness,
      impact: impact.clamp(0, policy.impactMaximum).toDouble(),
    );
  }

  double _weightFor(Evidence evidence, JobRole role) => role.requirements
      .firstWhere((item) => item.id == evidence.requirementId)
      .weight;

  double _ats(String text) {
    var score = 10.0;
    if (text.trim().length > 300) score += 4;
    if (!RegExp(r'[\uE000-\uF8FF]').hasMatch(text)) score += 3;
    if (RegExp(
      r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b',
    ).hasMatch(text)) {
      score += 3;
    }
    return score;
  }

  bool _hasImpact(String text) => RegExp(
    r'\b\d+(?:[.%+]|\s*(?:users|projects|days|hours|months|years))',
  ).hasMatch(text.toLowerCase());
}

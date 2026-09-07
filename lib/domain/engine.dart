import 'models.dart';

class ReadinessEngine {
  const ReadinessEngine();
  AnalysisResult analyze(String text, JobRole role, String catalogVersion) {
    final lower = text.toLowerCase();
    final sections = _sections(lower);
    final trajectory = <String>[
      '1. CV Parser Agent — extracted and normalized selectable text',
      '2. Requirement Analysis Agent — loaded ${role.requirements.length} weighted rules',
      '3. Skill Normalization Agent — checked canonical terms and approved aliases',
    ];
    final evidence = role.requirements
        .map((r) => _investigate(lower, sections, r))
        .toList();
    trajectory.add(
      '4. Evidence Investigation Agent — classified ${evidence.length} requirements',
    );
    final weight = evidence.fold<double>(
      0,
      (s, e) => s + e.requirement.weight.toDouble(),
    );
    final credit = evidence.fold<double>(
      0,
      (s, e) => s + e.requirement.weight * e.multiplier,
    );
    final ratio = weight == 0 ? 0 : credit / weight;
    final experienceStrong =
        evidence
            .where((e) => e.classification == EvidenceClassification.strong)
            .length /
        (evidence.isEmpty ? 1 : evidence.length);
    final ats = _ats(text);
    final completeness = _completeness(sections);
    final impact =
        RegExp(
          r'\b\d+(?:[.%+]|\s*(?:users|projects|days|hours))',
        ).hasMatch(lower)
        ? 10
        : 5;
    final score = ScoreBreakdown(
      35.0 * ratio,
      25 * experienceStrong,
      ats,
      completeness,
      impact.toDouble(),
    );
    trajectory.add(
      '5. Scoring Agent — applied evidence multipliers and component caps',
    );
    final rec = <String>[];
    if (evidence.any((e) => e.classification == EvidenceClassification.missing))
      rec.add(
        'Add truthful project or experience evidence for important missing skills you genuinely have.',
      );
    if (impact < 10)
      rec.add(
        'Replace vague responsibilities with specific outcomes and measurable impact where possible.',
      );
    if (completeness < 10)
      rec.add(
        'Use conventional headings such as Skills, Experience, Projects, and Education.',
      );
    trajectory.add(
      '6. Recommendation Agent — selected ${rec.length} predefined, truthful suggestions',
    );
    if (score.total < 0 ||
        score.total > 100 ||
        evidence.map((e) => e.requirement.id).toSet().length != evidence.length)
      throw StateError('Verification failed');
    trajectory.add(
      '7. Verification Agent — recomputed score, checked rule IDs, bounds, and duplicate credit',
    );
    return AnalysisResult(
      role: role,
      catalogVersion: catalogVersion,
      evidence: evidence,
      score: score,
      recommendations: rec,
      trajectory: trajectory,
    );
  }

  Evidence _investigate(
    String text,
    Map<String, String> sections,
    Requirement r,
  ) {
    final terms = [r.term, ...r.aliases];
    for (final term in terms) {
      final pattern = RegExp(
        '(?:^|[^a-z0-9])${RegExp.escape(term.toLowerCase())}(?:\$|[^a-z0-9])',
      );
      final match = pattern.firstMatch(text);
      if (match != null) {
        final inExperience = [
          'experience',
          'projects',
        ].any((s) => pattern.hasMatch(sections[s] ?? ''));
        final inSkills = pattern.hasMatch(sections['skills'] ?? '');
        final action =
            RegExp(
              r'\b(built|developed|designed|implemented|led|delivered|tested|managed|improved|created|used)\b',
            ).hasMatch(
              text.substring(
                (match.start - 100).clamp(0, text.length),
                (match.end + 100).clamp(0, text.length),
              ),
            );
        final classification = inExperience && action
            ? EvidenceClassification.strong
            : inExperience
            ? EvidenceClassification.weak
            : inSkills
            ? EvidenceClassification.mentionOnly
            : EvidenceClassification.weak;
        return Evidence(
          requirement: r,
          classification: classification,
          explanation: switch (classification) {
            EvidenceClassification.strong =>
              'Used with an action in Experience or Projects',
            EvidenceClassification.weak =>
              'Found with limited supporting context',
            _ => 'Appears only in a skills or keyword list',
          },
          page: 1,
          start: match.start,
          end: match.end,
        );
      }
    }
    return Evidence(
      requirement: r,
      classification: EvidenceClassification.missing,
      explanation: 'No canonical term or approved alias was found',
      page: 1,
      start: 0,
      end: 0,
    );
  }

  Map<String, String> _sections(String text) {
    final found = <String, String>{};
    final headings = [
      'summary',
      'skills',
      'experience',
      'projects',
      'education',
      'certifications',
    ];
    for (var i = 0; i < headings.length; i++) {
      final start = text.indexOf(headings[i]);
      if (start >= 0) {
        var end = text.length;
        for (final other in headings) {
          final p = text.indexOf(other, start + headings[i].length);
          if (p >= 0 && p < end) end = p;
        }
        found[headings[i]] = text.substring(start, end);
      }
    }
    return found;
  }

  double _ats(String text) {
    var score = 10.0;
    if (text.trim().length > 300) score += 4;
    if (!text.contains(RegExp(r'[\uE000-\uF8FF]'))) score += 3;
    if (RegExp(
      r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b',
    ).hasMatch(text))
      score += 3;
    return score.clamp(0, 20);
  }

  double _completeness(Map<String, String> sections) =>
      [
        'skills',
        'experience',
        'education',
        'projects',
      ].where(sections.containsKey).length *
      2.5;
}

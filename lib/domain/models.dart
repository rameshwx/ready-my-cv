enum EvidenceClassification {
  strong,
  weak,
  mentionOnly,
  missing,
  contradictory,
}

enum SeniorityLevel { junior, mid, senior, lead }

class Requirement {
  const Requirement({
    required this.id,
    required this.term,
    required this.aliases,
    required this.weight,
  });
  final String id, term;
  final List<String> aliases;
  final num weight;
  factory Requirement.fromJson(Map<String, dynamic> j) => Requirement(
    id: j['id'],
    term: j['term'],
    aliases: List<String>.from(j['aliases'] ?? []),
    weight: j['weight'],
  );
}

class JobRole {
  const JobRole({
    required this.slug,
    required this.title,
    required this.requirements,
  });
  final String slug, title;
  final List<Requirement> requirements;
  factory JobRole.fromJson(Map<String, dynamic> j) => JobRole(
    slug: j['slug'],
    title: j['title'],
    requirements: (j['requirements'] as List)
        .map((x) => Requirement.fromJson(Map<String, dynamic>.from(x)))
        .toList(),
  );
}

class Catalog {
  const Catalog({
    required this.version,
    required this.engineVersion,
    required this.roles,
  });
  final String version, engineVersion;
  final List<JobRole> roles;
  factory Catalog.fromJson(Map<String, dynamic> j) => Catalog(
    version: j['version'] ?? 'unknown',
    engineVersion: j['engineVersion'] ?? '1.0.0',
    roles: (j['roles'] as List? ?? [])
        .map((x) => JobRole.fromJson(Map<String, dynamic>.from(x)))
        .toList(),
  );
}

class Evidence {
  const Evidence({
    required this.requirement,
    required this.classification,
    required this.explanation,
    required this.page,
    required this.start,
    required this.end,
  });
  final Requirement requirement;
  final EvidenceClassification classification;
  final String explanation;
  final int page, start, end;
  double get multiplier => switch (classification) {
    EvidenceClassification.strong => 1,
    EvidenceClassification.weak => .5,
    EvidenceClassification.mentionOnly => .2,
    _ => 0,
  };
}

class ScoreBreakdown {
  const ScoreBreakdown(
    this.roleSkills,
    this.experience,
    this.ats,
    this.completeness,
    this.impact,
  );
  final double roleSkills, experience, ats, completeness, impact;
  int get total => (roleSkills + experience + ats + completeness + impact)
      .clamp(0, 100)
      .round();
  String get band => total < 50
      ? 'Needs work'
      : total < 70
      ? 'Developing'
      : total < 85
      ? 'Strong'
      : 'Very strong';
}

class AnalysisResult {
  const AnalysisResult({
    required this.role,
    required this.catalogVersion,
    required this.evidence,
    required this.score,
    required this.recommendations,
    required this.trajectory,
  });
  final JobRole role;
  final String catalogVersion;
  final List<Evidence> evidence;
  final ScoreBreakdown score;
  final List<String> recommendations, trajectory;
}

import 'package:catalog_models/catalog_models.dart';

CatalogSnapshot evaluationCatalog() {
  const roles = <(String, String, List<String>)>[
    (
      'android-developer',
      'Android Developer',
      ['Kotlin', 'Android SDK', 'Jetpack Compose', 'REST APIs', 'Git'],
    ),
    (
      'flutter-developer',
      'Flutter Developer',
      ['Flutter', 'Dart', 'Riverpod', 'REST APIs', 'Git'],
    ),
    (
      'kotlin-multiplatform-developer',
      'Kotlin Multiplatform Developer',
      [
        'Kotlin',
        'Kotlin Multiplatform',
        'Coroutines',
        'Compose Multiplatform',
        'Git',
      ],
    ),
    (
      'ios-developer',
      'iOS Developer',
      ['Swift', 'SwiftUI', 'iOS SDK', 'REST APIs', 'Git'],
    ),
    (
      'frontend-developer',
      'Frontend Developer',
      ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Git'],
    ),
    (
      'backend-developer',
      'Backend Developer',
      ['Node.js', 'SQL', 'REST APIs', 'PostgreSQL', 'Git'],
    ),
    (
      'full-stack-developer',
      'Full Stack Developer',
      ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Git'],
    ),
    (
      'qa-engineer',
      'QA Engineer',
      [
        'Test automation',
        'API testing',
        'Regression testing',
        'Bug tracking',
        'Git',
      ],
    ),
    (
      'devops-engineer',
      'DevOps Engineer',
      ['Docker', 'CI/CD', 'Linux', 'Cloud infrastructure', 'Monitoring'],
    ),
    (
      'ui-ux-designer',
      'UI/UX Designer',
      [
        'User research',
        'Wireframing',
        'Prototyping',
        'Figma',
        'Usability testing',
      ],
    ),
    (
      'project-manager',
      'Project Manager',
      [
        'Project planning',
        'Risk management',
        'Stakeholder management',
        'Agile',
        'Delivery',
      ],
    ),
  ];
  const aliases = <String, List<String>>{
    'Kotlin Multiplatform': ['KMP'],
    'Jetpack Compose': ['Compose'],
    'REST APIs': ['REST', 'RESTful API'],
    'Node.js': ['NodeJS', 'Node'],
    'PostgreSQL': ['Postgres'],
    'CI/CD': ['continuous integration'],
    'Test automation': ['automated testing'],
    'User research': ['UX research'],
  };
  return CatalogSnapshot(
    version: 'evaluation-1',
    engineVersion: '1.0.0',
    publishedAt: DateTime.utc(2026, 1, 1),
    recommendations: const [
      RecommendationTemplate(
        id: 'add-evidence',
        text: 'Add truthful evidence.',
      ),
      RecommendationTemplate(id: 'add-impact', text: 'Add measurable impact.'),
    ],
    roles: roles
        .map(
          (role) => JobRole(
            slug: role.$1,
            title: role.$2,
            description: role.$2,
            seniorities: SeniorityLevel.values,
            requirements: role.$3
                .asMap()
                .entries
                .map(
                  (entry) => RoleRequirement(
                    id: '${role.$1}-${entry.key + 1}',
                    term: entry.value,
                    aliases: aliases[entry.value] ?? const [],
                    required: entry.key < 3,
                    weight: entry.key < 3 ? 3 : 2,
                    category: entry.key < 3
                        ? RuleCategory.roleSkills
                        : RuleCategory.experience,
                    expectedSections: const [
                      'experience',
                      'projects',
                      'skills',
                    ],
                    recommendationIds: const ['add-evidence'],
                  ),
                )
                .toList(),
          ),
        )
        .toList(),
  );
}

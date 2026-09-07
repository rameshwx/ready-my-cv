import 'package:catalog_models/catalog_models.dart';

CatalogSnapshot syntheticCatalog() => CatalogSnapshot(
  version: 'fixture-1',
  engineVersion: 'engine-1',
  publishedAt: DateTime.utc(2026, 1, 1),
  recommendations: const [
    RecommendationTemplate(id: 'add-evidence', text: 'Add truthful evidence.'),
  ],
  roles: const [
    JobRole(
      slug: 'flutter',
      title: 'Flutter Developer',
      description: 'Synthetic Flutter role',
      seniorities: [
        SeniorityLevel.junior,
        SeniorityLevel.mid,
        SeniorityLevel.senior,
      ],
      requirements: [
        RoleRequirement(
          id: 'flutter-1',
          term: 'Flutter',
          required: true,
          weight: 3,
          category: RuleCategory.roleSkills,
          expectedSections: ['experience', 'projects'],
          recommendationIds: ['add-evidence'],
        ),
      ],
    ),
  ],
);

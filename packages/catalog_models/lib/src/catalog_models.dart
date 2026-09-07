import 'package:freezed_annotation/freezed_annotation.dart';

part 'catalog_models.freezed.dart';
part 'catalog_models.g.dart';

enum SeniorityLevel { junior, mid, senior, lead }

enum RuleCategory { roleSkills, experience, tools, communication, delivery }

@freezed
abstract class RoleRequirement with _$RoleRequirement {
  const factory RoleRequirement({
    required String id,
    required String term,
    @Default([]) List<String> aliases,
    @Default([]) List<String> exclusions,
    @Default([]) List<String> phrases,
    required bool required,
    required double weight,
    required RuleCategory category,
    @Default([]) List<String> expectedSections,
    @Default([]) List<String> recommendationIds,
  }) = _RoleRequirement;

  factory RoleRequirement.fromJson(Map<String, dynamic> json) =>
      _$RoleRequirementFromJson(json);
}

@freezed
abstract class JobRole with _$JobRole {
  const factory JobRole({
    required String slug,
    required String title,
    required String description,
    @Default(true) bool active,
    @Default([]) List<SeniorityLevel> seniorities,
    @Default([]) List<RoleRequirement> requirements,
  }) = _JobRole;

  factory JobRole.fromJson(Map<String, dynamic> json) =>
      _$JobRoleFromJson(json);
}

@freezed
abstract class CatalogSnapshot with _$CatalogSnapshot {
  const factory CatalogSnapshot({
    required String version,
    required String engineVersion,
    required DateTime publishedAt,
    @Default([]) List<JobRole> roles,
    @Default([]) List<RecommendationTemplate> recommendations,
  }) = _CatalogSnapshot;

  factory CatalogSnapshot.fromJson(Map<String, dynamic> json) =>
      _$CatalogSnapshotFromJson(json);
}

@freezed
abstract class RecommendationTemplate with _$RecommendationTemplate {
  const factory RecommendationTemplate({
    required String id,
    required String text,
    @Default(true) bool active,
  }) = _RecommendationTemplate;

  factory RecommendationTemplate.fromJson(Map<String, dynamic> json) =>
      _$RecommendationTemplateFromJson(json);
}

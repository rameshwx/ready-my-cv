// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'catalog_models.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_RoleRequirement _$RoleRequirementFromJson(
  Map<String, dynamic> json,
) => _RoleRequirement(
  id: json['id'] as String,
  term: json['term'] as String,
  aliases:
      (json['aliases'] as List<dynamic>?)?.map((e) => e as String).toList() ??
      const [],
  exclusions:
      (json['exclusions'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList() ??
      const [],
  phrases:
      (json['phrases'] as List<dynamic>?)?.map((e) => e as String).toList() ??
      const [],
  required: json['required'] as bool,
  weight: (json['weight'] as num).toDouble(),
  category: $enumDecode(_$RuleCategoryEnumMap, json['category']),
  expectedSections:
      (json['expectedSections'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList() ??
      const [],
  recommendationIds:
      (json['recommendationIds'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList() ??
      const [],
);

Map<String, dynamic> _$RoleRequirementToJson(_RoleRequirement instance) =>
    <String, dynamic>{
      'id': instance.id,
      'term': instance.term,
      'aliases': instance.aliases,
      'exclusions': instance.exclusions,
      'phrases': instance.phrases,
      'required': instance.required,
      'weight': instance.weight,
      'category': _$RuleCategoryEnumMap[instance.category]!,
      'expectedSections': instance.expectedSections,
      'recommendationIds': instance.recommendationIds,
    };

const _$RuleCategoryEnumMap = {
  RuleCategory.roleSkills: 'roleSkills',
  RuleCategory.experience: 'experience',
  RuleCategory.tools: 'tools',
  RuleCategory.communication: 'communication',
  RuleCategory.delivery: 'delivery',
};

_JobRole _$JobRoleFromJson(Map<String, dynamic> json) => _JobRole(
  slug: json['slug'] as String,
  title: json['title'] as String,
  description: json['description'] as String,
  active: json['active'] as bool? ?? true,
  seniorities:
      (json['seniorities'] as List<dynamic>?)
          ?.map((e) => $enumDecode(_$SeniorityLevelEnumMap, e))
          .toList() ??
      const [],
  requirements:
      (json['requirements'] as List<dynamic>?)
          ?.map((e) => RoleRequirement.fromJson(e as Map<String, dynamic>))
          .toList() ??
      const [],
);

Map<String, dynamic> _$JobRoleToJson(_JobRole instance) => <String, dynamic>{
  'slug': instance.slug,
  'title': instance.title,
  'description': instance.description,
  'active': instance.active,
  'seniorities': instance.seniorities
      .map((e) => _$SeniorityLevelEnumMap[e]!)
      .toList(),
  'requirements': instance.requirements,
};

const _$SeniorityLevelEnumMap = {
  SeniorityLevel.junior: 'junior',
  SeniorityLevel.mid: 'mid',
  SeniorityLevel.senior: 'senior',
  SeniorityLevel.lead: 'lead',
};

_CatalogSnapshot _$CatalogSnapshotFromJson(Map<String, dynamic> json) =>
    _CatalogSnapshot(
      version: json['version'] as String,
      engineVersion: json['engineVersion'] as String,
      publishedAt: DateTime.parse(json['publishedAt'] as String),
      roles:
          (json['roles'] as List<dynamic>?)
              ?.map((e) => JobRole.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      recommendations:
          (json['recommendations'] as List<dynamic>?)
              ?.map(
                (e) =>
                    RecommendationTemplate.fromJson(e as Map<String, dynamic>),
              )
              .toList() ??
          const [],
    );

Map<String, dynamic> _$CatalogSnapshotToJson(_CatalogSnapshot instance) =>
    <String, dynamic>{
      'version': instance.version,
      'engineVersion': instance.engineVersion,
      'publishedAt': instance.publishedAt.toIso8601String(),
      'roles': instance.roles,
      'recommendations': instance.recommendations,
    };

_RecommendationTemplate _$RecommendationTemplateFromJson(
  Map<String, dynamic> json,
) => _RecommendationTemplate(
  id: json['id'] as String,
  text: json['text'] as String,
  active: json['active'] as bool? ?? true,
);

Map<String, dynamic> _$RecommendationTemplateToJson(
  _RecommendationTemplate instance,
) => <String, dynamic>{
  'id': instance.id,
  'text': instance.text,
  'active': instance.active,
};

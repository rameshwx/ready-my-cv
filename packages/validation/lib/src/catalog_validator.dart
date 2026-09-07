import 'package:catalog_models/catalog_models.dart';

class CatalogValidationResult {
  const CatalogValidationResult(this.errors);

  final List<String> errors;
  bool get isValid => errors.isEmpty;
}

class CatalogValidator {
  const CatalogValidator();

  CatalogValidationResult validate(CatalogSnapshot catalog) {
    final errors = <String>[];
    final roleSlugs = <String>{};
    final recommendationIds = catalog.recommendations.map((x) => x.id).toSet();
    for (final role in catalog.roles) {
      if (!roleSlugs.add(role.slug)) {
        errors.add('Duplicate role slug: ${role.slug}');
      }
      final ruleIds = <String>{};
      var totalWeight = 0.0;
      for (final rule in role.requirements) {
        if (!ruleIds.add(rule.id)) errors.add('Duplicate rule ID: ${rule.id}');
        if (rule.weight <= 0) errors.add('Invalid weight: ${rule.id}');
        totalWeight += rule.weight;
        for (final recommendationId in rule.recommendationIds) {
          if (!recommendationIds.contains(recommendationId)) {
            errors.add('Unknown recommendation: $recommendationId');
          }
        }
        final terms = {
          rule.term.toLowerCase(),
          ...rule.aliases.map((x) => x.toLowerCase()),
        };
        for (final excluded in rule.exclusions.map((x) => x.toLowerCase())) {
          if (terms.contains(excluded)) {
            errors.add('Alias/exclusion conflict: ${rule.id}');
          }
        }
      }
      if (totalWeight <= 0 && role.active) {
        errors.add('Active role has no weighted requirements: ${role.slug}');
      }
    }
    return CatalogValidationResult(List.unmodifiable(errors));
  }
}

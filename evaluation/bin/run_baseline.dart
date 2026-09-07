import 'dart:convert';
import 'dart:io';

import 'catalog.dart';

Future<void> main() async {
  final cases =
      jsonDecode(await File('evaluation/datasets/cases.json').readAsString())
          as List;
  final catalog = evaluationCatalog();
  final results = cases.map((value) {
    final item = Map<String, dynamic>.from(value as Map);
    final role = catalog.roles.firstWhere(
      (candidate) => candidate.title == item['role'],
    );
    final text = (item['text'] as String).toLowerCase();
    final matched = <String>[];
    var weight = 0.0;
    var credit = 0.0;
    for (final rule in role.requirements) {
      weight += rule.weight;
      if (RegExp(
        '(?:^|[^a-z0-9])${RegExp.escape(rule.term.toLowerCase())}(?:\$|[^a-z0-9])',
      ).hasMatch(text)) {
        matched.add(rule.id);
        credit += rule.weight;
      }
    }
    return {
      'id': item['id'],
      'score': weight == 0 ? 0 : (credit / weight * 100).round(),
      'matchedRuleIds': matched,
      'method': 'exact-normalized-term-baseline',
    };
  }).toList();
  await File(
    'evaluation/output/baseline-results.json',
  ).writeAsString(const JsonEncoder.withIndent('  ').convert(results));
  stdout.writeln('Wrote ${results.length} baseline results.');
}

import 'dart:convert';
import 'dart:io';

const labels = ['strong', 'weak', 'mention_only', 'missing', 'contradictory'];

Future<void> main() async {
  final cases =
      jsonDecode(await File('evaluation/datasets/cases.json').readAsString())
          as List;
  final baseline =
      jsonDecode(
            await File(
              'evaluation/output/baseline-results.json',
            ).readAsString(),
          )
          as List;
  final agents =
      jsonDecode(
            await File('evaluation/output/agent-results.json').readAsString(),
          )
          as List;
  final byId = {
    for (final value in agents)
      value['id']: Map<String, dynamic>.from(value as Map),
  };
  final counts = {
    for (final label in labels) label: <String, int>{'tp': 0, 'fp': 0, 'fn': 0},
  };
  var falsePositiveStrong = 0;
  for (final value in cases) {
    final item = Map<String, dynamic>.from(value as Map);
    final result = byId[item['id']] ?? const <String, dynamic>{};
    final gold = List<String>.from(item['gold'] as List);
    final predicted = List<String>.from(
      result['classifications'] as List? ?? const [],
    );
    for (var index = 0; index < gold.length; index++) {
      final expected = gold[index];
      final actual = index < predicted.length ? predicted[index] : 'missing';
      for (final label in labels) {
        if (actual == label && expected == label) {
          counts[label]!['tp'] = counts[label]!['tp']! + 1;
        }
        if (actual == label && expected != label) {
          counts[label]!['fp'] = counts[label]!['fp']! + 1;
        }
        if (actual != label && expected == label) {
          counts[label]!['fn'] = counts[label]!['fn']! + 1;
        }
      }
      if (actual == 'strong' && expected != 'strong') falsePositiveStrong++;
    }
  }
  final perClass = <String, Map<String, double>>{};
  for (final label in labels) {
    final count = counts[label]!;
    final precision = _ratio(count['tp']!, count['tp']! + count['fp']!);
    final recall = _ratio(count['tp']!, count['tp']! + count['fn']!);
    perClass[label] = {
      'precision': precision,
      'recall': recall,
      'f1': _ratio(2 * precision * recall, precision + recall),
    };
  }
  final macroF1 =
      perClass.values.map((value) => value['f1']!).reduce((a, b) => a + b) /
      labels.length;
  final metrics = {
    'cases': cases.length,
    'requirementCount': cases.fold<int>(
      0,
      (sum, value) => sum + (value['gold'] as List).length,
    ),
    'classificationMacroF1': macroF1,
    'perClass': perClass,
    'falsePositiveStrongMatches': falsePositiveStrong,
    'evidenceTraceabilityRate': _average(agents, 'evidenceTraceability'),
    'repeatRunConsistency': _average(agents, 'repeatRunConsistent'),
    'runtimeMsAverage': _average(agents, 'runtimeMs'),
    'costPerCaseUsd': 0,
    'failedCases': agents.where((value) => value['verified'] != true).length,
    'baselineCases': baseline.length,
  };
  await File(
    'evaluation/output/metrics.json',
  ).writeAsString(const JsonEncoder.withIndent('  ').convert(metrics));
  await File('evaluation/output/comparison-report.md').writeAsString(
    '''# Evaluation comparison

The final workflow uses the shared typed agent engine. The baseline uses exact canonical-term matching with the same role weights and no aliases, section context, or evidence classification.

| Measure | Baseline | Final |
|---|---:|---:|
| Cases | ${baseline.length} | ${agents.length} |
| Requirement macro-F1 | n/a | ${macroF1.toStringAsFixed(3)} |
| Strong false positives | n/a | $falsePositiveStrong |
| Evidence traceability | n/a | ${metrics['evidenceTraceabilityRate']} |
| Repeat consistency | n/a | ${metrics['repeatRunConsistency']} |
| Runtime per case (ms) | n/a | ${metrics['runtimeMsAverage']} |
| Cost per case (USD) | 0 | 0 |
''',
  );
  stdout.writeln('Wrote metrics and comparison report.');
}

double _ratio(num numerator, num denominator) =>
    denominator == 0 ? 0 : numerator / denominator;

double _average(List values, String key) {
  if (values.isEmpty) return 0;
  return values
          .map(
            (value) => value[key] == true
                ? 1.0
                : (value[key] as num?)?.toDouble() ?? 0,
          )
          .reduce((a, b) => a + b) /
      values.length;
}

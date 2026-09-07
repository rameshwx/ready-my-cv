import 'dart:convert';
import 'dart:io';

Future<void> main() async {
  final cases =
      jsonDecode(await File('evaluation/datasets/cases.json').readAsString())
          as List;
  final results = cases.map((c) {
    final terms = (c['gold'] as List).length;
    final matched = RegExp(
      r'\b[A-Z][A-Za-z+/.#-]*\b',
    ).allMatches(c['text']).length;
    return {
      'id': c['id'],
      'score': (matched / (terms * 2) * 100).clamp(0, 100).round(),
      'method': 'exact-keyword-baseline',
    };
  }).toList();
  await Directory('evaluation/output').create(recursive: true);
  await File(
    'evaluation/output/baseline-results.json',
  ).writeAsString(const JsonEncoder.withIndent('  ').convert(results));
  print('Wrote ${results.length} baseline results.');
}

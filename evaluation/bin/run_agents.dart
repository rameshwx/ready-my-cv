import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:agent_engine/agent_engine.dart';
import 'package:core_models/core_models.dart';
import 'package:pdf_parser_contract/pdf_parser_contract.dart';

import 'catalog.dart';

class FixturePdfParser implements LocalPdfParser {
  @override
  Future<PdfParseResult> parse(Uint8List bytes) async {
    final text = utf8.decode(bytes);
    final normalized = text.replaceAll(RegExp(r'\s+'), ' ').trim();
    final headings = [
      'summary',
      'skills',
      'experience',
      'projects',
      'education',
      'certifications',
    ];
    final sections = headings
        .map((heading) => (heading, normalized.toLowerCase().indexOf(heading)))
        .where((entry) => entry.$2 >= 0)
        .map(
          (entry) => CvSection(
            name: entry.$1,
            page: 1,
            start: entry.$2,
            end: normalized.length,
          ),
        )
        .toList();
    final document = CvDocument(
      pages: [CvPage(number: 1, text: normalized)],
      sections: sections,
      normalizedText: normalized,
    );
    return PdfParseResult(document: document, pageCount: 1);
  }
}

Future<void> main() async {
  final cases =
      jsonDecode(await File('evaluation/datasets/cases.json').readAsString())
          as List;
  final catalog = evaluationCatalog();
  final orchestrator = WorkflowOrchestrator(parser: FixturePdfParser());
  final results = <Map<String, dynamic>>[];
  Directory('evaluation/output/trajectories').createSync(recursive: true);
  for (final value in cases) {
    final item = Map<String, dynamic>.from(value as Map);
    final role = catalog.roles.firstWhere(
      (candidate) => candidate.title == item['role'],
    );
    final bytes = Uint8List.fromList(utf8.encode(item['text'] as String));
    final stopwatch = Stopwatch()..start();
    try {
      final result = await orchestrator.run(
        WorkflowRequest(
          bytes: bytes,
          role: role,
          catalog: catalog,
          engineVersion: catalog.engineVersion,
        ),
      );
      stopwatch.stop();
      final repeat = await orchestrator.run(
        WorkflowRequest(
          bytes: Uint8List.fromList(utf8.encode(item['text'] as String)),
          role: role,
          catalog: catalog,
          engineVersion: catalog.engineVersion,
        ),
      );
      final classifications = result.evidence.map(_label).toList();
      results.add({
        'id': item['id'],
        'classifications': classifications,
        'score': result.score.total,
        'verified': result.verification.valid,
        'repeatRunConsistent':
            jsonEncode(result.toJson()) == jsonEncode(repeat.toJson()),
        'evidenceTraceability':
            result.evidence
                .where(
                  (e) =>
                      e.start != null ||
                      e.classification == EvidenceClassification.missing,
                )
                .length /
            result.evidence.length,
        'runtimeMs': stopwatch.elapsedMilliseconds,
        'costUsd': 0,
      });
      await File(
        'evaluation/output/trajectories/${item['id']}.json',
      ).writeAsString(
        const JsonEncoder.withIndent(
          '  ',
        ).convert(result.trajectory.map((entry) => entry.toJson()).toList()),
      );
    } catch (error) {
      stopwatch.stop();
      results.add({
        'id': item['id'],
        'classifications': [],
        'score': 0,
        'verified': false,
        'repeatRunConsistent': false,
        'evidenceTraceability': 0,
        'runtimeMs': stopwatch.elapsedMilliseconds,
        'costUsd': 0,
        'failure': error.toString(),
      });
    }
  }
  await File(
    'evaluation/output/agent-results.json',
  ).writeAsString(const JsonEncoder.withIndent('  ').convert(results));
  stdout.writeln(
    'Wrote ${results.length} verified agent results and trajectories.',
  );
}

String _label(Evidence evidence) =>
    evidence.classification == EvidenceClassification.mentionOnly
    ? 'mention_only'
    : evidence.classification.name;

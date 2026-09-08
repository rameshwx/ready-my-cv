import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:agent_engine/agent_engine.dart';
import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:pdf_parser_contract/pdf_parser_contract.dart';

/// The Node worker supplies parsed document data and the exact published
/// catalog snapshot. This adapter intentionally keeps the existing Dart
/// workflow as the only scoring implementation.
class StructuredDocumentParser implements LocalPdfParser {
  const StructuredDocumentParser(this.document);

  final CvDocument document;

  @override
  Future<PdfParseResult> parse(Uint8List bytes) async {
    return PdfParseResult(document: document, pageCount: document.pages.length);
  }
}

Future<void> main() async {
  try {
    final input =
        jsonDecode(await stdin.transform(utf8.decoder).join())
            as Map<String, dynamic>;
    final document = CvDocument.fromJson(
      (input['document'] as Map).cast<String, dynamic>(),
    );
    final catalog = CatalogSnapshot.fromJson(
      (input['catalog'] as Map).cast<String, dynamic>(),
    );
    final role = JobRole.fromJson(
      (input['role'] as Map).cast<String, dynamic>(),
    );
    final engineVersion = input['engineVersion'] as String;
    final seniority = input['seniority'] as String?;
    final result =
        await WorkflowOrchestrator(
          parser: StructuredDocumentParser(document),
        ).run(
          WorkflowRequest(
            bytes: Uint8List(0),
            role: role,
            catalog: catalog,
            seniority: seniority,
            engineVersion: engineVersion,
          ),
        );
    stdout.write(jsonEncode(result.toJson()));
  } catch (_) {
    // Never echo input, CV text, or exception details through either protocol.
    exitCode = 1;
  }
}

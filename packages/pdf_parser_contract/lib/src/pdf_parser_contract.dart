import 'dart:typed_data';
import 'dart:convert';

import 'package:core_models/core_models.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'pdf_parser_contract.freezed.dart';
part 'pdf_parser_contract.g.dart';

enum PdfParseFailureCode {
  invalid,
  protected,
  corrupt,
  tooLarge,
  tooManyPages,
  noSelectableText,
  unsupported,
}

@freezed
abstract class PdfParseResult with _$PdfParseResult {
  const factory PdfParseResult({
    required CvDocument document,
    required int pageCount,
  }) = _PdfParseResult;

  factory PdfParseResult.fromJson(Map<String, dynamic> json) =>
      _$PdfParseResultFromJson(json);
}

class PdfParseException implements Exception {
  const PdfParseException(this.code, this.message);

  final PdfParseFailureCode code;
  final String message;

  @override
  String toString() => message;
}

abstract interface class LocalPdfParser {
  Future<PdfParseResult> parse(Uint8List bytes);
}

/// Deterministic parser used by pure-Dart tests and evaluation fixtures.
/// Production uses the browser-only PDF.js adapter in the web app.
class FakeLocalPdfParser implements LocalPdfParser {
  const FakeLocalPdfParser({this.pageCount = 1});

  final int pageCount;

  @override
  Future<PdfParseResult> parse(Uint8List bytes) async {
    final text = utf8.decode(bytes).replaceAll(RegExp(r'\s+'), ' ').trim();
    final document = CvDocument(
      pages: [CvPage(number: 1, text: text)],
      sections: const [],
      normalizedText: text,
    );
    return PdfParseResult(document: document, pageCount: pageCount);
  }
}

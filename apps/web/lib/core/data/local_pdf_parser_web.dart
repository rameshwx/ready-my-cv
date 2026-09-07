@JS()
library;

import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:core_models/core_models.dart';
import 'package:pdf_parser_contract/pdf_parser_contract.dart';

@JS('parsePdfLocally')
external JSPromise<JSObject> _parsePdfLocally(JSUint8Array bytes);

class LocalPdfParserImpl implements LocalPdfParser {
  @override
  Future<PdfParseResult> parse(Uint8List bytes) async {
    if (bytes.length > 10 * 1024 * 1024) {
      throw const PdfParseException(
        PdfParseFailureCode.tooLarge,
        'PDF must be 10 MB or smaller.',
      );
    }
    try {
      final result = await _parsePdfLocally(bytes.toJS).toDart;
      final text = (result.getProperty('text'.toJS) as JSString).toDart;
      final pageCount =
          (result.getProperty('pageCount'.toJS) as JSNumber).toDartInt;
      if (pageCount < 1) {
        throw const PdfParseException(
          PdfParseFailureCode.invalid,
          'This PDF has no readable pages.',
        );
      }
      if (pageCount > 25) {
        throw const PdfParseException(
          PdfParseFailureCode.tooManyPages,
          'PDF must be 25 pages or fewer.',
        );
      }
      if (text.trim().length < 30) {
        throw const PdfParseException(
          PdfParseFailureCode.noSelectableText,
          'This PDF has no selectable text. OCR is not supported.',
        );
      }
      final pagesJson =
          (result.getProperty('pagesJson'.toJS) as JSString).toDart;
      return PdfParseResult(
        document: _documentFromText(
          text,
          pageCount,
          (jsonDecode(pagesJson) as List).cast<Map<String, dynamic>>(),
        ),
        pageCount: pageCount,
      );
    } on PdfParseException {
      rethrow;
    } catch (error) {
      final message = error.toString().toLowerCase();
      final code = message.contains('password') || message.contains('encrypted')
          ? PdfParseFailureCode.protected
          : PdfParseFailureCode.corrupt;
      throw PdfParseException(code, 'This PDF could not be read locally.');
    } finally {
      bytes.fillRange(0, bytes.length, 0);
    }
  }

  CvDocument _documentFromText(
    String text,
    int pageCount,
    List<Map<String, dynamic>> pageData,
  ) {
    final pages = List.generate(pageCount, (index) {
      final data = index < pageData.length ? pageData[index] : const {};
      final pageNumber = data['number'] as int? ?? index + 1;
      final pageText = data['text'] as String? ?? '';
      final spans = (data['spans'] as List<dynamic>? ?? const [])
          .cast<Map<String, dynamic>>()
          .map(
            (span) => CvTextSpan(
              text: span['text'] as String? ?? '',
              start: span['start'] as int? ?? 0,
              end: span['end'] as int? ?? 0,
              page: pageNumber,
            ),
          )
          .toList();
      return CvPage(number: pageNumber, text: pageText, spans: spans);
    });
    final sections = <CvSection>[];
    for (final heading in const [
      'summary',
      'skills',
      'experience',
      'projects',
      'education',
      'certifications',
    ]) {
      final start = text.toLowerCase().indexOf(heading);
      if (start >= 0) {
        sections.add(
          CvSection(name: heading, page: 1, start: start, end: text.length),
        );
      }
    }
    return CvDocument(
      pages: pages,
      sections: sections,
      normalizedText: text.replaceAll(RegExp(r'\s+'), ' ').trim(),
    );
  }
}

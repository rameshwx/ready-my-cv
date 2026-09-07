import 'dart:typed_data';

import 'package:pdf_parser_contract/pdf_parser_contract.dart';

class LocalPdfParserImpl implements LocalPdfParser {
  @override
  Future<PdfParseResult> parse(Uint8List bytes) =>
      throw const PdfParseException(
        PdfParseFailureCode.unsupported,
        'Local PDF parsing is only available in the web build.',
      );
}

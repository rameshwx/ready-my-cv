import 'dart:typed_data';

import 'package:pdf_parser_contract/pdf_parser_contract.dart';
import 'package:test/test.dart';

void main() {
  test('fake parser stays local and returns typed document metadata', () async {
    final result = await const FakeLocalPdfParser().parse(
      Uint8List.fromList('Summary\nExperience: Flutter'.codeUnits),
    );

    expect(result.pageCount, 1);
    expect(result.document.normalizedText, contains('Flutter'));
    expect(result.document.pages.single.number, 1);
  });
}

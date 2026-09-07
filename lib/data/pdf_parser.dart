@JS()
library;

import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

@JS('parsePdfLocally')
external JSPromise<JSObject> _parsePdfLocally(JSUint8Array bytes);

class PdfParseResult {
  const PdfParseResult(this.text, this.pageCount);
  final String text;
  final int pageCount;
}

class LocalPdfParser {
  Future<PdfParseResult> parse(Uint8List bytes) async {
    if (bytes.length > 10 * 1024 * 1024)
      throw Exception('PDF must be 10 MB or smaller.');
    final result = await _parsePdfLocally(bytes.toJS).toDart;
    final text = (result.getProperty('text'.toJS) as JSString).toDart;
    final pages = (result.getProperty('pageCount'.toJS) as JSNumber).toDartInt;
    if (pages > 25) throw Exception('PDF must be 25 pages or fewer.');
    if (text.trim().length < 30)
      throw Exception('This PDF has no selectable text. OCR is not supported.');
    bytes.fillRange(0, bytes.length, 0);
    return PdfParseResult(text, pages);
  }
}

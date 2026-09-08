import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:http_parser/http_parser.dart';

class AppHttpClient {
  AppHttpClient([http.Client? client]) : _client = client ?? http.Client();

  final http.Client _client;

  void close() => _client.close();

  Future<dynamic> getJson(String path) async {
    final response = await _client.get(Uri.parse(path));
    return _decode(response);
  }

  Future<dynamic> postJson(String path, Map<String, dynamic> body) async {
    final response = await _client.post(
      Uri.parse(path),
      headers: {'content-type': 'application/json'},
      body: jsonEncode(body),
    );
    return _decode(response);
  }

  Future<dynamic> patchJson(String path, Map<String, dynamic> body) async {
    final response = await _client.patch(
      Uri.parse(path),
      headers: {'content-type': 'application/json'},
      body: jsonEncode(body),
    );
    return _decode(response);
  }

  Future<dynamic> postMultipart({
    required String path,
    required List<int> bytes,
    required Map<String, String> fields,
  }) async {
    final request = http.MultipartRequest('POST', Uri.parse(path))
      ..fields.addAll(fields)
      ..files.add(
        http.MultipartFile.fromBytes(
          'file',
          bytes,
          filename: 'cv.pdf',
          contentType: MediaType('application', 'pdf'),
        ),
      );
    final response = await http.Response.fromStream(
      await _client.send(request),
    );
    return _decode(response);
  }

  dynamic _decode(http.Response response) {
    final decoded = response.body.isEmpty
        ? <String, dynamic>{}
        : jsonDecode(response.body);
    if (response.statusCode >= 400) {
      final error = decoded is Map<String, dynamic> ? decoded['error'] : null;
      final message = error is Map<String, dynamic>
          ? error['message']?.toString()
          : null;
      throw AppHttpException(response.statusCode, message ?? 'Request failed.');
    }
    return decoded;
  }
}

class AppHttpException implements Exception {
  const AppHttpException(this.statusCode, this.message);

  final int statusCode;
  final String message;

  @override
  String toString() => message;
}

import 'dart:convert';
import 'package:http/http.dart' as http;
import '../domain/models.dart';

class ApiClient {
  ApiClient([http.Client? client]) : _client = client ?? http.Client();
  final http.Client _client;
  Future<Catalog> catalog() async {
    final r = await _client.get(Uri.parse('/app/catalog'));
    if (r.statusCode != 200) throw Exception('Catalog unavailable');
    return Catalog.fromJson(jsonDecode(r.body));
  }

  Future<Map<String, dynamic>> session() async {
    final r = await _client.get(Uri.parse('/app/admin/session'));
    return r.statusCode == 200 ? jsonDecode(r.body) : {'signedIn': false};
  }

  Future<Map<String, dynamic>> login(String u, String p) async {
    final r = await _client.post(
      Uri.parse('/app/admin/login'),
      headers: {'content-type': 'application/json'},
      body: jsonEncode({'username': u, 'password': p}),
    );
    if (r.statusCode != 200) throw Exception('Invalid username or password');
    return jsonDecode(r.body);
  }

  Future<void> logout() => _post('/app/admin/logout', {});
  Future<void> account(
    String current,
    String? username,
    String? password,
  ) async {
    final body = {
      'currentPassword': current,
      if (username?.isNotEmpty == true) 'newUsername': username,
      if (password?.isNotEmpty == true) 'newPassword': password,
      if (password?.isNotEmpty == true) 'confirmPassword': password,
    };
    final r = await _client.patch(
      Uri.parse('/app/admin/account'),
      headers: {'content-type': 'application/json'},
      body: jsonEncode(body),
    );
    if (r.statusCode != 200) throw Exception('Could not update credentials');
  }

  Future<void> requestRole(Map<String, String> body) =>
      _post('/app/role-requests', body);
  Future<void> _post(String url, Object body) async {
    final r = await _client.post(
      Uri.parse(url),
      headers: {'content-type': 'application/json'},
      body: jsonEncode(body),
    );
    if (r.statusCode >= 400) throw Exception('Request failed');
  }
}

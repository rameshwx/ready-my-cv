import 'dart:typed_data';

import 'package:agent_engine/agent_engine.dart';
import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';

import '../domain/repositories.dart';
import '../network/app_http_client.dart';

class HttpCatalogRepository implements CatalogRepository {
  const HttpCatalogRepository(this.client);

  final AppHttpClient client;

  @override
  Future<CatalogSnapshot> fetchPublished() async => CatalogSnapshot.fromJson(
    Map<String, dynamic>.from(await client.getJson('/app/catalog') as Map),
  );
}

class HttpRoleRequestRepository implements RoleRequestRepository {
  const HttpRoleRequestRepository(this.client);

  final AppHttpClient client;

  @override
  Future<void> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
  }) async {
    await client.postJson('/app/role-requests', {
      'roleTitle': roleTitle,
      if (seniority?.isNotEmpty == true) 'seniority': seniority,
      if (industry?.isNotEmpty == true) 'industry': industry,
      if (desiredSkills?.isNotEmpty == true) 'desiredSkills': desiredSkills,
      if (replyEmail?.isNotEmpty == true) 'replyEmail': replyEmail,
      'website': '',
    });
  }
}

class HttpAdminSessionRepository implements AdminSessionRepository {
  const HttpAdminSessionRepository(this.client);

  final AppHttpClient client;

  @override
  Future<AdminSessionState> current() async {
    try {
      final json = Map<String, dynamic>.from(
        await client.getJson('/app/admin/session') as Map,
      );
      return AdminSessionState(
        status: AdminSessionStatus.signedIn,
        forcePasswordChange: json['forcePasswordChange'] == true,
      );
    } on AppHttpException catch (error) {
      if (error.statusCode == 401) {
        return const AdminSessionState(status: AdminSessionStatus.signedOut);
      }
      rethrow;
    }
  }

  @override
  Future<AdminSessionState> signIn(String username, String password) async {
    final json = Map<String, dynamic>.from(
      await client.postJson('/app/admin/login', {
            'username': username,
            'password': password,
          })
          as Map,
    );
    return AdminSessionState(
      status: AdminSessionStatus.signedIn,
      forcePasswordChange: json['forcePasswordChange'] == true,
    );
  }

  @override
  Future<void> signOut() async {
    await client.postJson('/app/admin/logout', {});
  }

  @override
  Future<void> changeCredentials({
    required String currentPassword,
    String? newUsername,
    String? newPassword,
  }) async {
    await client.patchJson('/app/admin/account', {
      'currentPassword': currentPassword,
      if (newUsername?.isNotEmpty == true) 'newUsername': newUsername,
      if (newPassword?.isNotEmpty == true) ...{
        'newPassword': newPassword,
        'confirmPassword': newPassword,
      },
    });
  }
}

class HttpAdminRepository implements AdminRepository {
  const HttpAdminRepository(this.client);

  final AppHttpClient client;

  @override
  Future<Map<String, dynamic>> dashboard() async =>
      _map(await client.getJson('/app/admin/dashboard'));

  @override
  Future<List<Map<String, dynamic>>> roles() async =>
      _items(await client.getJson('/app/admin/roles'));

  @override
  Future<List<Map<String, dynamic>>> ruleVersions() async =>
      _items(await client.getJson('/app/admin/rule-versions'));

  @override
  Future<Map<String, dynamic>> validateDraft(String id) async =>
      _map(await client.postJson('/app/admin/rule-versions/$id/validate', {}));

  @override
  Future<Map<String, dynamic>> publish(String id) async => _map(
    await client.postJson('/app/admin/publication/publish', {'versionId': id}),
  );

  @override
  Future<Map<String, dynamic>> rollback(String version) async => _map(
    await client.postJson('/app/admin/publication/rollback', {
      'version': version,
    }),
  );

  @override
  Future<List<Map<String, dynamic>>> roleRequests() async =>
      _items(await client.getJson('/app/admin/role-requests'));

  @override
  Future<void> updateRoleRequest(String id, String status) async {
    await client.patchJson('/app/admin/role-requests/$id', {'status': status});
  }

  @override
  Future<List<Map<String, dynamic>>> auditLogs() async =>
      _items(await client.getJson('/app/admin/audit-logs'));

  @override
  Future<Map<String, dynamic>> settings() async =>
      _map(await client.getJson('/app/admin/settings'));

  @override
  Future<void> updateSettings(Map<String, dynamic> values) async {
    await client.patchJson('/app/admin/settings', values);
  }

  Map<String, dynamic> _map(dynamic value) =>
      Map<String, dynamic>.from(value as Map);

  List<Map<String, dynamic>> _items(dynamic value) {
    final raw = (value as Map)['items'];
    if (raw is! List) return const [];
    return raw.map((item) => Map<String, dynamic>.from(item as Map)).toList();
  }
}

class LocalWorkflow implements ScanWorkflow {
  const LocalWorkflow(this.orchestrator);

  final WorkflowOrchestrator orchestrator;

  @override
  Future<AnalysisResult> run({
    required Uint8List bytes,
    required JobRole role,
    required CatalogSnapshot catalog,
    String? seniority,
    CancellationToken? cancellationToken,
  }) => orchestrator.run(
    WorkflowRequest(
      bytes: bytes,
      role: role,
      catalog: catalog,
      seniority: seniority,
      engineVersion: catalog.engineVersion,
      cancellationToken: cancellationToken,
    ),
  );
}

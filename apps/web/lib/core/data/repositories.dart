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

class HttpPublicConfigRepository implements PublicConfigRepository {
  const HttpPublicConfigRepository(this.client);

  final AppHttpClient client;

  @override
  Future<PublicConfig> fetch() async {
    final json = Map<String, dynamic>.from(
      await client.getJson('/app/config') as Map,
    );
    return PublicConfig(
      donationUrl: json['donationUrl'] as String?,
      adsEnabled: json['adsEnabled'] == true,
    );
  }
}

class HttpPublicVerificationRepository implements PublicVerificationRepository {
  const HttpPublicVerificationRepository(this.client);

  final AppHttpClient client;

  @override
  Future<PublicVerificationChallenge> issue() async {
    final json = Map<String, dynamic>.from(
      await client.postJson('/app/verification-challenges', {}) as Map,
    );
    return PublicVerificationChallenge(question: json['question'] as String);
  }
}

class HttpRoleRequestRepository implements RoleRequestRepository {
  const HttpRoleRequestRepository(this.client);

  final AppHttpClient client;

  @override
  Future<RoleRequestSubmission> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
    required int verificationAnswer,
  }) async {
    final response = Map<String, dynamic>.from(
      await client.postJson('/app/role-requests', {
            'roleTitle': roleTitle,
            if (seniority?.isNotEmpty == true) 'seniority': seniority,
            if (industry?.isNotEmpty == true) 'industry': industry,
            if (desiredSkills?.isNotEmpty == true)
              'desiredSkills': desiredSkills,
            if (replyEmail?.isNotEmpty == true) 'replyEmail': replyEmail,
            'verificationAnswer': verificationAnswer,
            'website': '',
          })
          as Map,
    );
    return RoleRequestSubmission(
      accepted: response['accepted'] == true,
      duplicate: response['duplicate'] == true,
    );
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
  Future<Map<String, dynamic>> createRole({
    required String slug,
    required String title,
    required String description,
  }) async => _map(
    await client.postJson('/app/admin/roles', {
      'slug': slug,
      'title': title,
      'description': description,
    }),
  );

  @override
  Future<Map<String, dynamic>> updateRole(
    String id,
    Map<String, dynamic> values,
  ) async => _map(await client.patchJson('/app/admin/roles/$id', values));

  @override
  Future<void> archiveRole(String id) async {
    await client.deleteJson('/app/admin/roles/$id');
  }

  @override
  Future<Map<String, dynamic>> restoreRole(String id) async =>
      _map(await client.postJson('/app/admin/roles/$id/restore', {}));

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
  Future<void> deleteRoleRequest(String id) async {
    await client.deleteJson('/app/admin/role-requests/$id');
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

class HttpAnalysisJobRepository implements AnalysisJobRepository {
  const HttpAnalysisJobRepository(this.client);

  final AppHttpClient client;

  @override
  Future<AnalysisUpload> upload({
    required List<int> bytes,
    required String roleSlug,
    String? seniority,
    required bool consent,
    required int verificationAnswer,
  }) async {
    final response = Map<String, dynamic>.from(
      await client.postMultipart(
            path: '/app/analysis-jobs',
            bytes: bytes,
            fields: {
              'roleSlug': roleSlug,
              if (seniority != null) 'seniority': seniority,
              'consent': consent.toString(),
              'verificationAnswer': verificationAnswer.toString(),
            },
          )
          as Map,
    );
    final report = response['report'];
    return AnalysisUpload(
      handle: response['handle'] as String,
      status: response['status'] as String,
      mode: response['mode'] as String,
      result: report is Map
          ? AnalysisResult.fromJson(
              Map<String, dynamic>.from(report['result'] as Map),
            )
          : null,
      pollAfterMs: (response['pollAfterMs'] as num?)?.toInt() ?? 1500,
    );
  }

  @override
  Future<AnalysisJobStatus> status(String handle) async {
    final response = Map<String, dynamic>.from(
      await client.getJson('/app/analysis-jobs/$handle/status') as Map,
    );
    return AnalysisJobStatus(
      status: response['status'] as String,
      emailRequired: response['emailRequired'] == true,
      pollAfterMs: (response['pollAfterMs'] as num?)?.toInt() ?? 1500,
    );
  }

  @override
  Future<void> sendEmail({
    required String handle,
    required String email,
  }) async {
    await client.postJson('/app/analysis-jobs/$handle/email', {
      'email': email,
      'consent': true,
    });
  }

  @override
  Future<void> cancel(String handle) async {
    await client.postJson('/app/analysis-jobs/$handle/cancel', {});
  }
}

import 'dart:typed_data';

import 'package:agent_engine/agent_engine.dart';
import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';

abstract interface class CatalogRepository {
  Future<CatalogSnapshot> fetchPublished();
}

abstract interface class RoleRequestRepository {
  Future<void> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
  });
}

abstract interface class AdminSessionRepository {
  Future<AdminSessionState> current();

  Future<AdminSessionState> signIn(String username, String password);

  Future<void> signOut();

  Future<void> changeCredentials({
    required String currentPassword,
    String? newUsername,
    String? newPassword,
  });
}

abstract interface class AdminRepository {
  Future<Map<String, dynamic>> dashboard();

  Future<List<Map<String, dynamic>>> roles();

  Future<List<Map<String, dynamic>>> ruleVersions();

  Future<Map<String, dynamic>> validateDraft(String id);

  Future<Map<String, dynamic>> publish(String id);

  Future<Map<String, dynamic>> rollback(String version);

  Future<List<Map<String, dynamic>>> roleRequests();

  Future<void> updateRoleRequest(String id, String status);

  Future<List<Map<String, dynamic>>> auditLogs();

  Future<Map<String, dynamic>> settings();

  Future<void> updateSettings(Map<String, dynamic> values);
}

abstract interface class ScanWorkflow {
  Future<AnalysisResult> run({
    required Uint8List bytes,
    required JobRole role,
    required CatalogSnapshot catalog,
    String? seniority,
    CancellationToken? cancellationToken,
  });
}

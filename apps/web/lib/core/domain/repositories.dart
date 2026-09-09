import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';

abstract interface class CatalogRepository {
  Future<CatalogSnapshot> fetchPublished();
}

class PublicConfig {
  const PublicConfig({this.donationUrl, this.adsEnabled = false});

  final String? donationUrl;
  final bool adsEnabled;
}

abstract interface class PublicConfigRepository {
  Future<PublicConfig> fetch();
}

class PublicVerificationChallenge {
  const PublicVerificationChallenge({required this.question});

  final String question;
}

abstract interface class PublicVerificationRepository {
  Future<PublicVerificationChallenge> issue();
}

abstract interface class RoleRequestRepository {
  Future<RoleRequestSubmission> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
    required int verificationAnswer,
  });
}

class RoleRequestSubmission {
  const RoleRequestSubmission({required this.accepted, this.duplicate = false});

  final bool accepted;
  final bool duplicate;
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

  Future<Map<String, dynamic>> createRole({
    required String slug,
    required String title,
    required String description,
  });

  Future<Map<String, dynamic>> updateRole(
    String id,
    Map<String, dynamic> values,
  );

  Future<void> archiveRole(String id);

  Future<Map<String, dynamic>> restoreRole(String id);

  Future<void> deleteRoleRequest(String id);

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

class AnalysisUpload {
  const AnalysisUpload({
    required this.handle,
    required this.status,
    required this.mode,
    this.result,
    this.pollAfterMs = 1500,
  });

  final String handle;
  final String status;
  final String mode;
  final AnalysisResult? result;
  final int pollAfterMs;
}

class AnalysisJobStatus {
  const AnalysisJobStatus({
    required this.status,
    required this.emailRequired,
    required this.pollAfterMs,
  });

  final String status;
  final bool emailRequired;
  final int pollAfterMs;
}

abstract interface class AnalysisJobRepository {
  Future<AnalysisUpload> upload({
    required List<int> bytes,
    required String roleSlug,
    String? seniority,
    required bool consent,
    required int verificationAnswer,
  });

  Future<AnalysisJobStatus> status(String handle);

  Future<void> sendEmail({required String handle, required String email});

  Future<void> cancel(String handle);
}

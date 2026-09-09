import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../app/providers.dart';
import '../../../core/network/app_http_client.dart';

part 'role_request_view_model.g.dart';

@riverpod
class RoleRequestViewModel extends _$RoleRequestViewModel {
  @override
  String? build() => null;

  Future<bool> submit({
    required String title,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
    required int? verificationAnswer,
  }) async {
    if (title.trim().length < 2) {
      state = 'Please enter a valid role title.';
      return false;
    }
    if (verificationAnswer == null) {
      state = 'Please complete the verification question.';
      return false;
    }
    try {
      final result = await ref
          .read(roleRequestRepositoryProvider)
          .submit(
            roleTitle: title.trim(),
            seniority: seniority?.trim(),
            industry: industry?.trim(),
            desiredSkills: desiredSkills?.trim(),
            replyEmail: replyEmail?.trim(),
            verificationAnswer: verificationAnswer,
          );
      state = result.duplicate
          ? 'Thank you. This request was already received recently.'
          : 'Thank you. Your request was received.';
      return result.accepted;
    } on AppHttpException catch (error) {
      state = error.code == 'VERIFICATION_REQUIRED'
          ? 'Your verification question is no longer valid. Please answer the new question and try again.'
          : 'Please try again later.';
      return false;
    } catch (_) {
      state = 'Please try again later.';
      return false;
    }
  }
}

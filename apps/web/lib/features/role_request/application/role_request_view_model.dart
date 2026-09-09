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
    required String? captchaToken,
  }) async {
    if (title.trim().length < 2) {
      state = 'Please enter a valid role title.';
      return false;
    }
    if (captchaToken == null || captchaToken.isEmpty) {
      state = 'Please complete the CAPTCHA verification.';
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
            captchaToken: captchaToken,
          );
      state = result.duplicate
          ? 'Thank you. This request was already received recently.'
          : 'Thank you. Your request was received.';
      return result.accepted;
    } on AppHttpException catch (error) {
      state = switch (error.code) {
        'CAPTCHA_REQUIRED' || 'CAPTCHA_INVALID' =>
          'Your CAPTCHA expired or could not be verified. Please complete it again and resend your request.',
        'CAPTCHA_UNAVAILABLE' =>
          'CAPTCHA verification is temporarily unavailable. Please try again later.',
        _ => 'Please try again later.',
      };
      return false;
    } catch (_) {
      state = 'Please try again later.';
      return false;
    }
  }
}

import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../app/providers.dart';

part 'role_request_view_model.g.dart';

@riverpod
class RoleRequestViewModel extends _$RoleRequestViewModel {
  @override
  String? build() => null;

  Future<void> submit({
    required String title,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
  }) async {
    if (title.trim().length < 2) {
      state = 'Please enter a valid role title.';
      return;
    }
    try {
      await ref
          .read(roleRequestRepositoryProvider)
          .submit(
            roleTitle: title.trim(),
            seniority: seniority?.trim(),
            industry: industry?.trim(),
            desiredSkills: desiredSkills?.trim(),
            replyEmail: replyEmail?.trim(),
          );
      state = 'Thank you. Your request was received.';
    } catch (_) {
      state = 'Please try again later.';
    }
  }
}

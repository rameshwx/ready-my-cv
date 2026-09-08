import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:ready_my_cv_web/app/providers.dart';
import 'package:ready_my_cv_web/core/domain/repositories.dart';
import 'package:ready_my_cv_web/features/role_request/application/role_request_view_model.dart';

void main() {
  test('role request requires CAPTCHA before calling the backend', () async {
    final repository = _FakeRoleRequestRepository();
    final container = ProviderContainer(
      overrides: [roleRequestRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', captchaToken: null);

    expect(accepted, isFalse);
    expect(repository.submissions, 0);
    expect(
      container.read(roleRequestViewModelProvider),
      'Please complete the CAPTCHA verification.',
    );
  });

  test('accepted role requests pass the token and report success', () async {
    final repository = _FakeRoleRequestRepository();
    final container = ProviderContainer(
      overrides: [roleRequestRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', captchaToken: 'captcha-token');

    expect(accepted, isTrue);
    expect(repository.submissions, 1);
    expect(repository.captchaToken, 'captcha-token');
  });
}

class _FakeRoleRequestRepository implements RoleRequestRepository {
  int submissions = 0;
  String? captchaToken;

  @override
  Future<RoleRequestSubmission> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
    required String captchaToken,
  }) async {
    submissions++;
    this.captchaToken = captchaToken;
    return const RoleRequestSubmission(accepted: true);
  }
}

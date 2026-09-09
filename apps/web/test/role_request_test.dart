import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:ready_my_cv_web/app/providers.dart';
import 'package:ready_my_cv_web/core/domain/repositories.dart';
import 'package:ready_my_cv_web/core/network/app_http_client.dart';
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

  test('CAPTCHA rejection asks the user to complete a fresh challenge', () async {
    final repository = _FakeRoleRequestRepository(
      error: const AppHttpException(
        400,
        'CAPTCHA verification failed.',
        code: 'CAPTCHA_INVALID',
      ),
    );
    final container = ProviderContainer(
      overrides: [roleRequestRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', captchaToken: 'expired-token');

    expect(accepted, isFalse);
    expect(
      container.read(roleRequestViewModelProvider),
      'Your CAPTCHA expired or could not be verified. Please complete it again and resend your request.',
    );
  });

  test('CAPTCHA service outages have a specific retry message', () async {
    final repository = _FakeRoleRequestRepository(
      error: const AppHttpException(
        503,
        'CAPTCHA verification is not configured.',
        code: 'CAPTCHA_UNAVAILABLE',
      ),
    );
    final container = ProviderContainer(
      overrides: [roleRequestRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', captchaToken: 'captcha-token');

    expect(accepted, isFalse);
    expect(
      container.read(roleRequestViewModelProvider),
      'CAPTCHA verification is temporarily unavailable. Please try again later.',
    );
  });

  test('non-CAPTCHA request failures keep the generic retry message', () async {
    final repository = _FakeRoleRequestRepository(
      error: const AppHttpException(500, 'Database unavailable.'),
    );
    final container = ProviderContainer(
      overrides: [roleRequestRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', captchaToken: 'captcha-token');

    expect(accepted, isFalse);
    expect(
      container.read(roleRequestViewModelProvider),
      'Please try again later.',
    );
  });
}

class _FakeRoleRequestRepository implements RoleRequestRepository {
  _FakeRoleRequestRepository({this.error});

  int submissions = 0;
  String? captchaToken;
  final Object? error;

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
    if (error != null) throw error!;
    return const RoleRequestSubmission(accepted: true);
  }
}

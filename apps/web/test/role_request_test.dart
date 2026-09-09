import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:ready_my_cv_web/app/providers.dart';
import 'package:ready_my_cv_web/core/domain/repositories.dart';
import 'package:ready_my_cv_web/core/network/app_http_client.dart';
import 'package:ready_my_cv_web/features/role_request/application/role_request_view_model.dart';

void main() {
  test(
    'role request requires a verification answer before calling the backend',
    () async {
      final repository = _FakeRoleRequestRepository();
      final container = ProviderContainer(
        overrides: [
          roleRequestRepositoryProvider.overrideWithValue(repository),
        ],
      );
      addTearDown(container.dispose);

      final accepted = await container
          .read(roleRequestViewModelProvider.notifier)
          .submit(title: 'Product Designer', verificationAnswer: null);

      expect(accepted, isFalse);
      expect(repository.submissions, 0);
      expect(
        container.read(roleRequestViewModelProvider),
        'Please complete the verification question.',
      );
    },
  );

  test('accepted role requests pass the answer and report success', () async {
    final repository = _FakeRoleRequestRepository();
    final container = ProviderContainer(
      overrides: [roleRequestRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', verificationAnswer: 23);

    expect(accepted, isTrue);
    expect(repository.submissions, 1);
    expect(repository.verificationAnswer, 23);
  });

  test('expired verification asks for a new question', () async {
    final container = ProviderContainer(
      overrides: [
        roleRequestRepositoryProvider.overrideWithValue(
          _FailingRoleRequestRepository(),
        ),
      ],
    );
    addTearDown(container.dispose);

    final accepted = await container
        .read(roleRequestViewModelProvider.notifier)
        .submit(title: 'Product Designer', verificationAnswer: 23);

    expect(accepted, isFalse);
    expect(
      container.read(roleRequestViewModelProvider),
      contains('answer the new question'),
    );
  });
}

class _FakeRoleRequestRepository implements RoleRequestRepository {
  int submissions = 0;
  int? verificationAnswer;

  @override
  Future<RoleRequestSubmission> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
    required int verificationAnswer,
  }) async {
    submissions++;
    this.verificationAnswer = verificationAnswer;
    return const RoleRequestSubmission(accepted: true);
  }
}

class _FailingRoleRequestRepository implements RoleRequestRepository {
  @override
  Future<RoleRequestSubmission> submit({
    required String roleTitle,
    String? seniority,
    String? industry,
    String? desiredSkills,
    String? replyEmail,
    required int verificationAnswer,
  }) => throw const AppHttpException(
    400,
    'Verification is required.',
    code: 'VERIFICATION_REQUIRED',
  );
}

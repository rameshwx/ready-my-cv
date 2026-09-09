import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:ready_my_cv_web/app/providers.dart';
import 'package:ready_my_cv_web/core/domain/repositories.dart';
import 'package:ready_my_cv_web/core/presentation/captcha_challenge.dart';
import 'package:ready_my_cv_web/features/public/presentation/public_pages.dart';

void main() {
  testWidgets('role request submits the live CAPTCHA token', (tester) async {
    tester.view.physicalSize = const Size(1280, 1200);
    tester.view.devicePixelRatio = 1;
    addTearDown(() {
      tester.view.resetPhysicalSize();
      tester.view.resetDevicePixelRatio();
    });
    final repository = _RoleRequestRepository();
    final captchaController = CaptchaChallengeController();
    final unbind = captchaController.bind(() => 'live-token');
    addTearDown(unbind);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          publicConfigProvider.overrideWith(
            (ref) async => const PublicConfig(captchaSiteKey: 'test-site-key'),
          ),
          roleRequestRepositoryProvider.overrideWithValue(repository),
        ],
        child: MaterialApp(
          home: RoleRequestPage(captchaController: captchaController),
        ),
      ),
    );
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField).first, 'Product Designer');
    tester
        .widget<CaptchaChallenge>(find.byType(CaptchaChallenge))
        .onTokenChanged('callback-token');
    await tester.pump();
    await tester.tap(find.text('Send request'));
    await tester.pumpAndSettle();

    expect(repository.submissions, 1);
    expect(repository.captchaToken, 'live-token');
  });

  testWidgets('role request stops when the live CAPTCHA token has expired', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(1280, 1200);
    tester.view.devicePixelRatio = 1;
    addTearDown(() {
      tester.view.resetPhysicalSize();
      tester.view.resetDevicePixelRatio();
    });
    final repository = _RoleRequestRepository();
    final captchaController = CaptchaChallengeController();

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          publicConfigProvider.overrideWith(
            (ref) async => const PublicConfig(captchaSiteKey: 'test-site-key'),
          ),
          roleRequestRepositoryProvider.overrideWithValue(repository),
        ],
        child: MaterialApp(
          home: RoleRequestPage(captchaController: captchaController),
        ),
      ),
    );
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField).first, 'Product Designer');
    tester
        .widget<CaptchaChallenge>(find.byType(CaptchaChallenge))
        .onTokenChanged('callback-token');
    await tester.pump();
    await tester.tap(find.text('Send request'));
    await tester.pump();

    expect(repository.submissions, 0);
    expect(
      find.text(
        'Your CAPTCHA expired or could not be verified. Please complete it again and resend your request.',
      ),
      findsOneWidget,
    );
  });
}

class _RoleRequestRepository implements RoleRequestRepository {
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

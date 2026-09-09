import 'package:catalog_models/catalog_models.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv_web/app/app.dart';
import 'package:ready_my_cv_web/app/providers.dart';
import 'package:ready_my_cv_web/core/domain/repositories.dart';
import 'package:ready_my_cv_web/core/presentation/captcha_challenge.dart';
import 'package:ready_my_cv_web/features/public/presentation/public_pages.dart';

void main() {
  testWidgets('landing page explains temporary processing and is free', (
    tester,
  ) async {
    await tester.pumpWidget(const ProviderScope(child: ReadyMyCvApp()));
    await tester.pump();
    expect(find.textContaining('100% free'), findsOneWidget);
    expect(find.textContaining('temporary server processing'), findsOneWidget);
    expect(find.bySemanticsLabel('Ready My CV logo'), findsOneWidget);
  });

  testWidgets('landing page stacks the assessment preview on narrow screens', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(() {
      tester.view.resetPhysicalSize();
      tester.view.resetDevicePixelRatio();
    });

    await tester.pumpWidget(const ProviderScope(child: ReadyMyCvApp()));
    await tester.pump();

    expect(find.text('Choose role'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

  testWidgets('scan form gates each step in order', (tester) async {
    final role = JobRole(
      slug: 'backend-developer',
      title: 'Backend Developer',
      description: 'Test role',
    );
    final catalog = CatalogSnapshot(
      version: 'catalog-1',
      engineVersion: 'engine-1',
      publishedAt: DateTime(2026),
      roles: [role],
    );

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          publishedCatalogProvider.overrideWith((ref) async => catalog),
          publicConfigProvider.overrideWith(
            (ref) async => const PublicConfig(captchaSiteKey: 'test-site-key'),
          ),
        ],
        child: const MaterialApp(home: ScanPage()),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.text('PROCESSING NOTICE'), findsOneWidget);
    expect(find.text('CAPTCHA VERIFICATION'), findsOneWidget);
    expect(find.text('TARGET ROLE'), findsOneWidget);
    expect(find.text('UPLOAD YOUR PDF'), findsOneWidget);
    expect(
      find.text('Accept the processing notice to continue.'),
      findsOneWidget,
    );
    expect(find.byType(CaptchaChallenge), findsNothing);
    final initialUploadText = find.text('Accept the processing notice first');
    expect(initialUploadText, findsOneWidget);
    final initialUpload = find
        .ancestor(of: initialUploadText, matching: find.byType(InkWell))
        .first;
    expect(tester.widget<InkWell>(initialUpload).onTap, isNull);

    final initialRoleField = tester.widget<DropdownButtonFormField<JobRole>>(
      find.byType(DropdownButtonFormField<JobRole>),
    );
    expect(initialRoleField.onChanged, isNull);

    final consentCheckbox = find.byType(CheckboxListTile);
    await tester.drag(find.byType(ListView), const Offset(0, -260));
    await tester.pump();
    await tester.ensureVisible(consentCheckbox);
    await tester.tap(consentCheckbox);
    await tester.pumpAndSettle();

    expect(find.byType(CaptchaChallenge), findsOneWidget);
    expect(
      find.text('Accept the processing notice to continue.'),
      findsNothing,
    );
    final captchaUploadText = find.text('Complete CAPTCHA first');
    expect(captchaUploadText, findsOneWidget);
    final captchaUpload = find
        .ancestor(of: captchaUploadText, matching: find.byType(InkWell))
        .first;
    expect(tester.widget<InkWell>(captchaUpload).onTap, isNull);

    final captchaRoleField = tester.widget<DropdownButtonFormField<JobRole>>(
      find.byType(DropdownButtonFormField<JobRole>),
    );
    expect(captchaRoleField.onChanged, isNull);
  });
}

import 'dart:typed_data';

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

  testWidgets('selecting a PDF stages it without starting analysis', (
    tester,
  ) async {
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
    final picker = _FakePdfPicker();
    final repository = _RecordingAnalysisRepository();
    final captchaController = CaptchaChallengeController();
    final captchaOwner = Object();
    captchaController.attach(
      captchaOwner,
      reader: () => 'test-token',
      reset: () {},
    );

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          publishedCatalogProvider.overrideWith((ref) async => catalog),
          publicConfigProvider.overrideWith(
            (ref) async => const PublicConfig(captchaSiteKey: 'test-site-key'),
          ),
          analysisJobRepositoryProvider.overrideWithValue(repository),
        ],
        child: MaterialApp(
          home: ScanPage(
            filePicker: picker,
            captchaController: captchaController,
          ),
        ),
      ),
    );
    await tester.pumpAndSettle();

    final consentCheckbox = find.byType(CheckboxListTile);
    tester.widget<CheckboxListTile>(consentCheckbox).onChanged!(true);
    await tester.pump();
    final roleField = tester.widget<DropdownButtonFormField<JobRole>>(
      find.byType(DropdownButtonFormField<JobRole>),
    );
    roleField.onChanged!(role);
    await tester.pump();

    final uploadPrompt = find.text('Select a PDF to prepare your scan');
    final uploadInkWell = tester.widget<InkWell>(
      find.ancestor(of: uploadPrompt, matching: find.byType(InkWell)).first,
    );
    uploadInkWell.onTap!();
    await tester.pumpAndSettle();

    expect(picker.picks, 1);
    expect(repository.uploads, 0);
    expect(
      find.text('PDF selected. Click Start Scan when ready.'),
      findsOneWidget,
    );
    final startButton = find.ancestor(
      of: find.text('Start Scan'),
      matching: find.byWidgetPredicate((widget) => widget is ButtonStyleButton),
    );
    expect(find.text('Start Scan'), findsOneWidget);
    expect(startButton, findsOneWidget);
    expect(tester.widget<ButtonStyleButton>(startButton).onPressed, isNotNull);

    final startPressed = tester
        .widget<ButtonStyleButton>(startButton)
        .onPressed!;
    startPressed();
    startPressed();
    await tester.pumpAndSettle();

    expect(repository.uploads, 1);
    expect(picker.bytes.every((value) => value == 0), true);
  });
}

class _FakePdfPicker implements PdfPicker {
  final bytes = Uint8List.fromList(const [37, 80, 68, 70, 45, 49]);
  int picks = 0;

  @override
  Future<PickedPdf?> pick() async {
    picks++;
    return PickedPdf(name: 'resume.pdf', bytes: bytes);
  }
}

class _RecordingAnalysisRepository implements AnalysisJobRepository {
  int uploads = 0;

  @override
  Future<AnalysisUpload> upload({
    required List<int> bytes,
    required String roleSlug,
    String? seniority,
    required bool consent,
    required String captchaToken,
  }) async {
    uploads++;
    return const AnalysisUpload(
      handle: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      status: 'failed',
      mode: 'terminal',
    );
  }

  @override
  Future<AnalysisJobStatus> status(String handle) => throw UnimplementedError();

  @override
  Future<void> sendEmail({required String handle, required String email}) =>
      throw UnimplementedError();

  @override
  Future<void> cancel(String handle) async {}
}

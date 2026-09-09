import 'dart:async';
import 'dart:typed_data';

import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ready_my_cv_web/app/providers.dart';
import 'package:ready_my_cv_web/core/domain/repositories.dart';
import 'package:ready_my_cv_web/features/scan/application/scan_view_model.dart';

void main() {
  test('consent is required before the backend repository is called', () async {
    final repository = _FakeAnalysisRepository();
    final container = ProviderContainer(
      overrides: [analysisJobRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);
    final notifier = container.read(scanViewModelProvider.notifier);
    notifier.chooseRole(_role, 'senior');
    await notifier.analyze(
      Uint8List.fromList(_pdfBytes),
      captchaToken: 'test-token',
    );
    expect(
      container.read(scanViewModelProvider).errorMessage,
      contains('consent'),
    );
    expect(repository.uploads, 0);
  });

  test('CAPTCHA is required before the backend repository is called', () async {
    final repository = _FakeAnalysisRepository();
    final container = ProviderContainer(
      overrides: [analysisJobRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);
    final notifier = container.read(scanViewModelProvider.notifier);
    notifier.chooseRole(_role, 'senior');
    notifier.setConsent(true);
    await notifier.analyze(Uint8List.fromList(_pdfBytes), captchaToken: null);
    expect(
      container.read(scanViewModelProvider).errorMessage,
      contains('CAPTCHA'),
    );
    expect(repository.uploads, 0);
  });

  test('CAPTCHA is validated before role selection', () async {
    final repository = _FakeAnalysisRepository();
    final container = ProviderContainer(
      overrides: [analysisJobRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);
    final notifier = container.read(scanViewModelProvider.notifier);
    notifier.setConsent(true);
    await notifier.analyze(Uint8List.fromList(_pdfBytes), captchaToken: null);
    expect(
      container.read(scanViewModelProvider).errorMessage,
      contains('CAPTCHA'),
    );
    expect(repository.uploads, 0);
  });

  test('role selection is required after consent and CAPTCHA', () async {
    final repository = _FakeAnalysisRepository();
    final container = ProviderContainer(
      overrides: [analysisJobRepositoryProvider.overrideWithValue(repository)],
    );
    addTearDown(container.dispose);
    final notifier = container.read(scanViewModelProvider.notifier);
    notifier.setConsent(true);
    await notifier.analyze(
      Uint8List.fromList(_pdfBytes),
      captchaToken: 'test-token',
    );
    expect(
      container.read(scanViewModelProvider).errorMessage,
      contains('role'),
    );
    expect(repository.uploads, 0);
  });

  test('revoking consent clears downstream selections', () {
    final container = ProviderContainer();
    addTearDown(container.dispose);
    final notifier = container.read(scanViewModelProvider.notifier);
    notifier.setConsent(true);
    notifier.chooseRole(_role, 'senior');
    notifier.setConsent(false);
    final state = container.read(scanViewModelProvider);
    expect(state.consentGiven, false);
    expect(state.role, isNull);
    expect(state.seniority, isNull);
  });

  test(
    'fast backend result reaches the existing completed result contract',
    () async {
      final repository = _FakeAnalysisRepository();
      final container = ProviderContainer(
        overrides: [
          analysisJobRepositoryProvider.overrideWithValue(repository),
        ],
      );
      addTearDown(container.dispose);
      final notifier = container.read(scanViewModelProvider.notifier);
      notifier.chooseRole(_role, 'senior');
      notifier.setConsent(true);
      final bytes = Uint8List.fromList(_pdfBytes);
      await notifier.analyze(bytes, captchaToken: 'test-token');
      final state = container.read(scanViewModelProvider);
      expect(repository.uploads, 1);
      expect(repository.captchaToken, 'test-token');
      expect(bytes.every((value) => value == 0), true);
      expect(state.stage, ScanStage.completed);
      expect(state.result?.verification.valid, true);
    },
  );

  test(
    'analysis remains busy until the backend upload attempt resolves',
    () async {
      final repository = _FakeAnalysisRepository();
      final upload = Completer<AnalysisUpload>();
      repository.uploadCompleter = upload;
      final container = ProviderContainer(
        overrides: [
          analysisJobRepositoryProvider.overrideWithValue(repository),
        ],
      );
      addTearDown(container.dispose);
      final notifier = container.read(scanViewModelProvider.notifier);
      notifier.chooseRole(_role, 'senior');
      notifier.setConsent(true);

      final analysis = notifier.analyze(
        Uint8List.fromList(_pdfBytes),
        captchaToken: 'test-token',
      );

      final pendingState = container.read(scanViewModelProvider);
      expect(pendingState.busy, true);
      expect(pendingState.stage, ScanStage.uploading);

      upload.complete(
        AnalysisUpload(
          handle: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          status: 'completed',
          mode: 'fast',
          result: _result,
        ),
      );
      await analysis;
      expect(container.read(scanViewModelProvider).stage, ScanStage.completed);
    },
  );
}

final _role = JobRole(
  slug: 'backend-developer',
  title: 'Backend Developer',
  description: 'test',
  seniorities: [SeniorityLevel.senior],
);

final _result = AnalysisResult(
  roleSlug: 'backend-developer',
  roleTitle: 'Backend Developer',
  seniority: 'senior',
  catalogVersion: 'catalog-1',
  engineVersion: 'engine-1',
  evidence: const [],
  score: const ScoreBreakdown(
    roleSkills: 20,
    experience: 20,
    ats: 15,
    completeness: 8,
    impact: 7,
  ),
  recommendations: const [],
  trajectory: List.generate(
    7,
    (index) => TrajectoryEntry(
      agent: 'Agent',
      step: index,
      goal: 'goal',
      tool: 'tool',
      observation: 'observation',
      decision: 'decision',
      confidence: 1,
      stateUpdate: 'state',
      nextAgent: null,
      retry: false,
    ),
  ),
  verification: const VerificationResult(valid: true),
);

const _pdfBytes = [37, 80, 68, 70, 45, 49, 46, 55];

class _FakeAnalysisRepository implements AnalysisJobRepository {
  int uploads = 0;
  String? captchaToken;
  Completer<AnalysisUpload>? uploadCompleter;

  @override
  Future<AnalysisUpload> upload({
    required List<int> bytes,
    required String roleSlug,
    String? seniority,
    required bool consent,
    required String captchaToken,
  }) async {
    uploads += 1;
    this.captchaToken = captchaToken;
    final pending = uploadCompleter;
    if (pending != null) return pending.future;
    return AnalysisUpload(
      handle: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      status: 'completed',
      mode: 'fast',
      result: _result,
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

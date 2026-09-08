import 'dart:async';
import 'dart:typed_data';

import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../app/providers.dart';
import '../../../core/network/app_http_client.dart';
import 'scan_state.dart';

part 'scan_view_model.g.dart';

@riverpod
class ScanViewModel extends _$ScanViewModel {
  _ScanCancellation? _cancellation;
  Uint8List? _activeBytes;
  String? _activeHandle;

  @override
  ScanState build() {
    ref.onDispose(() {
      _cancellation?.cancelled = true;
      final bytes = _activeBytes;
      if (bytes != null) bytes.fillRange(0, bytes.length, 0);
      _activeBytes = null;
      final handle = _activeHandle;
      if (handle != null) {
        unawaited(
          ref
              .read(analysisJobRepositoryProvider)
              .cancel(handle)
              .catchError((_) {}),
        );
      }
      _activeHandle = null;
    });
    return const ScanState();
  }

  void chooseRole(JobRole role, String? seniority) {
    state = state.copyWith(
      role: role,
      seniority: seniority,
      errorMessage: null,
    );
  }

  void setConsent(bool value) {
    state = state.copyWith(consentGiven: value, errorMessage: null);
  }

  void beginFileSelection() {
    if (!state.busy) state = state.copyWith(stage: ScanStage.selectingFile);
  }

  void fileSelectionCancelled() {
    if (!state.busy) state = state.copyWith(stage: ScanStage.idle);
  }

  Future<void> analyze(Uint8List bytes, {required String? captchaToken}) async {
    final role = state.role;
    if (role == null || state.busy) return;
    if (!state.consentGiven) {
      state = state.copyWith(
        errorMessage: 'Please accept the consent notice before uploading.',
      );
      return;
    }
    if (captchaToken == null || captchaToken.isEmpty) {
      state = state.copyWith(
        errorMessage:
            'Please complete the CAPTCHA verification before uploading.',
      );
      return;
    }
    if (bytes.isEmpty) {
      state = state.copyWith(
        stage: ScanStage.failed,
        errorMessage: 'Please choose a non-empty PDF.',
      );
      return;
    }
    if (bytes.length > 10 * 1024 * 1024) {
      state = state.copyWith(
        stage: ScanStage.failed,
        errorMessage: 'PDF must be 10 MB or smaller.',
      );
      return;
    }
    if (bytes.length < 5 || String.fromCharCodes(bytes.take(5)) != '%PDF-') {
      state = state.copyWith(
        stage: ScanStage.failed,
        errorMessage: 'The selected file is not a valid PDF.',
      );
      return;
    }

    final cancellation = _ScanCancellation();
    _cancellation = cancellation;
    _activeBytes = bytes;
    state = state.copyWith(
      stage: ScanStage.uploading,
      busy: true,
      errorMessage: null,
      result: null,
      jobHandle: null,
      emailSent: false,
    );
    try {
      final upload = await ref
          .read(analysisJobRepositoryProvider)
          .upload(
            bytes: bytes,
            roleSlug: role.slug,
            seniority: state.seniority,
            consent: true,
            captchaToken: captchaToken,
          );
      cancellation.throwIfCancelled();
      if (upload.mode == 'terminal') {
        state = state.copyWith(
          stage: upload.status == 'expired'
              ? ScanStage.expired
              : ScanStage.failed,
          busy: false,
          errorMessage: upload.status == 'expired'
              ? null
              : 'The CV could not be processed.',
          jobHandle: null,
        );
        return;
      }
      if (upload.mode == 'fast' && upload.result != null) {
        _activeHandle = null;
        state = state.copyWith(
          stage: ScanStage.completed,
          result: upload.result,
          busy: false,
        );
        return;
      }
      _activeHandle = upload.handle;
      state = state.copyWith(
        stage: ScanStage.queued,
        jobHandle: upload.handle,
        busy: true,
      );
      await _poll(upload.handle, cancellation, upload.pollAfterMs);
    } on _ScanCancelled {
      _activeHandle = null;
      state = state.copyWith(
        stage: ScanStage.cancelled,
        busy: false,
        jobHandle: null,
      );
    } on AppHttpException catch (error) {
      if (!cancellation.cancelled) {
        _activeHandle = null;
        state = state.copyWith(
          stage: ScanStage.failed,
          busy: false,
          errorMessage: error.message,
          jobHandle: null,
        );
      }
    } catch (_) {
      if (!cancellation.cancelled) {
        _activeHandle = null;
        state = state.copyWith(
          stage: ScanStage.failed,
          busy: false,
          errorMessage: 'The CV could not be processed. Try again.',
          jobHandle: null,
        );
      }
    } finally {
      bytes.fillRange(0, bytes.length, 0);
      _activeBytes = null;
      if (identical(_cancellation, cancellation)) _cancellation = null;
    }
  }

  Future<void> _poll(
    String handle,
    _ScanCancellation cancellation,
    int initialDelay,
  ) async {
    var delayMs = initialDelay;
    while (true) {
      await Future<void>.delayed(Duration(milliseconds: delayMs));
      cancellation.throwIfCancelled();
      try {
        final status = await ref
            .read(analysisJobRepositoryProvider)
            .status(handle);
        cancellation.throwIfCancelled();
        switch (status.status) {
          case 'queued':
            state = state.copyWith(stage: ScanStage.queued, busy: true);
          case 'processing':
            state = state.copyWith(stage: ScanStage.processing, busy: true);
          case 'awaiting_email':
            state = state.copyWith(stage: ScanStage.awaitingEmail, busy: false);
            return;
          case 'email_pending' || 'email_sending':
            state = state.copyWith(stage: ScanStage.sendingEmail, busy: true);
          case 'expired':
            _activeHandle = null;
            state = state.copyWith(
              stage: ScanStage.expired,
              busy: false,
              jobHandle: null,
            );
            return;
          case 'failed' || 'cancelled':
            _activeHandle = null;
            state = state.copyWith(
              stage: ScanStage.failed,
              busy: false,
              errorMessage: 'The CV could not be processed.',
              jobHandle: null,
            );
            return;
          default:
            state = state.copyWith(stage: ScanStage.processing, busy: true);
        }
        delayMs = status.pollAfterMs.clamp(500, 3000);
      } on AppHttpException catch (error) {
        if (error.statusCode == 404) {
          _activeHandle = null;
          state = state.copyWith(
            stage: ScanStage.expired,
            busy: false,
            jobHandle: null,
          );
          return;
        }
        rethrow;
      }
    }
  }

  Future<void> sendEmail(String email) async {
    final handle = state.jobHandle;
    if (handle == null ||
        state.stage != ScanStage.awaitingEmail ||
        state.busy) {
      return;
    }
    final recipient = email.trim();
    if (!RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$').hasMatch(recipient) ||
        recipient.length > 254) {
      state = state.copyWith(errorMessage: 'Enter a valid email address.');
      return;
    }
    final cancellation = _cancellation ??= _ScanCancellation();
    state = state.copyWith(
      stage: ScanStage.sendingEmail,
      busy: true,
      errorMessage: null,
    );
    try {
      await ref
          .read(analysisJobRepositoryProvider)
          .sendEmail(handle: handle, email: recipient);
      if (cancellation.cancelled) return;
      _activeHandle = null;
      state = state.copyWith(
        stage: ScanStage.completed,
        busy: false,
        jobHandle: null,
        emailSent: true,
      );
    } on AppHttpException catch (error) {
      if (error.statusCode == 404) {
        _activeHandle = null;
        state = state.copyWith(
          stage: ScanStage.completed,
          busy: false,
          jobHandle: null,
          emailSent: true,
        );
      } else {
        state = state.copyWith(
          stage: ScanStage.awaitingEmail,
          busy: false,
          errorMessage: error.message,
        );
      }
    } catch (_) {
      state = state.copyWith(
        stage: ScanStage.awaitingEmail,
        busy: false,
        errorMessage: 'The report could not be sent. Please try again.',
      );
    }
  }

  void cancel() {
    final handle = state.jobHandle;
    _cancellation?.cancelled = true;
    final bytes = _activeBytes;
    if (bytes != null) bytes.fillRange(0, bytes.length, 0);
    if (handle != null) {
      unawaited(
        ref
            .read(analysisJobRepositoryProvider)
            .cancel(handle)
            .catchError((_) {}),
      );
    }
    _activeHandle = null;
    _activeBytes = null;
    state = state.copyWith(
      stage: ScanStage.cancelled,
      busy: false,
      jobHandle: null,
    );
  }

  void reset() {
    cancel();
    _cancellation = null;
    state = const ScanState();
  }
}

class _ScanCancellation {
  bool cancelled = false;

  void throwIfCancelled() {
    if (cancelled) throw const _ScanCancelled();
  }
}

class _ScanCancelled implements Exception {
  const _ScanCancelled();
}

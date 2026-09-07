import 'dart:typed_data';

import 'package:agent_engine/agent_engine.dart';
import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../app/providers.dart';
import 'scan_state.dart';

part 'scan_view_model.g.dart';

@riverpod
class ScanViewModel extends _$ScanViewModel {
  CancellationToken? _cancellationToken;
  Uint8List? _activeBytes;

  @override
  ScanState build() => const ScanState();

  void chooseRole(JobRole role, String? seniority) {
    state = state.copyWith(
      role: role,
      seniority: seniority,
      errorMessage: null,
    );
  }

  void beginFileSelection() {
    if (!state.busy) state = state.copyWith(stage: ScanStage.selectingFile);
  }

  void fileSelectionCancelled() {
    if (!state.busy) state = state.copyWith(stage: ScanStage.idle);
  }

  Future<void> analyze(Uint8List bytes) async {
    final role = state.role;
    if (role == null || state.busy) return;
    state = state.copyWith(
      stage: ScanStage.loadingCatalog,
      busy: true,
      errorMessage: null,
      result: null,
    );
    final cancellationToken = CancellationToken();
    _cancellationToken = cancellationToken;
    _activeBytes = bytes;
    try {
      final catalog = await ref.read(publishedCatalogProvider.future);
      cancellationToken.throwIfCancelled();
      state = state.copyWith(stage: ScanStage.validatingFile);
      if (bytes.isEmpty) throw StateError('Please choose a non-empty PDF.');
      state = state.copyWith(stage: ScanStage.extracting);
      state = state.copyWith(stage: ScanStage.analyzing);
      final result = await ref
          .read(scanWorkflowProvider)
          .run(
            bytes: bytes,
            role: role,
            catalog: catalog,
            seniority: state.seniority,
            cancellationToken: cancellationToken,
          );
      cancellationToken.throwIfCancelled();
      state = state.copyWith(
        stage: ScanStage.verifying,
        result: result,
        busy: false,
      );
      state = state.copyWith(stage: ScanStage.completed);
    } on WorkflowCancelledException {
      state = state.copyWith(stage: ScanStage.cancelled, busy: false);
    } catch (error) {
      state = state.copyWith(
        stage: ScanStage.failed,
        busy: false,
        errorMessage: error.toString().replaceFirst('Exception: ', ''),
      );
    } finally {
      bytes.fillRange(0, bytes.length, 0);
      _activeBytes = null;
      if (identical(_cancellationToken, cancellationToken)) {
        _cancellationToken = null;
      }
    }
  }

  void cancel() {
    _cancellationToken?.cancel();
    final bytes = _activeBytes;
    if (bytes != null) bytes.fillRange(0, bytes.length, 0);
    state = state.copyWith(stage: ScanStage.cancelled, busy: false);
  }

  void reset() {
    _cancellationToken?.cancel();
    final bytes = _activeBytes;
    if (bytes != null) bytes.fillRange(0, bytes.length, 0);
    _activeBytes = null;
    _cancellationToken = null;
    state = const ScanState();
  }
}

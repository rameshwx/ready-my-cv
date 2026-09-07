import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part 'scan_state.freezed.dart';

@freezed
abstract class ScanState with _$ScanState {
  const factory ScanState({
    @Default(ScanStage.idle) ScanStage stage,
    JobRole? role,
    String? seniority,
    AnalysisResult? result,
    String? errorMessage,
    @Default(false) bool busy,
  }) = _ScanState;
}

class ScanCancelled implements Exception {
  const ScanCancelled();
}

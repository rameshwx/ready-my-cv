import 'package:freezed_annotation/freezed_annotation.dart';

part 'core_models.freezed.dart';
part 'core_models.g.dart';

enum EvidenceClassification {
  strong,
  weak,
  mentionOnly,
  missing,
  contradictory,
}

enum ScanStage {
  idle,
  loadingCatalog,
  selectingFile,
  validatingFile,
  extracting,
  analyzing,
  verifying,
  completed,
  failed,
  cancelled,
}

enum AdminSessionStatus {
  unknown,
  signedOut,
  signingIn,
  signedIn,
  changingCredentials,
  signingOut,
  expired,
  failure,
}

@freezed
abstract class CvTextSpan with _$CvTextSpan {
  const factory CvTextSpan({
    required String text,
    required int start,
    required int end,
    required int page,
    String? section,
  }) = _CvTextSpan;

  factory CvTextSpan.fromJson(Map<String, dynamic> json) =>
      _$CvTextSpanFromJson(json);
}

@freezed
abstract class CvPage with _$CvPage {
  const factory CvPage({
    required int number,
    required String text,
    @Default([]) List<CvTextSpan> spans,
  }) = _CvPage;

  factory CvPage.fromJson(Map<String, dynamic> json) => _$CvPageFromJson(json);
}

@freezed
abstract class CvSection with _$CvSection {
  const factory CvSection({
    required String name,
    required int page,
    required int start,
    required int end,
  }) = _CvSection;

  factory CvSection.fromJson(Map<String, dynamic> json) =>
      _$CvSectionFromJson(json);
}

@freezed
abstract class CvDocument with _$CvDocument {
  const factory CvDocument({
    required List<CvPage> pages,
    required List<CvSection> sections,
    required String normalizedText,
    @Default([]) List<String> warnings,
  }) = _CvDocument;

  factory CvDocument.fromJson(Map<String, dynamic> json) =>
      _$CvDocumentFromJson(json);
}

@freezed
abstract class NormalizedTerm with _$NormalizedTerm {
  const factory NormalizedTerm({
    required String requirementId,
    required String canonicalTerm,
    required String matchedTerm,
    required bool aliasUsed,
    required int start,
    required int end,
    required int page,
  }) = _NormalizedTerm;

  factory NormalizedTerm.fromJson(Map<String, dynamic> json) =>
      _$NormalizedTermFromJson(json);
}

@freezed
abstract class Evidence with _$Evidence {
  const factory Evidence({
    required String id,
    required String requirementId,
    required String canonicalTerm,
    required String? matchedTerm,
    required EvidenceClassification classification,
    required String explanation,
    required String? section,
    required int? page,
    required int? start,
    required int? end,
    required String matchingTool,
  }) = _Evidence;

  factory Evidence.fromJson(Map<String, dynamic> json) =>
      _$EvidenceFromJson(json);

  const Evidence._();

  double get multiplier => switch (classification) {
    EvidenceClassification.strong => 1,
    EvidenceClassification.weak => .5,
    EvidenceClassification.mentionOnly => .2,
    EvidenceClassification.missing || EvidenceClassification.contradictory => 0,
  };
}

@freezed
abstract class ScoreBreakdown with _$ScoreBreakdown {
  const factory ScoreBreakdown({
    required double roleSkills,
    required double experience,
    required double ats,
    required double completeness,
    required double impact,
  }) = _ScoreBreakdown;

  factory ScoreBreakdown.fromJson(Map<String, dynamic> json) =>
      _$ScoreBreakdownFromJson(json);

  const ScoreBreakdown._();

  int get total => (roleSkills + experience + ats + completeness + impact)
      .clamp(0, 100)
      .round();

  String get band => total < 50
      ? 'Needs work'
      : total < 70
      ? 'Developing'
      : total < 85
      ? 'Strong'
      : 'Very strong';
}

@freezed
abstract class Recommendation with _$Recommendation {
  const factory Recommendation({
    required String id,
    required String text,
    required bool conditional,
  }) = _Recommendation;

  factory Recommendation.fromJson(Map<String, dynamic> json) =>
      _$RecommendationFromJson(json);
}

@freezed
abstract class TrajectoryEntry with _$TrajectoryEntry {
  const factory TrajectoryEntry({
    required String agent,
    required int step,
    required String goal,
    required String tool,
    required String observation,
    required String decision,
    required double confidence,
    required String stateUpdate,
    required String? nextAgent,
    required bool retry,
  }) = _TrajectoryEntry;

  factory TrajectoryEntry.fromJson(Map<String, dynamic> json) =>
      _$TrajectoryEntryFromJson(json);
}

@freezed
abstract class VerificationResult with _$VerificationResult {
  const factory VerificationResult({
    required bool valid,
    @Default([]) List<String> failures,
  }) = _VerificationResult;

  factory VerificationResult.fromJson(Map<String, dynamic> json) =>
      _$VerificationResultFromJson(json);
}

@freezed
abstract class AnalysisResult with _$AnalysisResult {
  const factory AnalysisResult({
    required String roleSlug,
    required String roleTitle,
    required String? seniority,
    required String catalogVersion,
    required String engineVersion,
    required List<Evidence> evidence,
    required ScoreBreakdown score,
    required List<Recommendation> recommendations,
    required List<TrajectoryEntry> trajectory,
    required VerificationResult verification,
  }) = _AnalysisResult;

  factory AnalysisResult.fromJson(Map<String, dynamic> json) =>
      _$AnalysisResultFromJson(json);
}

@freezed
abstract class DomainFailure with _$DomainFailure {
  const factory DomainFailure({
    required String code,
    required String message,
    @Default(true) bool recoverable,
  }) = _DomainFailure;

  factory DomainFailure.fromJson(Map<String, dynamic> json) =>
      _$DomainFailureFromJson(json);
}

@freezed
abstract class AdminSessionState with _$AdminSessionState {
  const factory AdminSessionState({
    @Default(AdminSessionStatus.unknown) AdminSessionStatus status,
    @Default(false) bool forcePasswordChange,
    String? message,
  }) = _AdminSessionState;

  factory AdminSessionState.fromJson(Map<String, dynamic> json) =>
      _$AdminSessionStateFromJson(json);
}

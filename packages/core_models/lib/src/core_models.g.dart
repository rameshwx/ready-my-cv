// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'core_models.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_CvTextSpan _$CvTextSpanFromJson(Map<String, dynamic> json) => _CvTextSpan(
  text: json['text'] as String,
  start: (json['start'] as num).toInt(),
  end: (json['end'] as num).toInt(),
  page: (json['page'] as num).toInt(),
  section: json['section'] as String?,
);

Map<String, dynamic> _$CvTextSpanToJson(_CvTextSpan instance) =>
    <String, dynamic>{
      'text': instance.text,
      'start': instance.start,
      'end': instance.end,
      'page': instance.page,
      'section': instance.section,
    };

_CvPage _$CvPageFromJson(Map<String, dynamic> json) => _CvPage(
  number: (json['number'] as num).toInt(),
  text: json['text'] as String,
  spans:
      (json['spans'] as List<dynamic>?)
          ?.map((e) => CvTextSpan.fromJson(e as Map<String, dynamic>))
          .toList() ??
      const [],
);

Map<String, dynamic> _$CvPageToJson(_CvPage instance) => <String, dynamic>{
  'number': instance.number,
  'text': instance.text,
  'spans': instance.spans,
};

_CvSection _$CvSectionFromJson(Map<String, dynamic> json) => _CvSection(
  name: json['name'] as String,
  page: (json['page'] as num).toInt(),
  start: (json['start'] as num).toInt(),
  end: (json['end'] as num).toInt(),
);

Map<String, dynamic> _$CvSectionToJson(_CvSection instance) =>
    <String, dynamic>{
      'name': instance.name,
      'page': instance.page,
      'start': instance.start,
      'end': instance.end,
    };

_CvDocument _$CvDocumentFromJson(Map<String, dynamic> json) => _CvDocument(
  pages: (json['pages'] as List<dynamic>)
      .map((e) => CvPage.fromJson(e as Map<String, dynamic>))
      .toList(),
  sections: (json['sections'] as List<dynamic>)
      .map((e) => CvSection.fromJson(e as Map<String, dynamic>))
      .toList(),
  normalizedText: json['normalizedText'] as String,
  warnings:
      (json['warnings'] as List<dynamic>?)?.map((e) => e as String).toList() ??
      const [],
);

Map<String, dynamic> _$CvDocumentToJson(_CvDocument instance) =>
    <String, dynamic>{
      'pages': instance.pages,
      'sections': instance.sections,
      'normalizedText': instance.normalizedText,
      'warnings': instance.warnings,
    };

_NormalizedTerm _$NormalizedTermFromJson(Map<String, dynamic> json) =>
    _NormalizedTerm(
      requirementId: json['requirementId'] as String,
      canonicalTerm: json['canonicalTerm'] as String,
      matchedTerm: json['matchedTerm'] as String,
      aliasUsed: json['aliasUsed'] as bool,
      start: (json['start'] as num).toInt(),
      end: (json['end'] as num).toInt(),
      page: (json['page'] as num).toInt(),
    );

Map<String, dynamic> _$NormalizedTermToJson(_NormalizedTerm instance) =>
    <String, dynamic>{
      'requirementId': instance.requirementId,
      'canonicalTerm': instance.canonicalTerm,
      'matchedTerm': instance.matchedTerm,
      'aliasUsed': instance.aliasUsed,
      'start': instance.start,
      'end': instance.end,
      'page': instance.page,
    };

_Evidence _$EvidenceFromJson(Map<String, dynamic> json) => _Evidence(
  id: json['id'] as String,
  requirementId: json['requirementId'] as String,
  canonicalTerm: json['canonicalTerm'] as String,
  matchedTerm: json['matchedTerm'] as String?,
  classification: $enumDecode(
    _$EvidenceClassificationEnumMap,
    json['classification'],
  ),
  explanation: json['explanation'] as String,
  section: json['section'] as String?,
  page: (json['page'] as num?)?.toInt(),
  start: (json['start'] as num?)?.toInt(),
  end: (json['end'] as num?)?.toInt(),
  matchingTool: json['matchingTool'] as String,
);

Map<String, dynamic> _$EvidenceToJson(_Evidence instance) => <String, dynamic>{
  'id': instance.id,
  'requirementId': instance.requirementId,
  'canonicalTerm': instance.canonicalTerm,
  'matchedTerm': instance.matchedTerm,
  'classification': _$EvidenceClassificationEnumMap[instance.classification]!,
  'explanation': instance.explanation,
  'section': instance.section,
  'page': instance.page,
  'start': instance.start,
  'end': instance.end,
  'matchingTool': instance.matchingTool,
};

const _$EvidenceClassificationEnumMap = {
  EvidenceClassification.strong: 'strong',
  EvidenceClassification.weak: 'weak',
  EvidenceClassification.mentionOnly: 'mentionOnly',
  EvidenceClassification.missing: 'missing',
  EvidenceClassification.contradictory: 'contradictory',
};

_ScoreBreakdown _$ScoreBreakdownFromJson(Map<String, dynamic> json) =>
    _ScoreBreakdown(
      roleSkills: (json['roleSkills'] as num).toDouble(),
      experience: (json['experience'] as num).toDouble(),
      ats: (json['ats'] as num).toDouble(),
      completeness: (json['completeness'] as num).toDouble(),
      impact: (json['impact'] as num).toDouble(),
    );

Map<String, dynamic> _$ScoreBreakdownToJson(_ScoreBreakdown instance) =>
    <String, dynamic>{
      'roleSkills': instance.roleSkills,
      'experience': instance.experience,
      'ats': instance.ats,
      'completeness': instance.completeness,
      'impact': instance.impact,
    };

_Recommendation _$RecommendationFromJson(Map<String, dynamic> json) =>
    _Recommendation(
      id: json['id'] as String,
      text: json['text'] as String,
      conditional: json['conditional'] as bool,
    );

Map<String, dynamic> _$RecommendationToJson(_Recommendation instance) =>
    <String, dynamic>{
      'id': instance.id,
      'text': instance.text,
      'conditional': instance.conditional,
    };

_TrajectoryEntry _$TrajectoryEntryFromJson(Map<String, dynamic> json) =>
    _TrajectoryEntry(
      agent: json['agent'] as String,
      step: (json['step'] as num).toInt(),
      goal: json['goal'] as String,
      tool: json['tool'] as String,
      observation: json['observation'] as String,
      decision: json['decision'] as String,
      confidence: (json['confidence'] as num).toDouble(),
      stateUpdate: json['stateUpdate'] as String,
      nextAgent: json['nextAgent'] as String?,
      retry: json['retry'] as bool,
    );

Map<String, dynamic> _$TrajectoryEntryToJson(_TrajectoryEntry instance) =>
    <String, dynamic>{
      'agent': instance.agent,
      'step': instance.step,
      'goal': instance.goal,
      'tool': instance.tool,
      'observation': instance.observation,
      'decision': instance.decision,
      'confidence': instance.confidence,
      'stateUpdate': instance.stateUpdate,
      'nextAgent': instance.nextAgent,
      'retry': instance.retry,
    };

_VerificationResult _$VerificationResultFromJson(Map<String, dynamic> json) =>
    _VerificationResult(
      valid: json['valid'] as bool,
      failures:
          (json['failures'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
    );

Map<String, dynamic> _$VerificationResultToJson(_VerificationResult instance) =>
    <String, dynamic>{'valid': instance.valid, 'failures': instance.failures};

_AnalysisResult _$AnalysisResultFromJson(Map<String, dynamic> json) =>
    _AnalysisResult(
      roleSlug: json['roleSlug'] as String,
      roleTitle: json['roleTitle'] as String,
      seniority: json['seniority'] as String?,
      catalogVersion: json['catalogVersion'] as String,
      engineVersion: json['engineVersion'] as String,
      evidence: (json['evidence'] as List<dynamic>)
          .map((e) => Evidence.fromJson(e as Map<String, dynamic>))
          .toList(),
      score: ScoreBreakdown.fromJson(json['score'] as Map<String, dynamic>),
      recommendations: (json['recommendations'] as List<dynamic>)
          .map((e) => Recommendation.fromJson(e as Map<String, dynamic>))
          .toList(),
      trajectory: (json['trajectory'] as List<dynamic>)
          .map((e) => TrajectoryEntry.fromJson(e as Map<String, dynamic>))
          .toList(),
      verification: VerificationResult.fromJson(
        json['verification'] as Map<String, dynamic>,
      ),
    );

Map<String, dynamic> _$AnalysisResultToJson(_AnalysisResult instance) =>
    <String, dynamic>{
      'roleSlug': instance.roleSlug,
      'roleTitle': instance.roleTitle,
      'seniority': instance.seniority,
      'catalogVersion': instance.catalogVersion,
      'engineVersion': instance.engineVersion,
      'evidence': instance.evidence,
      'score': instance.score,
      'recommendations': instance.recommendations,
      'trajectory': instance.trajectory,
      'verification': instance.verification,
    };

_DomainFailure _$DomainFailureFromJson(Map<String, dynamic> json) =>
    _DomainFailure(
      code: json['code'] as String,
      message: json['message'] as String,
      recoverable: json['recoverable'] as bool? ?? true,
    );

Map<String, dynamic> _$DomainFailureToJson(_DomainFailure instance) =>
    <String, dynamic>{
      'code': instance.code,
      'message': instance.message,
      'recoverable': instance.recoverable,
    };

_AdminSessionState _$AdminSessionStateFromJson(Map<String, dynamic> json) =>
    _AdminSessionState(
      status:
          $enumDecodeNullable(_$AdminSessionStatusEnumMap, json['status']) ??
          AdminSessionStatus.unknown,
      forcePasswordChange: json['forcePasswordChange'] as bool? ?? false,
      message: json['message'] as String?,
    );

Map<String, dynamic> _$AdminSessionStateToJson(_AdminSessionState instance) =>
    <String, dynamic>{
      'status': _$AdminSessionStatusEnumMap[instance.status]!,
      'forcePasswordChange': instance.forcePasswordChange,
      'message': instance.message,
    };

const _$AdminSessionStatusEnumMap = {
  AdminSessionStatus.unknown: 'unknown',
  AdminSessionStatus.signedOut: 'signedOut',
  AdminSessionStatus.signingIn: 'signingIn',
  AdminSessionStatus.signedIn: 'signedIn',
  AdminSessionStatus.changingCredentials: 'changingCredentials',
  AdminSessionStatus.signingOut: 'signingOut',
  AdminSessionStatus.expired: 'expired',
  AdminSessionStatus.failure: 'failure',
};

// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pdf_parser_contract.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_PdfParseResult _$PdfParseResultFromJson(Map<String, dynamic> json) =>
    _PdfParseResult(
      document: CvDocument.fromJson(json['document'] as Map<String, dynamic>),
      pageCount: (json['pageCount'] as num).toInt(),
    );

Map<String, dynamic> _$PdfParseResultToJson(_PdfParseResult instance) =>
    <String, dynamic>{
      'document': instance.document,
      'pageCount': instance.pageCount,
    };

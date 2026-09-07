// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'pdf_parser_contract.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$PdfParseResult {

 CvDocument get document; int get pageCount;
/// Create a copy of PdfParseResult
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$PdfParseResultCopyWith<PdfParseResult> get copyWith => _$PdfParseResultCopyWithImpl<PdfParseResult>(this as PdfParseResult, _$identity);

  /// Serializes this PdfParseResult to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is PdfParseResult&&(identical(other.document, document) || other.document == document)&&(identical(other.pageCount, pageCount) || other.pageCount == pageCount));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,document,pageCount);

@override
String toString() {
  return 'PdfParseResult(document: $document, pageCount: $pageCount)';
}


}

/// @nodoc
abstract mixin class $PdfParseResultCopyWith<$Res>  {
  factory $PdfParseResultCopyWith(PdfParseResult value, $Res Function(PdfParseResult) _then) = _$PdfParseResultCopyWithImpl;
@useResult
$Res call({
 CvDocument document, int pageCount
});


$CvDocumentCopyWith<$Res> get document;

}
/// @nodoc
class _$PdfParseResultCopyWithImpl<$Res>
    implements $PdfParseResultCopyWith<$Res> {
  _$PdfParseResultCopyWithImpl(this._self, this._then);

  final PdfParseResult _self;
  final $Res Function(PdfParseResult) _then;

/// Create a copy of PdfParseResult
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? document = null,Object? pageCount = null,}) {
  return _then(_self.copyWith(
document: null == document ? _self.document : document // ignore: cast_nullable_to_non_nullable
as CvDocument,pageCount: null == pageCount ? _self.pageCount : pageCount // ignore: cast_nullable_to_non_nullable
as int,
  ));
}
/// Create a copy of PdfParseResult
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$CvDocumentCopyWith<$Res> get document {

  return $CvDocumentCopyWith<$Res>(_self.document, (value) {
    return _then(_self.copyWith(document: value));
  });
}
}


/// Adds pattern-matching-related methods to [PdfParseResult].
extension PdfParseResultPatterns on PdfParseResult {
/// A variant of `map` that fallback to returning `orElse`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _PdfParseResult value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _PdfParseResult() when $default != null:
return $default(_that);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// Callbacks receives the raw object, upcasted.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case final Subclass2 value:
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _PdfParseResult value)  $default,){
final _that = this;
switch (_that) {
case _PdfParseResult():
return $default(_that);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `map` that fallback to returning `null`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _PdfParseResult value)?  $default,){
final _that = this;
switch (_that) {
case _PdfParseResult() when $default != null:
return $default(_that);case _:
  return null;

}
}
/// A variant of `when` that fallback to an `orElse` callback.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( CvDocument document,  int pageCount)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _PdfParseResult() when $default != null:
return $default(_that.document,_that.pageCount);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// As opposed to `map`, this offers destructuring.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case Subclass2(:final field2):
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( CvDocument document,  int pageCount)  $default,) {final _that = this;
switch (_that) {
case _PdfParseResult():
return $default(_that.document,_that.pageCount);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `when` that fallback to returning `null`
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( CvDocument document,  int pageCount)?  $default,) {final _that = this;
switch (_that) {
case _PdfParseResult() when $default != null:
return $default(_that.document,_that.pageCount);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _PdfParseResult implements PdfParseResult {
  const _PdfParseResult({required this.document, required this.pageCount});
  factory _PdfParseResult.fromJson(Map<String, dynamic> json) => _$PdfParseResultFromJson(json);

@override final  CvDocument document;
@override final  int pageCount;

/// Create a copy of PdfParseResult
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$PdfParseResultCopyWith<_PdfParseResult> get copyWith => __$PdfParseResultCopyWithImpl<_PdfParseResult>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$PdfParseResultToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _PdfParseResult&&(identical(other.document, document) || other.document == document)&&(identical(other.pageCount, pageCount) || other.pageCount == pageCount));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,document,pageCount);

@override
String toString() {
  return 'PdfParseResult(document: $document, pageCount: $pageCount)';
}


}

/// @nodoc
abstract mixin class _$PdfParseResultCopyWith<$Res> implements $PdfParseResultCopyWith<$Res> {
  factory _$PdfParseResultCopyWith(_PdfParseResult value, $Res Function(_PdfParseResult) _then) = __$PdfParseResultCopyWithImpl;
@override @useResult
$Res call({
 CvDocument document, int pageCount
});


@override $CvDocumentCopyWith<$Res> get document;

}
/// @nodoc
class __$PdfParseResultCopyWithImpl<$Res>
    implements _$PdfParseResultCopyWith<$Res> {
  __$PdfParseResultCopyWithImpl(this._self, this._then);

  final _PdfParseResult _self;
  final $Res Function(_PdfParseResult) _then;

/// Create a copy of PdfParseResult
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? document = null,Object? pageCount = null,}) {
  return _then(_PdfParseResult(
document: null == document ? _self.document : document // ignore: cast_nullable_to_non_nullable
as CvDocument,pageCount: null == pageCount ? _self.pageCount : pageCount // ignore: cast_nullable_to_non_nullable
as int,
  ));
}

/// Create a copy of PdfParseResult
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$CvDocumentCopyWith<$Res> get document {

  return $CvDocumentCopyWith<$Res>(_self.document, (value) {
    return _then(_self.copyWith(document: value));
  });
}
}

// dart format on

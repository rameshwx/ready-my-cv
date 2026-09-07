// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'scan_state.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;
/// @nodoc
mixin _$ScanState {

 ScanStage get stage; JobRole? get role; String? get seniority; AnalysisResult? get result; String? get errorMessage; bool get busy;
/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$ScanStateCopyWith<ScanState> get copyWith => _$ScanStateCopyWithImpl<ScanState>(this as ScanState, _$identity);



@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is ScanState&&(identical(other.stage, stage) || other.stage == stage)&&(identical(other.role, role) || other.role == role)&&(identical(other.seniority, seniority) || other.seniority == seniority)&&(identical(other.result, result) || other.result == result)&&(identical(other.errorMessage, errorMessage) || other.errorMessage == errorMessage)&&(identical(other.busy, busy) || other.busy == busy));
}


@override
int get hashCode => Object.hash(runtimeType,stage,role,seniority,result,errorMessage,busy);

@override
String toString() {
  return 'ScanState(stage: $stage, role: $role, seniority: $seniority, result: $result, errorMessage: $errorMessage, busy: $busy)';
}


}

/// @nodoc
abstract mixin class $ScanStateCopyWith<$Res>  {
  factory $ScanStateCopyWith(ScanState value, $Res Function(ScanState) _then) = _$ScanStateCopyWithImpl;
@useResult
$Res call({
 ScanStage stage, JobRole? role, String? seniority, AnalysisResult? result, String? errorMessage, bool busy
});


$JobRoleCopyWith<$Res>? get role;$AnalysisResultCopyWith<$Res>? get result;

}
/// @nodoc
class _$ScanStateCopyWithImpl<$Res>
    implements $ScanStateCopyWith<$Res> {
  _$ScanStateCopyWithImpl(this._self, this._then);

  final ScanState _self;
  final $Res Function(ScanState) _then;

/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? stage = null,Object? role = freezed,Object? seniority = freezed,Object? result = freezed,Object? errorMessage = freezed,Object? busy = null,}) {
  return _then(_self.copyWith(
stage: null == stage ? _self.stage : stage // ignore: cast_nullable_to_non_nullable
as ScanStage,role: freezed == role ? _self.role : role // ignore: cast_nullable_to_non_nullable
as JobRole?,seniority: freezed == seniority ? _self.seniority : seniority // ignore: cast_nullable_to_non_nullable
as String?,result: freezed == result ? _self.result : result // ignore: cast_nullable_to_non_nullable
as AnalysisResult?,errorMessage: freezed == errorMessage ? _self.errorMessage : errorMessage // ignore: cast_nullable_to_non_nullable
as String?,busy: null == busy ? _self.busy : busy // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}
/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$JobRoleCopyWith<$Res>? get role {
    if (_self.role == null) {
    return null;
  }

  return $JobRoleCopyWith<$Res>(_self.role!, (value) {
    return _then(_self.copyWith(role: value));
  });
}/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$AnalysisResultCopyWith<$Res>? get result {
    if (_self.result == null) {
    return null;
  }

  return $AnalysisResultCopyWith<$Res>(_self.result!, (value) {
    return _then(_self.copyWith(result: value));
  });
}
}


/// Adds pattern-matching-related methods to [ScanState].
extension ScanStatePatterns on ScanState {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _ScanState value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _ScanState() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _ScanState value)  $default,){
final _that = this;
switch (_that) {
case _ScanState():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _ScanState value)?  $default,){
final _that = this;
switch (_that) {
case _ScanState() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( ScanStage stage,  JobRole? role,  String? seniority,  AnalysisResult? result,  String? errorMessage,  bool busy)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _ScanState() when $default != null:
return $default(_that.stage,_that.role,_that.seniority,_that.result,_that.errorMessage,_that.busy);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( ScanStage stage,  JobRole? role,  String? seniority,  AnalysisResult? result,  String? errorMessage,  bool busy)  $default,) {final _that = this;
switch (_that) {
case _ScanState():
return $default(_that.stage,_that.role,_that.seniority,_that.result,_that.errorMessage,_that.busy);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( ScanStage stage,  JobRole? role,  String? seniority,  AnalysisResult? result,  String? errorMessage,  bool busy)?  $default,) {final _that = this;
switch (_that) {
case _ScanState() when $default != null:
return $default(_that.stage,_that.role,_that.seniority,_that.result,_that.errorMessage,_that.busy);case _:
  return null;

}
}

}

/// @nodoc


class _ScanState implements ScanState {
  const _ScanState({this.stage = ScanStage.idle, this.role, this.seniority, this.result, this.errorMessage, this.busy = false});


@override@JsonKey() final  ScanStage stage;
@override final  JobRole? role;
@override final  String? seniority;
@override final  AnalysisResult? result;
@override final  String? errorMessage;
@override@JsonKey() final  bool busy;

/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$ScanStateCopyWith<_ScanState> get copyWith => __$ScanStateCopyWithImpl<_ScanState>(this, _$identity);



@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _ScanState&&(identical(other.stage, stage) || other.stage == stage)&&(identical(other.role, role) || other.role == role)&&(identical(other.seniority, seniority) || other.seniority == seniority)&&(identical(other.result, result) || other.result == result)&&(identical(other.errorMessage, errorMessage) || other.errorMessage == errorMessage)&&(identical(other.busy, busy) || other.busy == busy));
}


@override
int get hashCode => Object.hash(runtimeType,stage,role,seniority,result,errorMessage,busy);

@override
String toString() {
  return 'ScanState(stage: $stage, role: $role, seniority: $seniority, result: $result, errorMessage: $errorMessage, busy: $busy)';
}


}

/// @nodoc
abstract mixin class _$ScanStateCopyWith<$Res> implements $ScanStateCopyWith<$Res> {
  factory _$ScanStateCopyWith(_ScanState value, $Res Function(_ScanState) _then) = __$ScanStateCopyWithImpl;
@override @useResult
$Res call({
 ScanStage stage, JobRole? role, String? seniority, AnalysisResult? result, String? errorMessage, bool busy
});


@override $JobRoleCopyWith<$Res>? get role;@override $AnalysisResultCopyWith<$Res>? get result;

}
/// @nodoc
class __$ScanStateCopyWithImpl<$Res>
    implements _$ScanStateCopyWith<$Res> {
  __$ScanStateCopyWithImpl(this._self, this._then);

  final _ScanState _self;
  final $Res Function(_ScanState) _then;

/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? stage = null,Object? role = freezed,Object? seniority = freezed,Object? result = freezed,Object? errorMessage = freezed,Object? busy = null,}) {
  return _then(_ScanState(
stage: null == stage ? _self.stage : stage // ignore: cast_nullable_to_non_nullable
as ScanStage,role: freezed == role ? _self.role : role // ignore: cast_nullable_to_non_nullable
as JobRole?,seniority: freezed == seniority ? _self.seniority : seniority // ignore: cast_nullable_to_non_nullable
as String?,result: freezed == result ? _self.result : result // ignore: cast_nullable_to_non_nullable
as AnalysisResult?,errorMessage: freezed == errorMessage ? _self.errorMessage : errorMessage // ignore: cast_nullable_to_non_nullable
as String?,busy: null == busy ? _self.busy : busy // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}

/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$JobRoleCopyWith<$Res>? get role {
    if (_self.role == null) {
    return null;
  }

  return $JobRoleCopyWith<$Res>(_self.role!, (value) {
    return _then(_self.copyWith(role: value));
  });
}/// Create a copy of ScanState
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$AnalysisResultCopyWith<$Res>? get result {
    if (_self.result == null) {
    return null;
  }

  return $AnalysisResultCopyWith<$Res>(_self.result!, (value) {
    return _then(_self.copyWith(result: value));
  });
}
}

// dart format on

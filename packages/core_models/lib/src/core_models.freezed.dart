// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'core_models.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$CvTextSpan {

 String get text; int get start; int get end; int get page; String? get section;
/// Create a copy of CvTextSpan
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$CvTextSpanCopyWith<CvTextSpan> get copyWith => _$CvTextSpanCopyWithImpl<CvTextSpan>(this as CvTextSpan, _$identity);

  /// Serializes this CvTextSpan to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is CvTextSpan&&(identical(other.text, text) || other.text == text)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end)&&(identical(other.page, page) || other.page == page)&&(identical(other.section, section) || other.section == section));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,text,start,end,page,section);

@override
String toString() {
  return 'CvTextSpan(text: $text, start: $start, end: $end, page: $page, section: $section)';
}


}

/// @nodoc
abstract mixin class $CvTextSpanCopyWith<$Res>  {
  factory $CvTextSpanCopyWith(CvTextSpan value, $Res Function(CvTextSpan) _then) = _$CvTextSpanCopyWithImpl;
@useResult
$Res call({
 String text, int start, int end, int page, String? section
});




}
/// @nodoc
class _$CvTextSpanCopyWithImpl<$Res>
    implements $CvTextSpanCopyWith<$Res> {
  _$CvTextSpanCopyWithImpl(this._self, this._then);

  final CvTextSpan _self;
  final $Res Function(CvTextSpan) _then;

/// Create a copy of CvTextSpan
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? text = null,Object? start = null,Object? end = null,Object? page = null,Object? section = freezed,}) {
  return _then(_self.copyWith(
text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,start: null == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int,end: null == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int,page: null == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int,section: freezed == section ? _self.section : section // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}

}


/// Adds pattern-matching-related methods to [CvTextSpan].
extension CvTextSpanPatterns on CvTextSpan {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _CvTextSpan value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _CvTextSpan() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _CvTextSpan value)  $default,){
final _that = this;
switch (_that) {
case _CvTextSpan():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _CvTextSpan value)?  $default,){
final _that = this;
switch (_that) {
case _CvTextSpan() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String text,  int start,  int end,  int page,  String? section)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _CvTextSpan() when $default != null:
return $default(_that.text,_that.start,_that.end,_that.page,_that.section);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String text,  int start,  int end,  int page,  String? section)  $default,) {final _that = this;
switch (_that) {
case _CvTextSpan():
return $default(_that.text,_that.start,_that.end,_that.page,_that.section);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String text,  int start,  int end,  int page,  String? section)?  $default,) {final _that = this;
switch (_that) {
case _CvTextSpan() when $default != null:
return $default(_that.text,_that.start,_that.end,_that.page,_that.section);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _CvTextSpan implements CvTextSpan {
  const _CvTextSpan({required this.text, required this.start, required this.end, required this.page, this.section});
  factory _CvTextSpan.fromJson(Map<String, dynamic> json) => _$CvTextSpanFromJson(json);

@override final  String text;
@override final  int start;
@override final  int end;
@override final  int page;
@override final  String? section;

/// Create a copy of CvTextSpan
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$CvTextSpanCopyWith<_CvTextSpan> get copyWith => __$CvTextSpanCopyWithImpl<_CvTextSpan>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$CvTextSpanToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _CvTextSpan&&(identical(other.text, text) || other.text == text)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end)&&(identical(other.page, page) || other.page == page)&&(identical(other.section, section) || other.section == section));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,text,start,end,page,section);

@override
String toString() {
  return 'CvTextSpan(text: $text, start: $start, end: $end, page: $page, section: $section)';
}


}

/// @nodoc
abstract mixin class _$CvTextSpanCopyWith<$Res> implements $CvTextSpanCopyWith<$Res> {
  factory _$CvTextSpanCopyWith(_CvTextSpan value, $Res Function(_CvTextSpan) _then) = __$CvTextSpanCopyWithImpl;
@override @useResult
$Res call({
 String text, int start, int end, int page, String? section
});




}
/// @nodoc
class __$CvTextSpanCopyWithImpl<$Res>
    implements _$CvTextSpanCopyWith<$Res> {
  __$CvTextSpanCopyWithImpl(this._self, this._then);

  final _CvTextSpan _self;
  final $Res Function(_CvTextSpan) _then;

/// Create a copy of CvTextSpan
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? text = null,Object? start = null,Object? end = null,Object? page = null,Object? section = freezed,}) {
  return _then(_CvTextSpan(
text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,start: null == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int,end: null == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int,page: null == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int,section: freezed == section ? _self.section : section // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}


}


/// @nodoc
mixin _$CvPage {

 int get number; String get text; List<CvTextSpan> get spans;
/// Create a copy of CvPage
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$CvPageCopyWith<CvPage> get copyWith => _$CvPageCopyWithImpl<CvPage>(this as CvPage, _$identity);

  /// Serializes this CvPage to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is CvPage&&(identical(other.number, number) || other.number == number)&&(identical(other.text, text) || other.text == text)&&const DeepCollectionEquality().equals(other.spans, spans));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,number,text,const DeepCollectionEquality().hash(spans));

@override
String toString() {
  return 'CvPage(number: $number, text: $text, spans: $spans)';
}


}

/// @nodoc
abstract mixin class $CvPageCopyWith<$Res>  {
  factory $CvPageCopyWith(CvPage value, $Res Function(CvPage) _then) = _$CvPageCopyWithImpl;
@useResult
$Res call({
 int number, String text, List<CvTextSpan> spans
});




}
/// @nodoc
class _$CvPageCopyWithImpl<$Res>
    implements $CvPageCopyWith<$Res> {
  _$CvPageCopyWithImpl(this._self, this._then);

  final CvPage _self;
  final $Res Function(CvPage) _then;

/// Create a copy of CvPage
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? number = null,Object? text = null,Object? spans = null,}) {
  return _then(_self.copyWith(
number: null == number ? _self.number : number // ignore: cast_nullable_to_non_nullable
as int,text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,spans: null == spans ? _self.spans : spans // ignore: cast_nullable_to_non_nullable
as List<CvTextSpan>,
  ));
}

}


/// Adds pattern-matching-related methods to [CvPage].
extension CvPagePatterns on CvPage {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _CvPage value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _CvPage() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _CvPage value)  $default,){
final _that = this;
switch (_that) {
case _CvPage():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _CvPage value)?  $default,){
final _that = this;
switch (_that) {
case _CvPage() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( int number,  String text,  List<CvTextSpan> spans)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _CvPage() when $default != null:
return $default(_that.number,_that.text,_that.spans);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( int number,  String text,  List<CvTextSpan> spans)  $default,) {final _that = this;
switch (_that) {
case _CvPage():
return $default(_that.number,_that.text,_that.spans);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( int number,  String text,  List<CvTextSpan> spans)?  $default,) {final _that = this;
switch (_that) {
case _CvPage() when $default != null:
return $default(_that.number,_that.text,_that.spans);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _CvPage implements CvPage {
  const _CvPage({required this.number, required this.text, final  List<CvTextSpan> spans = const []}): _spans = spans;
  factory _CvPage.fromJson(Map<String, dynamic> json) => _$CvPageFromJson(json);

@override final  int number;
@override final  String text;
 final  List<CvTextSpan> _spans;
@override@JsonKey() List<CvTextSpan> get spans {
  if (_spans is EqualUnmodifiableListView) return _spans;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_spans);
}


/// Create a copy of CvPage
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$CvPageCopyWith<_CvPage> get copyWith => __$CvPageCopyWithImpl<_CvPage>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$CvPageToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _CvPage&&(identical(other.number, number) || other.number == number)&&(identical(other.text, text) || other.text == text)&&const DeepCollectionEquality().equals(other._spans, _spans));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,number,text,const DeepCollectionEquality().hash(_spans));

@override
String toString() {
  return 'CvPage(number: $number, text: $text, spans: $spans)';
}


}

/// @nodoc
abstract mixin class _$CvPageCopyWith<$Res> implements $CvPageCopyWith<$Res> {
  factory _$CvPageCopyWith(_CvPage value, $Res Function(_CvPage) _then) = __$CvPageCopyWithImpl;
@override @useResult
$Res call({
 int number, String text, List<CvTextSpan> spans
});




}
/// @nodoc
class __$CvPageCopyWithImpl<$Res>
    implements _$CvPageCopyWith<$Res> {
  __$CvPageCopyWithImpl(this._self, this._then);

  final _CvPage _self;
  final $Res Function(_CvPage) _then;

/// Create a copy of CvPage
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? number = null,Object? text = null,Object? spans = null,}) {
  return _then(_CvPage(
number: null == number ? _self.number : number // ignore: cast_nullable_to_non_nullable
as int,text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,spans: null == spans ? _self._spans : spans // ignore: cast_nullable_to_non_nullable
as List<CvTextSpan>,
  ));
}


}


/// @nodoc
mixin _$CvSection {

 String get name; int get page; int get start; int get end;
/// Create a copy of CvSection
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$CvSectionCopyWith<CvSection> get copyWith => _$CvSectionCopyWithImpl<CvSection>(this as CvSection, _$identity);

  /// Serializes this CvSection to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is CvSection&&(identical(other.name, name) || other.name == name)&&(identical(other.page, page) || other.page == page)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,name,page,start,end);

@override
String toString() {
  return 'CvSection(name: $name, page: $page, start: $start, end: $end)';
}


}

/// @nodoc
abstract mixin class $CvSectionCopyWith<$Res>  {
  factory $CvSectionCopyWith(CvSection value, $Res Function(CvSection) _then) = _$CvSectionCopyWithImpl;
@useResult
$Res call({
 String name, int page, int start, int end
});




}
/// @nodoc
class _$CvSectionCopyWithImpl<$Res>
    implements $CvSectionCopyWith<$Res> {
  _$CvSectionCopyWithImpl(this._self, this._then);

  final CvSection _self;
  final $Res Function(CvSection) _then;

/// Create a copy of CvSection
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? name = null,Object? page = null,Object? start = null,Object? end = null,}) {
  return _then(_self.copyWith(
name: null == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String,page: null == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int,start: null == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int,end: null == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int,
  ));
}

}


/// Adds pattern-matching-related methods to [CvSection].
extension CvSectionPatterns on CvSection {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _CvSection value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _CvSection() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _CvSection value)  $default,){
final _that = this;
switch (_that) {
case _CvSection():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _CvSection value)?  $default,){
final _that = this;
switch (_that) {
case _CvSection() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String name,  int page,  int start,  int end)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _CvSection() when $default != null:
return $default(_that.name,_that.page,_that.start,_that.end);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String name,  int page,  int start,  int end)  $default,) {final _that = this;
switch (_that) {
case _CvSection():
return $default(_that.name,_that.page,_that.start,_that.end);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String name,  int page,  int start,  int end)?  $default,) {final _that = this;
switch (_that) {
case _CvSection() when $default != null:
return $default(_that.name,_that.page,_that.start,_that.end);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _CvSection implements CvSection {
  const _CvSection({required this.name, required this.page, required this.start, required this.end});
  factory _CvSection.fromJson(Map<String, dynamic> json) => _$CvSectionFromJson(json);

@override final  String name;
@override final  int page;
@override final  int start;
@override final  int end;

/// Create a copy of CvSection
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$CvSectionCopyWith<_CvSection> get copyWith => __$CvSectionCopyWithImpl<_CvSection>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$CvSectionToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _CvSection&&(identical(other.name, name) || other.name == name)&&(identical(other.page, page) || other.page == page)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,name,page,start,end);

@override
String toString() {
  return 'CvSection(name: $name, page: $page, start: $start, end: $end)';
}


}

/// @nodoc
abstract mixin class _$CvSectionCopyWith<$Res> implements $CvSectionCopyWith<$Res> {
  factory _$CvSectionCopyWith(_CvSection value, $Res Function(_CvSection) _then) = __$CvSectionCopyWithImpl;
@override @useResult
$Res call({
 String name, int page, int start, int end
});




}
/// @nodoc
class __$CvSectionCopyWithImpl<$Res>
    implements _$CvSectionCopyWith<$Res> {
  __$CvSectionCopyWithImpl(this._self, this._then);

  final _CvSection _self;
  final $Res Function(_CvSection) _then;

/// Create a copy of CvSection
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? name = null,Object? page = null,Object? start = null,Object? end = null,}) {
  return _then(_CvSection(
name: null == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String,page: null == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int,start: null == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int,end: null == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int,
  ));
}


}


/// @nodoc
mixin _$CvDocument {

 List<CvPage> get pages; List<CvSection> get sections; String get normalizedText; List<String> get warnings;
/// Create a copy of CvDocument
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$CvDocumentCopyWith<CvDocument> get copyWith => _$CvDocumentCopyWithImpl<CvDocument>(this as CvDocument, _$identity);

  /// Serializes this CvDocument to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is CvDocument&&const DeepCollectionEquality().equals(other.pages, pages)&&const DeepCollectionEquality().equals(other.sections, sections)&&(identical(other.normalizedText, normalizedText) || other.normalizedText == normalizedText)&&const DeepCollectionEquality().equals(other.warnings, warnings));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,const DeepCollectionEquality().hash(pages),const DeepCollectionEquality().hash(sections),normalizedText,const DeepCollectionEquality().hash(warnings));

@override
String toString() {
  return 'CvDocument(pages: $pages, sections: $sections, normalizedText: $normalizedText, warnings: $warnings)';
}


}

/// @nodoc
abstract mixin class $CvDocumentCopyWith<$Res>  {
  factory $CvDocumentCopyWith(CvDocument value, $Res Function(CvDocument) _then) = _$CvDocumentCopyWithImpl;
@useResult
$Res call({
 List<CvPage> pages, List<CvSection> sections, String normalizedText, List<String> warnings
});




}
/// @nodoc
class _$CvDocumentCopyWithImpl<$Res>
    implements $CvDocumentCopyWith<$Res> {
  _$CvDocumentCopyWithImpl(this._self, this._then);

  final CvDocument _self;
  final $Res Function(CvDocument) _then;

/// Create a copy of CvDocument
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? pages = null,Object? sections = null,Object? normalizedText = null,Object? warnings = null,}) {
  return _then(_self.copyWith(
pages: null == pages ? _self.pages : pages // ignore: cast_nullable_to_non_nullable
as List<CvPage>,sections: null == sections ? _self.sections : sections // ignore: cast_nullable_to_non_nullable
as List<CvSection>,normalizedText: null == normalizedText ? _self.normalizedText : normalizedText // ignore: cast_nullable_to_non_nullable
as String,warnings: null == warnings ? _self.warnings : warnings // ignore: cast_nullable_to_non_nullable
as List<String>,
  ));
}

}


/// Adds pattern-matching-related methods to [CvDocument].
extension CvDocumentPatterns on CvDocument {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _CvDocument value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _CvDocument() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _CvDocument value)  $default,){
final _that = this;
switch (_that) {
case _CvDocument():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _CvDocument value)?  $default,){
final _that = this;
switch (_that) {
case _CvDocument() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( List<CvPage> pages,  List<CvSection> sections,  String normalizedText,  List<String> warnings)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _CvDocument() when $default != null:
return $default(_that.pages,_that.sections,_that.normalizedText,_that.warnings);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( List<CvPage> pages,  List<CvSection> sections,  String normalizedText,  List<String> warnings)  $default,) {final _that = this;
switch (_that) {
case _CvDocument():
return $default(_that.pages,_that.sections,_that.normalizedText,_that.warnings);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( List<CvPage> pages,  List<CvSection> sections,  String normalizedText,  List<String> warnings)?  $default,) {final _that = this;
switch (_that) {
case _CvDocument() when $default != null:
return $default(_that.pages,_that.sections,_that.normalizedText,_that.warnings);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _CvDocument implements CvDocument {
  const _CvDocument({required final  List<CvPage> pages, required final  List<CvSection> sections, required this.normalizedText, final  List<String> warnings = const []}): _pages = pages,_sections = sections,_warnings = warnings;
  factory _CvDocument.fromJson(Map<String, dynamic> json) => _$CvDocumentFromJson(json);

 final  List<CvPage> _pages;
@override List<CvPage> get pages {
  if (_pages is EqualUnmodifiableListView) return _pages;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_pages);
}

 final  List<CvSection> _sections;
@override List<CvSection> get sections {
  if (_sections is EqualUnmodifiableListView) return _sections;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_sections);
}

@override final  String normalizedText;
 final  List<String> _warnings;
@override@JsonKey() List<String> get warnings {
  if (_warnings is EqualUnmodifiableListView) return _warnings;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_warnings);
}


/// Create a copy of CvDocument
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$CvDocumentCopyWith<_CvDocument> get copyWith => __$CvDocumentCopyWithImpl<_CvDocument>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$CvDocumentToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _CvDocument&&const DeepCollectionEquality().equals(other._pages, _pages)&&const DeepCollectionEquality().equals(other._sections, _sections)&&(identical(other.normalizedText, normalizedText) || other.normalizedText == normalizedText)&&const DeepCollectionEquality().equals(other._warnings, _warnings));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,const DeepCollectionEquality().hash(_pages),const DeepCollectionEquality().hash(_sections),normalizedText,const DeepCollectionEquality().hash(_warnings));

@override
String toString() {
  return 'CvDocument(pages: $pages, sections: $sections, normalizedText: $normalizedText, warnings: $warnings)';
}


}

/// @nodoc
abstract mixin class _$CvDocumentCopyWith<$Res> implements $CvDocumentCopyWith<$Res> {
  factory _$CvDocumentCopyWith(_CvDocument value, $Res Function(_CvDocument) _then) = __$CvDocumentCopyWithImpl;
@override @useResult
$Res call({
 List<CvPage> pages, List<CvSection> sections, String normalizedText, List<String> warnings
});




}
/// @nodoc
class __$CvDocumentCopyWithImpl<$Res>
    implements _$CvDocumentCopyWith<$Res> {
  __$CvDocumentCopyWithImpl(this._self, this._then);

  final _CvDocument _self;
  final $Res Function(_CvDocument) _then;

/// Create a copy of CvDocument
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? pages = null,Object? sections = null,Object? normalizedText = null,Object? warnings = null,}) {
  return _then(_CvDocument(
pages: null == pages ? _self._pages : pages // ignore: cast_nullable_to_non_nullable
as List<CvPage>,sections: null == sections ? _self._sections : sections // ignore: cast_nullable_to_non_nullable
as List<CvSection>,normalizedText: null == normalizedText ? _self.normalizedText : normalizedText // ignore: cast_nullable_to_non_nullable
as String,warnings: null == warnings ? _self._warnings : warnings // ignore: cast_nullable_to_non_nullable
as List<String>,
  ));
}


}


/// @nodoc
mixin _$NormalizedTerm {

 String get requirementId; String get canonicalTerm; String get matchedTerm; bool get aliasUsed; int get start; int get end; int get page;
/// Create a copy of NormalizedTerm
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$NormalizedTermCopyWith<NormalizedTerm> get copyWith => _$NormalizedTermCopyWithImpl<NormalizedTerm>(this as NormalizedTerm, _$identity);

  /// Serializes this NormalizedTerm to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is NormalizedTerm&&(identical(other.requirementId, requirementId) || other.requirementId == requirementId)&&(identical(other.canonicalTerm, canonicalTerm) || other.canonicalTerm == canonicalTerm)&&(identical(other.matchedTerm, matchedTerm) || other.matchedTerm == matchedTerm)&&(identical(other.aliasUsed, aliasUsed) || other.aliasUsed == aliasUsed)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end)&&(identical(other.page, page) || other.page == page));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,requirementId,canonicalTerm,matchedTerm,aliasUsed,start,end,page);

@override
String toString() {
  return 'NormalizedTerm(requirementId: $requirementId, canonicalTerm: $canonicalTerm, matchedTerm: $matchedTerm, aliasUsed: $aliasUsed, start: $start, end: $end, page: $page)';
}


}

/// @nodoc
abstract mixin class $NormalizedTermCopyWith<$Res>  {
  factory $NormalizedTermCopyWith(NormalizedTerm value, $Res Function(NormalizedTerm) _then) = _$NormalizedTermCopyWithImpl;
@useResult
$Res call({
 String requirementId, String canonicalTerm, String matchedTerm, bool aliasUsed, int start, int end, int page
});




}
/// @nodoc
class _$NormalizedTermCopyWithImpl<$Res>
    implements $NormalizedTermCopyWith<$Res> {
  _$NormalizedTermCopyWithImpl(this._self, this._then);

  final NormalizedTerm _self;
  final $Res Function(NormalizedTerm) _then;

/// Create a copy of NormalizedTerm
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? requirementId = null,Object? canonicalTerm = null,Object? matchedTerm = null,Object? aliasUsed = null,Object? start = null,Object? end = null,Object? page = null,}) {
  return _then(_self.copyWith(
requirementId: null == requirementId ? _self.requirementId : requirementId // ignore: cast_nullable_to_non_nullable
as String,canonicalTerm: null == canonicalTerm ? _self.canonicalTerm : canonicalTerm // ignore: cast_nullable_to_non_nullable
as String,matchedTerm: null == matchedTerm ? _self.matchedTerm : matchedTerm // ignore: cast_nullable_to_non_nullable
as String,aliasUsed: null == aliasUsed ? _self.aliasUsed : aliasUsed // ignore: cast_nullable_to_non_nullable
as bool,start: null == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int,end: null == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int,page: null == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int,
  ));
}

}


/// Adds pattern-matching-related methods to [NormalizedTerm].
extension NormalizedTermPatterns on NormalizedTerm {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _NormalizedTerm value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _NormalizedTerm() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _NormalizedTerm value)  $default,){
final _that = this;
switch (_that) {
case _NormalizedTerm():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _NormalizedTerm value)?  $default,){
final _that = this;
switch (_that) {
case _NormalizedTerm() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String requirementId,  String canonicalTerm,  String matchedTerm,  bool aliasUsed,  int start,  int end,  int page)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _NormalizedTerm() when $default != null:
return $default(_that.requirementId,_that.canonicalTerm,_that.matchedTerm,_that.aliasUsed,_that.start,_that.end,_that.page);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String requirementId,  String canonicalTerm,  String matchedTerm,  bool aliasUsed,  int start,  int end,  int page)  $default,) {final _that = this;
switch (_that) {
case _NormalizedTerm():
return $default(_that.requirementId,_that.canonicalTerm,_that.matchedTerm,_that.aliasUsed,_that.start,_that.end,_that.page);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String requirementId,  String canonicalTerm,  String matchedTerm,  bool aliasUsed,  int start,  int end,  int page)?  $default,) {final _that = this;
switch (_that) {
case _NormalizedTerm() when $default != null:
return $default(_that.requirementId,_that.canonicalTerm,_that.matchedTerm,_that.aliasUsed,_that.start,_that.end,_that.page);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _NormalizedTerm implements NormalizedTerm {
  const _NormalizedTerm({required this.requirementId, required this.canonicalTerm, required this.matchedTerm, required this.aliasUsed, required this.start, required this.end, required this.page});
  factory _NormalizedTerm.fromJson(Map<String, dynamic> json) => _$NormalizedTermFromJson(json);

@override final  String requirementId;
@override final  String canonicalTerm;
@override final  String matchedTerm;
@override final  bool aliasUsed;
@override final  int start;
@override final  int end;
@override final  int page;

/// Create a copy of NormalizedTerm
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$NormalizedTermCopyWith<_NormalizedTerm> get copyWith => __$NormalizedTermCopyWithImpl<_NormalizedTerm>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$NormalizedTermToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _NormalizedTerm&&(identical(other.requirementId, requirementId) || other.requirementId == requirementId)&&(identical(other.canonicalTerm, canonicalTerm) || other.canonicalTerm == canonicalTerm)&&(identical(other.matchedTerm, matchedTerm) || other.matchedTerm == matchedTerm)&&(identical(other.aliasUsed, aliasUsed) || other.aliasUsed == aliasUsed)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end)&&(identical(other.page, page) || other.page == page));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,requirementId,canonicalTerm,matchedTerm,aliasUsed,start,end,page);

@override
String toString() {
  return 'NormalizedTerm(requirementId: $requirementId, canonicalTerm: $canonicalTerm, matchedTerm: $matchedTerm, aliasUsed: $aliasUsed, start: $start, end: $end, page: $page)';
}


}

/// @nodoc
abstract mixin class _$NormalizedTermCopyWith<$Res> implements $NormalizedTermCopyWith<$Res> {
  factory _$NormalizedTermCopyWith(_NormalizedTerm value, $Res Function(_NormalizedTerm) _then) = __$NormalizedTermCopyWithImpl;
@override @useResult
$Res call({
 String requirementId, String canonicalTerm, String matchedTerm, bool aliasUsed, int start, int end, int page
});




}
/// @nodoc
class __$NormalizedTermCopyWithImpl<$Res>
    implements _$NormalizedTermCopyWith<$Res> {
  __$NormalizedTermCopyWithImpl(this._self, this._then);

  final _NormalizedTerm _self;
  final $Res Function(_NormalizedTerm) _then;

/// Create a copy of NormalizedTerm
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? requirementId = null,Object? canonicalTerm = null,Object? matchedTerm = null,Object? aliasUsed = null,Object? start = null,Object? end = null,Object? page = null,}) {
  return _then(_NormalizedTerm(
requirementId: null == requirementId ? _self.requirementId : requirementId // ignore: cast_nullable_to_non_nullable
as String,canonicalTerm: null == canonicalTerm ? _self.canonicalTerm : canonicalTerm // ignore: cast_nullable_to_non_nullable
as String,matchedTerm: null == matchedTerm ? _self.matchedTerm : matchedTerm // ignore: cast_nullable_to_non_nullable
as String,aliasUsed: null == aliasUsed ? _self.aliasUsed : aliasUsed // ignore: cast_nullable_to_non_nullable
as bool,start: null == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int,end: null == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int,page: null == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int,
  ));
}


}


/// @nodoc
mixin _$Evidence {

 String get id; String get requirementId; String get canonicalTerm; String? get matchedTerm; EvidenceClassification get classification; String get explanation; String? get section; int? get page; int? get start; int? get end; String get matchingTool;
/// Create a copy of Evidence
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$EvidenceCopyWith<Evidence> get copyWith => _$EvidenceCopyWithImpl<Evidence>(this as Evidence, _$identity);

  /// Serializes this Evidence to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is Evidence&&(identical(other.id, id) || other.id == id)&&(identical(other.requirementId, requirementId) || other.requirementId == requirementId)&&(identical(other.canonicalTerm, canonicalTerm) || other.canonicalTerm == canonicalTerm)&&(identical(other.matchedTerm, matchedTerm) || other.matchedTerm == matchedTerm)&&(identical(other.classification, classification) || other.classification == classification)&&(identical(other.explanation, explanation) || other.explanation == explanation)&&(identical(other.section, section) || other.section == section)&&(identical(other.page, page) || other.page == page)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end)&&(identical(other.matchingTool, matchingTool) || other.matchingTool == matchingTool));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,requirementId,canonicalTerm,matchedTerm,classification,explanation,section,page,start,end,matchingTool);

@override
String toString() {
  return 'Evidence(id: $id, requirementId: $requirementId, canonicalTerm: $canonicalTerm, matchedTerm: $matchedTerm, classification: $classification, explanation: $explanation, section: $section, page: $page, start: $start, end: $end, matchingTool: $matchingTool)';
}


}

/// @nodoc
abstract mixin class $EvidenceCopyWith<$Res>  {
  factory $EvidenceCopyWith(Evidence value, $Res Function(Evidence) _then) = _$EvidenceCopyWithImpl;
@useResult
$Res call({
 String id, String requirementId, String canonicalTerm, String? matchedTerm, EvidenceClassification classification, String explanation, String? section, int? page, int? start, int? end, String matchingTool
});




}
/// @nodoc
class _$EvidenceCopyWithImpl<$Res>
    implements $EvidenceCopyWith<$Res> {
  _$EvidenceCopyWithImpl(this._self, this._then);

  final Evidence _self;
  final $Res Function(Evidence) _then;

/// Create a copy of Evidence
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? requirementId = null,Object? canonicalTerm = null,Object? matchedTerm = freezed,Object? classification = null,Object? explanation = null,Object? section = freezed,Object? page = freezed,Object? start = freezed,Object? end = freezed,Object? matchingTool = null,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,requirementId: null == requirementId ? _self.requirementId : requirementId // ignore: cast_nullable_to_non_nullable
as String,canonicalTerm: null == canonicalTerm ? _self.canonicalTerm : canonicalTerm // ignore: cast_nullable_to_non_nullable
as String,matchedTerm: freezed == matchedTerm ? _self.matchedTerm : matchedTerm // ignore: cast_nullable_to_non_nullable
as String?,classification: null == classification ? _self.classification : classification // ignore: cast_nullable_to_non_nullable
as EvidenceClassification,explanation: null == explanation ? _self.explanation : explanation // ignore: cast_nullable_to_non_nullable
as String,section: freezed == section ? _self.section : section // ignore: cast_nullable_to_non_nullable
as String?,page: freezed == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int?,start: freezed == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int?,end: freezed == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int?,matchingTool: null == matchingTool ? _self.matchingTool : matchingTool // ignore: cast_nullable_to_non_nullable
as String,
  ));
}

}


/// Adds pattern-matching-related methods to [Evidence].
extension EvidencePatterns on Evidence {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _Evidence value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _Evidence() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _Evidence value)  $default,){
final _that = this;
switch (_that) {
case _Evidence():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _Evidence value)?  $default,){
final _that = this;
switch (_that) {
case _Evidence() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String id,  String requirementId,  String canonicalTerm,  String? matchedTerm,  EvidenceClassification classification,  String explanation,  String? section,  int? page,  int? start,  int? end,  String matchingTool)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _Evidence() when $default != null:
return $default(_that.id,_that.requirementId,_that.canonicalTerm,_that.matchedTerm,_that.classification,_that.explanation,_that.section,_that.page,_that.start,_that.end,_that.matchingTool);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String id,  String requirementId,  String canonicalTerm,  String? matchedTerm,  EvidenceClassification classification,  String explanation,  String? section,  int? page,  int? start,  int? end,  String matchingTool)  $default,) {final _that = this;
switch (_that) {
case _Evidence():
return $default(_that.id,_that.requirementId,_that.canonicalTerm,_that.matchedTerm,_that.classification,_that.explanation,_that.section,_that.page,_that.start,_that.end,_that.matchingTool);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String id,  String requirementId,  String canonicalTerm,  String? matchedTerm,  EvidenceClassification classification,  String explanation,  String? section,  int? page,  int? start,  int? end,  String matchingTool)?  $default,) {final _that = this;
switch (_that) {
case _Evidence() when $default != null:
return $default(_that.id,_that.requirementId,_that.canonicalTerm,_that.matchedTerm,_that.classification,_that.explanation,_that.section,_that.page,_that.start,_that.end,_that.matchingTool);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _Evidence extends Evidence {
  const _Evidence({required this.id, required this.requirementId, required this.canonicalTerm, required this.matchedTerm, required this.classification, required this.explanation, required this.section, required this.page, required this.start, required this.end, required this.matchingTool}): super._();
  factory _Evidence.fromJson(Map<String, dynamic> json) => _$EvidenceFromJson(json);

@override final  String id;
@override final  String requirementId;
@override final  String canonicalTerm;
@override final  String? matchedTerm;
@override final  EvidenceClassification classification;
@override final  String explanation;
@override final  String? section;
@override final  int? page;
@override final  int? start;
@override final  int? end;
@override final  String matchingTool;

/// Create a copy of Evidence
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$EvidenceCopyWith<_Evidence> get copyWith => __$EvidenceCopyWithImpl<_Evidence>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$EvidenceToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _Evidence&&(identical(other.id, id) || other.id == id)&&(identical(other.requirementId, requirementId) || other.requirementId == requirementId)&&(identical(other.canonicalTerm, canonicalTerm) || other.canonicalTerm == canonicalTerm)&&(identical(other.matchedTerm, matchedTerm) || other.matchedTerm == matchedTerm)&&(identical(other.classification, classification) || other.classification == classification)&&(identical(other.explanation, explanation) || other.explanation == explanation)&&(identical(other.section, section) || other.section == section)&&(identical(other.page, page) || other.page == page)&&(identical(other.start, start) || other.start == start)&&(identical(other.end, end) || other.end == end)&&(identical(other.matchingTool, matchingTool) || other.matchingTool == matchingTool));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,requirementId,canonicalTerm,matchedTerm,classification,explanation,section,page,start,end,matchingTool);

@override
String toString() {
  return 'Evidence(id: $id, requirementId: $requirementId, canonicalTerm: $canonicalTerm, matchedTerm: $matchedTerm, classification: $classification, explanation: $explanation, section: $section, page: $page, start: $start, end: $end, matchingTool: $matchingTool)';
}


}

/// @nodoc
abstract mixin class _$EvidenceCopyWith<$Res> implements $EvidenceCopyWith<$Res> {
  factory _$EvidenceCopyWith(_Evidence value, $Res Function(_Evidence) _then) = __$EvidenceCopyWithImpl;
@override @useResult
$Res call({
 String id, String requirementId, String canonicalTerm, String? matchedTerm, EvidenceClassification classification, String explanation, String? section, int? page, int? start, int? end, String matchingTool
});




}
/// @nodoc
class __$EvidenceCopyWithImpl<$Res>
    implements _$EvidenceCopyWith<$Res> {
  __$EvidenceCopyWithImpl(this._self, this._then);

  final _Evidence _self;
  final $Res Function(_Evidence) _then;

/// Create a copy of Evidence
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? requirementId = null,Object? canonicalTerm = null,Object? matchedTerm = freezed,Object? classification = null,Object? explanation = null,Object? section = freezed,Object? page = freezed,Object? start = freezed,Object? end = freezed,Object? matchingTool = null,}) {
  return _then(_Evidence(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,requirementId: null == requirementId ? _self.requirementId : requirementId // ignore: cast_nullable_to_non_nullable
as String,canonicalTerm: null == canonicalTerm ? _self.canonicalTerm : canonicalTerm // ignore: cast_nullable_to_non_nullable
as String,matchedTerm: freezed == matchedTerm ? _self.matchedTerm : matchedTerm // ignore: cast_nullable_to_non_nullable
as String?,classification: null == classification ? _self.classification : classification // ignore: cast_nullable_to_non_nullable
as EvidenceClassification,explanation: null == explanation ? _self.explanation : explanation // ignore: cast_nullable_to_non_nullable
as String,section: freezed == section ? _self.section : section // ignore: cast_nullable_to_non_nullable
as String?,page: freezed == page ? _self.page : page // ignore: cast_nullable_to_non_nullable
as int?,start: freezed == start ? _self.start : start // ignore: cast_nullable_to_non_nullable
as int?,end: freezed == end ? _self.end : end // ignore: cast_nullable_to_non_nullable
as int?,matchingTool: null == matchingTool ? _self.matchingTool : matchingTool // ignore: cast_nullable_to_non_nullable
as String,
  ));
}


}


/// @nodoc
mixin _$ScoreBreakdown {

 double get roleSkills; double get experience; double get ats; double get completeness; double get impact;
/// Create a copy of ScoreBreakdown
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$ScoreBreakdownCopyWith<ScoreBreakdown> get copyWith => _$ScoreBreakdownCopyWithImpl<ScoreBreakdown>(this as ScoreBreakdown, _$identity);

  /// Serializes this ScoreBreakdown to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is ScoreBreakdown&&(identical(other.roleSkills, roleSkills) || other.roleSkills == roleSkills)&&(identical(other.experience, experience) || other.experience == experience)&&(identical(other.ats, ats) || other.ats == ats)&&(identical(other.completeness, completeness) || other.completeness == completeness)&&(identical(other.impact, impact) || other.impact == impact));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,roleSkills,experience,ats,completeness,impact);

@override
String toString() {
  return 'ScoreBreakdown(roleSkills: $roleSkills, experience: $experience, ats: $ats, completeness: $completeness, impact: $impact)';
}


}

/// @nodoc
abstract mixin class $ScoreBreakdownCopyWith<$Res>  {
  factory $ScoreBreakdownCopyWith(ScoreBreakdown value, $Res Function(ScoreBreakdown) _then) = _$ScoreBreakdownCopyWithImpl;
@useResult
$Res call({
 double roleSkills, double experience, double ats, double completeness, double impact
});




}
/// @nodoc
class _$ScoreBreakdownCopyWithImpl<$Res>
    implements $ScoreBreakdownCopyWith<$Res> {
  _$ScoreBreakdownCopyWithImpl(this._self, this._then);

  final ScoreBreakdown _self;
  final $Res Function(ScoreBreakdown) _then;

/// Create a copy of ScoreBreakdown
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? roleSkills = null,Object? experience = null,Object? ats = null,Object? completeness = null,Object? impact = null,}) {
  return _then(_self.copyWith(
roleSkills: null == roleSkills ? _self.roleSkills : roleSkills // ignore: cast_nullable_to_non_nullable
as double,experience: null == experience ? _self.experience : experience // ignore: cast_nullable_to_non_nullable
as double,ats: null == ats ? _self.ats : ats // ignore: cast_nullable_to_non_nullable
as double,completeness: null == completeness ? _self.completeness : completeness // ignore: cast_nullable_to_non_nullable
as double,impact: null == impact ? _self.impact : impact // ignore: cast_nullable_to_non_nullable
as double,
  ));
}

}


/// Adds pattern-matching-related methods to [ScoreBreakdown].
extension ScoreBreakdownPatterns on ScoreBreakdown {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _ScoreBreakdown value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _ScoreBreakdown() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _ScoreBreakdown value)  $default,){
final _that = this;
switch (_that) {
case _ScoreBreakdown():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _ScoreBreakdown value)?  $default,){
final _that = this;
switch (_that) {
case _ScoreBreakdown() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( double roleSkills,  double experience,  double ats,  double completeness,  double impact)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _ScoreBreakdown() when $default != null:
return $default(_that.roleSkills,_that.experience,_that.ats,_that.completeness,_that.impact);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( double roleSkills,  double experience,  double ats,  double completeness,  double impact)  $default,) {final _that = this;
switch (_that) {
case _ScoreBreakdown():
return $default(_that.roleSkills,_that.experience,_that.ats,_that.completeness,_that.impact);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( double roleSkills,  double experience,  double ats,  double completeness,  double impact)?  $default,) {final _that = this;
switch (_that) {
case _ScoreBreakdown() when $default != null:
return $default(_that.roleSkills,_that.experience,_that.ats,_that.completeness,_that.impact);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _ScoreBreakdown extends ScoreBreakdown {
  const _ScoreBreakdown({required this.roleSkills, required this.experience, required this.ats, required this.completeness, required this.impact}): super._();
  factory _ScoreBreakdown.fromJson(Map<String, dynamic> json) => _$ScoreBreakdownFromJson(json);

@override final  double roleSkills;
@override final  double experience;
@override final  double ats;
@override final  double completeness;
@override final  double impact;

/// Create a copy of ScoreBreakdown
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$ScoreBreakdownCopyWith<_ScoreBreakdown> get copyWith => __$ScoreBreakdownCopyWithImpl<_ScoreBreakdown>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$ScoreBreakdownToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _ScoreBreakdown&&(identical(other.roleSkills, roleSkills) || other.roleSkills == roleSkills)&&(identical(other.experience, experience) || other.experience == experience)&&(identical(other.ats, ats) || other.ats == ats)&&(identical(other.completeness, completeness) || other.completeness == completeness)&&(identical(other.impact, impact) || other.impact == impact));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,roleSkills,experience,ats,completeness,impact);

@override
String toString() {
  return 'ScoreBreakdown(roleSkills: $roleSkills, experience: $experience, ats: $ats, completeness: $completeness, impact: $impact)';
}


}

/// @nodoc
abstract mixin class _$ScoreBreakdownCopyWith<$Res> implements $ScoreBreakdownCopyWith<$Res> {
  factory _$ScoreBreakdownCopyWith(_ScoreBreakdown value, $Res Function(_ScoreBreakdown) _then) = __$ScoreBreakdownCopyWithImpl;
@override @useResult
$Res call({
 double roleSkills, double experience, double ats, double completeness, double impact
});




}
/// @nodoc
class __$ScoreBreakdownCopyWithImpl<$Res>
    implements _$ScoreBreakdownCopyWith<$Res> {
  __$ScoreBreakdownCopyWithImpl(this._self, this._then);

  final _ScoreBreakdown _self;
  final $Res Function(_ScoreBreakdown) _then;

/// Create a copy of ScoreBreakdown
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? roleSkills = null,Object? experience = null,Object? ats = null,Object? completeness = null,Object? impact = null,}) {
  return _then(_ScoreBreakdown(
roleSkills: null == roleSkills ? _self.roleSkills : roleSkills // ignore: cast_nullable_to_non_nullable
as double,experience: null == experience ? _self.experience : experience // ignore: cast_nullable_to_non_nullable
as double,ats: null == ats ? _self.ats : ats // ignore: cast_nullable_to_non_nullable
as double,completeness: null == completeness ? _self.completeness : completeness // ignore: cast_nullable_to_non_nullable
as double,impact: null == impact ? _self.impact : impact // ignore: cast_nullable_to_non_nullable
as double,
  ));
}


}


/// @nodoc
mixin _$Recommendation {

 String get id; String get text; bool get conditional;
/// Create a copy of Recommendation
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$RecommendationCopyWith<Recommendation> get copyWith => _$RecommendationCopyWithImpl<Recommendation>(this as Recommendation, _$identity);

  /// Serializes this Recommendation to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is Recommendation&&(identical(other.id, id) || other.id == id)&&(identical(other.text, text) || other.text == text)&&(identical(other.conditional, conditional) || other.conditional == conditional));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,text,conditional);

@override
String toString() {
  return 'Recommendation(id: $id, text: $text, conditional: $conditional)';
}


}

/// @nodoc
abstract mixin class $RecommendationCopyWith<$Res>  {
  factory $RecommendationCopyWith(Recommendation value, $Res Function(Recommendation) _then) = _$RecommendationCopyWithImpl;
@useResult
$Res call({
 String id, String text, bool conditional
});




}
/// @nodoc
class _$RecommendationCopyWithImpl<$Res>
    implements $RecommendationCopyWith<$Res> {
  _$RecommendationCopyWithImpl(this._self, this._then);

  final Recommendation _self;
  final $Res Function(Recommendation) _then;

/// Create a copy of Recommendation
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? text = null,Object? conditional = null,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,conditional: null == conditional ? _self.conditional : conditional // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}

}


/// Adds pattern-matching-related methods to [Recommendation].
extension RecommendationPatterns on Recommendation {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _Recommendation value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _Recommendation() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _Recommendation value)  $default,){
final _that = this;
switch (_that) {
case _Recommendation():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _Recommendation value)?  $default,){
final _that = this;
switch (_that) {
case _Recommendation() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String id,  String text,  bool conditional)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _Recommendation() when $default != null:
return $default(_that.id,_that.text,_that.conditional);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String id,  String text,  bool conditional)  $default,) {final _that = this;
switch (_that) {
case _Recommendation():
return $default(_that.id,_that.text,_that.conditional);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String id,  String text,  bool conditional)?  $default,) {final _that = this;
switch (_that) {
case _Recommendation() when $default != null:
return $default(_that.id,_that.text,_that.conditional);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _Recommendation implements Recommendation {
  const _Recommendation({required this.id, required this.text, required this.conditional});
  factory _Recommendation.fromJson(Map<String, dynamic> json) => _$RecommendationFromJson(json);

@override final  String id;
@override final  String text;
@override final  bool conditional;

/// Create a copy of Recommendation
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$RecommendationCopyWith<_Recommendation> get copyWith => __$RecommendationCopyWithImpl<_Recommendation>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$RecommendationToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _Recommendation&&(identical(other.id, id) || other.id == id)&&(identical(other.text, text) || other.text == text)&&(identical(other.conditional, conditional) || other.conditional == conditional));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,text,conditional);

@override
String toString() {
  return 'Recommendation(id: $id, text: $text, conditional: $conditional)';
}


}

/// @nodoc
abstract mixin class _$RecommendationCopyWith<$Res> implements $RecommendationCopyWith<$Res> {
  factory _$RecommendationCopyWith(_Recommendation value, $Res Function(_Recommendation) _then) = __$RecommendationCopyWithImpl;
@override @useResult
$Res call({
 String id, String text, bool conditional
});




}
/// @nodoc
class __$RecommendationCopyWithImpl<$Res>
    implements _$RecommendationCopyWith<$Res> {
  __$RecommendationCopyWithImpl(this._self, this._then);

  final _Recommendation _self;
  final $Res Function(_Recommendation) _then;

/// Create a copy of Recommendation
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? text = null,Object? conditional = null,}) {
  return _then(_Recommendation(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,conditional: null == conditional ? _self.conditional : conditional // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}


}


/// @nodoc
mixin _$TrajectoryEntry {

 String get agent; int get step; String get goal; String get tool; String get observation; String get decision; double get confidence; String get stateUpdate; String? get nextAgent; bool get retry;
/// Create a copy of TrajectoryEntry
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$TrajectoryEntryCopyWith<TrajectoryEntry> get copyWith => _$TrajectoryEntryCopyWithImpl<TrajectoryEntry>(this as TrajectoryEntry, _$identity);

  /// Serializes this TrajectoryEntry to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is TrajectoryEntry&&(identical(other.agent, agent) || other.agent == agent)&&(identical(other.step, step) || other.step == step)&&(identical(other.goal, goal) || other.goal == goal)&&(identical(other.tool, tool) || other.tool == tool)&&(identical(other.observation, observation) || other.observation == observation)&&(identical(other.decision, decision) || other.decision == decision)&&(identical(other.confidence, confidence) || other.confidence == confidence)&&(identical(other.stateUpdate, stateUpdate) || other.stateUpdate == stateUpdate)&&(identical(other.nextAgent, nextAgent) || other.nextAgent == nextAgent)&&(identical(other.retry, retry) || other.retry == retry));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,agent,step,goal,tool,observation,decision,confidence,stateUpdate,nextAgent,retry);

@override
String toString() {
  return 'TrajectoryEntry(agent: $agent, step: $step, goal: $goal, tool: $tool, observation: $observation, decision: $decision, confidence: $confidence, stateUpdate: $stateUpdate, nextAgent: $nextAgent, retry: $retry)';
}


}

/// @nodoc
abstract mixin class $TrajectoryEntryCopyWith<$Res>  {
  factory $TrajectoryEntryCopyWith(TrajectoryEntry value, $Res Function(TrajectoryEntry) _then) = _$TrajectoryEntryCopyWithImpl;
@useResult
$Res call({
 String agent, int step, String goal, String tool, String observation, String decision, double confidence, String stateUpdate, String? nextAgent, bool retry
});




}
/// @nodoc
class _$TrajectoryEntryCopyWithImpl<$Res>
    implements $TrajectoryEntryCopyWith<$Res> {
  _$TrajectoryEntryCopyWithImpl(this._self, this._then);

  final TrajectoryEntry _self;
  final $Res Function(TrajectoryEntry) _then;

/// Create a copy of TrajectoryEntry
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? agent = null,Object? step = null,Object? goal = null,Object? tool = null,Object? observation = null,Object? decision = null,Object? confidence = null,Object? stateUpdate = null,Object? nextAgent = freezed,Object? retry = null,}) {
  return _then(_self.copyWith(
agent: null == agent ? _self.agent : agent // ignore: cast_nullable_to_non_nullable
as String,step: null == step ? _self.step : step // ignore: cast_nullable_to_non_nullable
as int,goal: null == goal ? _self.goal : goal // ignore: cast_nullable_to_non_nullable
as String,tool: null == tool ? _self.tool : tool // ignore: cast_nullable_to_non_nullable
as String,observation: null == observation ? _self.observation : observation // ignore: cast_nullable_to_non_nullable
as String,decision: null == decision ? _self.decision : decision // ignore: cast_nullable_to_non_nullable
as String,confidence: null == confidence ? _self.confidence : confidence // ignore: cast_nullable_to_non_nullable
as double,stateUpdate: null == stateUpdate ? _self.stateUpdate : stateUpdate // ignore: cast_nullable_to_non_nullable
as String,nextAgent: freezed == nextAgent ? _self.nextAgent : nextAgent // ignore: cast_nullable_to_non_nullable
as String?,retry: null == retry ? _self.retry : retry // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}

}


/// Adds pattern-matching-related methods to [TrajectoryEntry].
extension TrajectoryEntryPatterns on TrajectoryEntry {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _TrajectoryEntry value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _TrajectoryEntry() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _TrajectoryEntry value)  $default,){
final _that = this;
switch (_that) {
case _TrajectoryEntry():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _TrajectoryEntry value)?  $default,){
final _that = this;
switch (_that) {
case _TrajectoryEntry() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String agent,  int step,  String goal,  String tool,  String observation,  String decision,  double confidence,  String stateUpdate,  String? nextAgent,  bool retry)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _TrajectoryEntry() when $default != null:
return $default(_that.agent,_that.step,_that.goal,_that.tool,_that.observation,_that.decision,_that.confidence,_that.stateUpdate,_that.nextAgent,_that.retry);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String agent,  int step,  String goal,  String tool,  String observation,  String decision,  double confidence,  String stateUpdate,  String? nextAgent,  bool retry)  $default,) {final _that = this;
switch (_that) {
case _TrajectoryEntry():
return $default(_that.agent,_that.step,_that.goal,_that.tool,_that.observation,_that.decision,_that.confidence,_that.stateUpdate,_that.nextAgent,_that.retry);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String agent,  int step,  String goal,  String tool,  String observation,  String decision,  double confidence,  String stateUpdate,  String? nextAgent,  bool retry)?  $default,) {final _that = this;
switch (_that) {
case _TrajectoryEntry() when $default != null:
return $default(_that.agent,_that.step,_that.goal,_that.tool,_that.observation,_that.decision,_that.confidence,_that.stateUpdate,_that.nextAgent,_that.retry);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _TrajectoryEntry implements TrajectoryEntry {
  const _TrajectoryEntry({required this.agent, required this.step, required this.goal, required this.tool, required this.observation, required this.decision, required this.confidence, required this.stateUpdate, required this.nextAgent, required this.retry});
  factory _TrajectoryEntry.fromJson(Map<String, dynamic> json) => _$TrajectoryEntryFromJson(json);

@override final  String agent;
@override final  int step;
@override final  String goal;
@override final  String tool;
@override final  String observation;
@override final  String decision;
@override final  double confidence;
@override final  String stateUpdate;
@override final  String? nextAgent;
@override final  bool retry;

/// Create a copy of TrajectoryEntry
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$TrajectoryEntryCopyWith<_TrajectoryEntry> get copyWith => __$TrajectoryEntryCopyWithImpl<_TrajectoryEntry>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$TrajectoryEntryToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _TrajectoryEntry&&(identical(other.agent, agent) || other.agent == agent)&&(identical(other.step, step) || other.step == step)&&(identical(other.goal, goal) || other.goal == goal)&&(identical(other.tool, tool) || other.tool == tool)&&(identical(other.observation, observation) || other.observation == observation)&&(identical(other.decision, decision) || other.decision == decision)&&(identical(other.confidence, confidence) || other.confidence == confidence)&&(identical(other.stateUpdate, stateUpdate) || other.stateUpdate == stateUpdate)&&(identical(other.nextAgent, nextAgent) || other.nextAgent == nextAgent)&&(identical(other.retry, retry) || other.retry == retry));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,agent,step,goal,tool,observation,decision,confidence,stateUpdate,nextAgent,retry);

@override
String toString() {
  return 'TrajectoryEntry(agent: $agent, step: $step, goal: $goal, tool: $tool, observation: $observation, decision: $decision, confidence: $confidence, stateUpdate: $stateUpdate, nextAgent: $nextAgent, retry: $retry)';
}


}

/// @nodoc
abstract mixin class _$TrajectoryEntryCopyWith<$Res> implements $TrajectoryEntryCopyWith<$Res> {
  factory _$TrajectoryEntryCopyWith(_TrajectoryEntry value, $Res Function(_TrajectoryEntry) _then) = __$TrajectoryEntryCopyWithImpl;
@override @useResult
$Res call({
 String agent, int step, String goal, String tool, String observation, String decision, double confidence, String stateUpdate, String? nextAgent, bool retry
});




}
/// @nodoc
class __$TrajectoryEntryCopyWithImpl<$Res>
    implements _$TrajectoryEntryCopyWith<$Res> {
  __$TrajectoryEntryCopyWithImpl(this._self, this._then);

  final _TrajectoryEntry _self;
  final $Res Function(_TrajectoryEntry) _then;

/// Create a copy of TrajectoryEntry
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? agent = null,Object? step = null,Object? goal = null,Object? tool = null,Object? observation = null,Object? decision = null,Object? confidence = null,Object? stateUpdate = null,Object? nextAgent = freezed,Object? retry = null,}) {
  return _then(_TrajectoryEntry(
agent: null == agent ? _self.agent : agent // ignore: cast_nullable_to_non_nullable
as String,step: null == step ? _self.step : step // ignore: cast_nullable_to_non_nullable
as int,goal: null == goal ? _self.goal : goal // ignore: cast_nullable_to_non_nullable
as String,tool: null == tool ? _self.tool : tool // ignore: cast_nullable_to_non_nullable
as String,observation: null == observation ? _self.observation : observation // ignore: cast_nullable_to_non_nullable
as String,decision: null == decision ? _self.decision : decision // ignore: cast_nullable_to_non_nullable
as String,confidence: null == confidence ? _self.confidence : confidence // ignore: cast_nullable_to_non_nullable
as double,stateUpdate: null == stateUpdate ? _self.stateUpdate : stateUpdate // ignore: cast_nullable_to_non_nullable
as String,nextAgent: freezed == nextAgent ? _self.nextAgent : nextAgent // ignore: cast_nullable_to_non_nullable
as String?,retry: null == retry ? _self.retry : retry // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}


}


/// @nodoc
mixin _$VerificationResult {

 bool get valid; List<String> get failures;
/// Create a copy of VerificationResult
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$VerificationResultCopyWith<VerificationResult> get copyWith => _$VerificationResultCopyWithImpl<VerificationResult>(this as VerificationResult, _$identity);

  /// Serializes this VerificationResult to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is VerificationResult&&(identical(other.valid, valid) || other.valid == valid)&&const DeepCollectionEquality().equals(other.failures, failures));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,valid,const DeepCollectionEquality().hash(failures));

@override
String toString() {
  return 'VerificationResult(valid: $valid, failures: $failures)';
}


}

/// @nodoc
abstract mixin class $VerificationResultCopyWith<$Res>  {
  factory $VerificationResultCopyWith(VerificationResult value, $Res Function(VerificationResult) _then) = _$VerificationResultCopyWithImpl;
@useResult
$Res call({
 bool valid, List<String> failures
});




}
/// @nodoc
class _$VerificationResultCopyWithImpl<$Res>
    implements $VerificationResultCopyWith<$Res> {
  _$VerificationResultCopyWithImpl(this._self, this._then);

  final VerificationResult _self;
  final $Res Function(VerificationResult) _then;

/// Create a copy of VerificationResult
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? valid = null,Object? failures = null,}) {
  return _then(_self.copyWith(
valid: null == valid ? _self.valid : valid // ignore: cast_nullable_to_non_nullable
as bool,failures: null == failures ? _self.failures : failures // ignore: cast_nullable_to_non_nullable
as List<String>,
  ));
}

}


/// Adds pattern-matching-related methods to [VerificationResult].
extension VerificationResultPatterns on VerificationResult {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _VerificationResult value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _VerificationResult() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _VerificationResult value)  $default,){
final _that = this;
switch (_that) {
case _VerificationResult():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _VerificationResult value)?  $default,){
final _that = this;
switch (_that) {
case _VerificationResult() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( bool valid,  List<String> failures)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _VerificationResult() when $default != null:
return $default(_that.valid,_that.failures);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( bool valid,  List<String> failures)  $default,) {final _that = this;
switch (_that) {
case _VerificationResult():
return $default(_that.valid,_that.failures);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( bool valid,  List<String> failures)?  $default,) {final _that = this;
switch (_that) {
case _VerificationResult() when $default != null:
return $default(_that.valid,_that.failures);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _VerificationResult implements VerificationResult {
  const _VerificationResult({required this.valid, final  List<String> failures = const []}): _failures = failures;
  factory _VerificationResult.fromJson(Map<String, dynamic> json) => _$VerificationResultFromJson(json);

@override final  bool valid;
 final  List<String> _failures;
@override@JsonKey() List<String> get failures {
  if (_failures is EqualUnmodifiableListView) return _failures;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_failures);
}


/// Create a copy of VerificationResult
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$VerificationResultCopyWith<_VerificationResult> get copyWith => __$VerificationResultCopyWithImpl<_VerificationResult>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$VerificationResultToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _VerificationResult&&(identical(other.valid, valid) || other.valid == valid)&&const DeepCollectionEquality().equals(other._failures, _failures));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,valid,const DeepCollectionEquality().hash(_failures));

@override
String toString() {
  return 'VerificationResult(valid: $valid, failures: $failures)';
}


}

/// @nodoc
abstract mixin class _$VerificationResultCopyWith<$Res> implements $VerificationResultCopyWith<$Res> {
  factory _$VerificationResultCopyWith(_VerificationResult value, $Res Function(_VerificationResult) _then) = __$VerificationResultCopyWithImpl;
@override @useResult
$Res call({
 bool valid, List<String> failures
});




}
/// @nodoc
class __$VerificationResultCopyWithImpl<$Res>
    implements _$VerificationResultCopyWith<$Res> {
  __$VerificationResultCopyWithImpl(this._self, this._then);

  final _VerificationResult _self;
  final $Res Function(_VerificationResult) _then;

/// Create a copy of VerificationResult
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? valid = null,Object? failures = null,}) {
  return _then(_VerificationResult(
valid: null == valid ? _self.valid : valid // ignore: cast_nullable_to_non_nullable
as bool,failures: null == failures ? _self._failures : failures // ignore: cast_nullable_to_non_nullable
as List<String>,
  ));
}


}


/// @nodoc
mixin _$AnalysisResult {

 String get roleSlug; String get roleTitle; String? get seniority; String get catalogVersion; String get engineVersion; List<Evidence> get evidence; ScoreBreakdown get score; List<Recommendation> get recommendations; List<TrajectoryEntry> get trajectory; VerificationResult get verification;
/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$AnalysisResultCopyWith<AnalysisResult> get copyWith => _$AnalysisResultCopyWithImpl<AnalysisResult>(this as AnalysisResult, _$identity);

  /// Serializes this AnalysisResult to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is AnalysisResult&&(identical(other.roleSlug, roleSlug) || other.roleSlug == roleSlug)&&(identical(other.roleTitle, roleTitle) || other.roleTitle == roleTitle)&&(identical(other.seniority, seniority) || other.seniority == seniority)&&(identical(other.catalogVersion, catalogVersion) || other.catalogVersion == catalogVersion)&&(identical(other.engineVersion, engineVersion) || other.engineVersion == engineVersion)&&const DeepCollectionEquality().equals(other.evidence, evidence)&&(identical(other.score, score) || other.score == score)&&const DeepCollectionEquality().equals(other.recommendations, recommendations)&&const DeepCollectionEquality().equals(other.trajectory, trajectory)&&(identical(other.verification, verification) || other.verification == verification));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,roleSlug,roleTitle,seniority,catalogVersion,engineVersion,const DeepCollectionEquality().hash(evidence),score,const DeepCollectionEquality().hash(recommendations),const DeepCollectionEquality().hash(trajectory),verification);

@override
String toString() {
  return 'AnalysisResult(roleSlug: $roleSlug, roleTitle: $roleTitle, seniority: $seniority, catalogVersion: $catalogVersion, engineVersion: $engineVersion, evidence: $evidence, score: $score, recommendations: $recommendations, trajectory: $trajectory, verification: $verification)';
}


}

/// @nodoc
abstract mixin class $AnalysisResultCopyWith<$Res>  {
  factory $AnalysisResultCopyWith(AnalysisResult value, $Res Function(AnalysisResult) _then) = _$AnalysisResultCopyWithImpl;
@useResult
$Res call({
 String roleSlug, String roleTitle, String? seniority, String catalogVersion, String engineVersion, List<Evidence> evidence, ScoreBreakdown score, List<Recommendation> recommendations, List<TrajectoryEntry> trajectory, VerificationResult verification
});


$ScoreBreakdownCopyWith<$Res> get score;$VerificationResultCopyWith<$Res> get verification;

}
/// @nodoc
class _$AnalysisResultCopyWithImpl<$Res>
    implements $AnalysisResultCopyWith<$Res> {
  _$AnalysisResultCopyWithImpl(this._self, this._then);

  final AnalysisResult _self;
  final $Res Function(AnalysisResult) _then;

/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? roleSlug = null,Object? roleTitle = null,Object? seniority = freezed,Object? catalogVersion = null,Object? engineVersion = null,Object? evidence = null,Object? score = null,Object? recommendations = null,Object? trajectory = null,Object? verification = null,}) {
  return _then(_self.copyWith(
roleSlug: null == roleSlug ? _self.roleSlug : roleSlug // ignore: cast_nullable_to_non_nullable
as String,roleTitle: null == roleTitle ? _self.roleTitle : roleTitle // ignore: cast_nullable_to_non_nullable
as String,seniority: freezed == seniority ? _self.seniority : seniority // ignore: cast_nullable_to_non_nullable
as String?,catalogVersion: null == catalogVersion ? _self.catalogVersion : catalogVersion // ignore: cast_nullable_to_non_nullable
as String,engineVersion: null == engineVersion ? _self.engineVersion : engineVersion // ignore: cast_nullable_to_non_nullable
as String,evidence: null == evidence ? _self.evidence : evidence // ignore: cast_nullable_to_non_nullable
as List<Evidence>,score: null == score ? _self.score : score // ignore: cast_nullable_to_non_nullable
as ScoreBreakdown,recommendations: null == recommendations ? _self.recommendations : recommendations // ignore: cast_nullable_to_non_nullable
as List<Recommendation>,trajectory: null == trajectory ? _self.trajectory : trajectory // ignore: cast_nullable_to_non_nullable
as List<TrajectoryEntry>,verification: null == verification ? _self.verification : verification // ignore: cast_nullable_to_non_nullable
as VerificationResult,
  ));
}
/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$ScoreBreakdownCopyWith<$Res> get score {

  return $ScoreBreakdownCopyWith<$Res>(_self.score, (value) {
    return _then(_self.copyWith(score: value));
  });
}/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$VerificationResultCopyWith<$Res> get verification {

  return $VerificationResultCopyWith<$Res>(_self.verification, (value) {
    return _then(_self.copyWith(verification: value));
  });
}
}


/// Adds pattern-matching-related methods to [AnalysisResult].
extension AnalysisResultPatterns on AnalysisResult {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _AnalysisResult value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _AnalysisResult() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _AnalysisResult value)  $default,){
final _that = this;
switch (_that) {
case _AnalysisResult():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _AnalysisResult value)?  $default,){
final _that = this;
switch (_that) {
case _AnalysisResult() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String roleSlug,  String roleTitle,  String? seniority,  String catalogVersion,  String engineVersion,  List<Evidence> evidence,  ScoreBreakdown score,  List<Recommendation> recommendations,  List<TrajectoryEntry> trajectory,  VerificationResult verification)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _AnalysisResult() when $default != null:
return $default(_that.roleSlug,_that.roleTitle,_that.seniority,_that.catalogVersion,_that.engineVersion,_that.evidence,_that.score,_that.recommendations,_that.trajectory,_that.verification);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String roleSlug,  String roleTitle,  String? seniority,  String catalogVersion,  String engineVersion,  List<Evidence> evidence,  ScoreBreakdown score,  List<Recommendation> recommendations,  List<TrajectoryEntry> trajectory,  VerificationResult verification)  $default,) {final _that = this;
switch (_that) {
case _AnalysisResult():
return $default(_that.roleSlug,_that.roleTitle,_that.seniority,_that.catalogVersion,_that.engineVersion,_that.evidence,_that.score,_that.recommendations,_that.trajectory,_that.verification);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String roleSlug,  String roleTitle,  String? seniority,  String catalogVersion,  String engineVersion,  List<Evidence> evidence,  ScoreBreakdown score,  List<Recommendation> recommendations,  List<TrajectoryEntry> trajectory,  VerificationResult verification)?  $default,) {final _that = this;
switch (_that) {
case _AnalysisResult() when $default != null:
return $default(_that.roleSlug,_that.roleTitle,_that.seniority,_that.catalogVersion,_that.engineVersion,_that.evidence,_that.score,_that.recommendations,_that.trajectory,_that.verification);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _AnalysisResult implements AnalysisResult {
  const _AnalysisResult({required this.roleSlug, required this.roleTitle, required this.seniority, required this.catalogVersion, required this.engineVersion, required final  List<Evidence> evidence, required this.score, required final  List<Recommendation> recommendations, required final  List<TrajectoryEntry> trajectory, required this.verification}): _evidence = evidence,_recommendations = recommendations,_trajectory = trajectory;
  factory _AnalysisResult.fromJson(Map<String, dynamic> json) => _$AnalysisResultFromJson(json);

@override final  String roleSlug;
@override final  String roleTitle;
@override final  String? seniority;
@override final  String catalogVersion;
@override final  String engineVersion;
 final  List<Evidence> _evidence;
@override List<Evidence> get evidence {
  if (_evidence is EqualUnmodifiableListView) return _evidence;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_evidence);
}

@override final  ScoreBreakdown score;
 final  List<Recommendation> _recommendations;
@override List<Recommendation> get recommendations {
  if (_recommendations is EqualUnmodifiableListView) return _recommendations;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_recommendations);
}

 final  List<TrajectoryEntry> _trajectory;
@override List<TrajectoryEntry> get trajectory {
  if (_trajectory is EqualUnmodifiableListView) return _trajectory;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_trajectory);
}

@override final  VerificationResult verification;

/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$AnalysisResultCopyWith<_AnalysisResult> get copyWith => __$AnalysisResultCopyWithImpl<_AnalysisResult>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$AnalysisResultToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _AnalysisResult&&(identical(other.roleSlug, roleSlug) || other.roleSlug == roleSlug)&&(identical(other.roleTitle, roleTitle) || other.roleTitle == roleTitle)&&(identical(other.seniority, seniority) || other.seniority == seniority)&&(identical(other.catalogVersion, catalogVersion) || other.catalogVersion == catalogVersion)&&(identical(other.engineVersion, engineVersion) || other.engineVersion == engineVersion)&&const DeepCollectionEquality().equals(other._evidence, _evidence)&&(identical(other.score, score) || other.score == score)&&const DeepCollectionEquality().equals(other._recommendations, _recommendations)&&const DeepCollectionEquality().equals(other._trajectory, _trajectory)&&(identical(other.verification, verification) || other.verification == verification));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,roleSlug,roleTitle,seniority,catalogVersion,engineVersion,const DeepCollectionEquality().hash(_evidence),score,const DeepCollectionEquality().hash(_recommendations),const DeepCollectionEquality().hash(_trajectory),verification);

@override
String toString() {
  return 'AnalysisResult(roleSlug: $roleSlug, roleTitle: $roleTitle, seniority: $seniority, catalogVersion: $catalogVersion, engineVersion: $engineVersion, evidence: $evidence, score: $score, recommendations: $recommendations, trajectory: $trajectory, verification: $verification)';
}


}

/// @nodoc
abstract mixin class _$AnalysisResultCopyWith<$Res> implements $AnalysisResultCopyWith<$Res> {
  factory _$AnalysisResultCopyWith(_AnalysisResult value, $Res Function(_AnalysisResult) _then) = __$AnalysisResultCopyWithImpl;
@override @useResult
$Res call({
 String roleSlug, String roleTitle, String? seniority, String catalogVersion, String engineVersion, List<Evidence> evidence, ScoreBreakdown score, List<Recommendation> recommendations, List<TrajectoryEntry> trajectory, VerificationResult verification
});


@override $ScoreBreakdownCopyWith<$Res> get score;@override $VerificationResultCopyWith<$Res> get verification;

}
/// @nodoc
class __$AnalysisResultCopyWithImpl<$Res>
    implements _$AnalysisResultCopyWith<$Res> {
  __$AnalysisResultCopyWithImpl(this._self, this._then);

  final _AnalysisResult _self;
  final $Res Function(_AnalysisResult) _then;

/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? roleSlug = null,Object? roleTitle = null,Object? seniority = freezed,Object? catalogVersion = null,Object? engineVersion = null,Object? evidence = null,Object? score = null,Object? recommendations = null,Object? trajectory = null,Object? verification = null,}) {
  return _then(_AnalysisResult(
roleSlug: null == roleSlug ? _self.roleSlug : roleSlug // ignore: cast_nullable_to_non_nullable
as String,roleTitle: null == roleTitle ? _self.roleTitle : roleTitle // ignore: cast_nullable_to_non_nullable
as String,seniority: freezed == seniority ? _self.seniority : seniority // ignore: cast_nullable_to_non_nullable
as String?,catalogVersion: null == catalogVersion ? _self.catalogVersion : catalogVersion // ignore: cast_nullable_to_non_nullable
as String,engineVersion: null == engineVersion ? _self.engineVersion : engineVersion // ignore: cast_nullable_to_non_nullable
as String,evidence: null == evidence ? _self._evidence : evidence // ignore: cast_nullable_to_non_nullable
as List<Evidence>,score: null == score ? _self.score : score // ignore: cast_nullable_to_non_nullable
as ScoreBreakdown,recommendations: null == recommendations ? _self._recommendations : recommendations // ignore: cast_nullable_to_non_nullable
as List<Recommendation>,trajectory: null == trajectory ? _self._trajectory : trajectory // ignore: cast_nullable_to_non_nullable
as List<TrajectoryEntry>,verification: null == verification ? _self.verification : verification // ignore: cast_nullable_to_non_nullable
as VerificationResult,
  ));
}

/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$ScoreBreakdownCopyWith<$Res> get score {

  return $ScoreBreakdownCopyWith<$Res>(_self.score, (value) {
    return _then(_self.copyWith(score: value));
  });
}/// Create a copy of AnalysisResult
/// with the given fields replaced by the non-null parameter values.
@override
@pragma('vm:prefer-inline')
$VerificationResultCopyWith<$Res> get verification {

  return $VerificationResultCopyWith<$Res>(_self.verification, (value) {
    return _then(_self.copyWith(verification: value));
  });
}
}


/// @nodoc
mixin _$DomainFailure {

 String get code; String get message; bool get recoverable;
/// Create a copy of DomainFailure
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$DomainFailureCopyWith<DomainFailure> get copyWith => _$DomainFailureCopyWithImpl<DomainFailure>(this as DomainFailure, _$identity);

  /// Serializes this DomainFailure to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is DomainFailure&&(identical(other.code, code) || other.code == code)&&(identical(other.message, message) || other.message == message)&&(identical(other.recoverable, recoverable) || other.recoverable == recoverable));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,code,message,recoverable);

@override
String toString() {
  return 'DomainFailure(code: $code, message: $message, recoverable: $recoverable)';
}


}

/// @nodoc
abstract mixin class $DomainFailureCopyWith<$Res>  {
  factory $DomainFailureCopyWith(DomainFailure value, $Res Function(DomainFailure) _then) = _$DomainFailureCopyWithImpl;
@useResult
$Res call({
 String code, String message, bool recoverable
});




}
/// @nodoc
class _$DomainFailureCopyWithImpl<$Res>
    implements $DomainFailureCopyWith<$Res> {
  _$DomainFailureCopyWithImpl(this._self, this._then);

  final DomainFailure _self;
  final $Res Function(DomainFailure) _then;

/// Create a copy of DomainFailure
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? code = null,Object? message = null,Object? recoverable = null,}) {
  return _then(_self.copyWith(
code: null == code ? _self.code : code // ignore: cast_nullable_to_non_nullable
as String,message: null == message ? _self.message : message // ignore: cast_nullable_to_non_nullable
as String,recoverable: null == recoverable ? _self.recoverable : recoverable // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}

}


/// Adds pattern-matching-related methods to [DomainFailure].
extension DomainFailurePatterns on DomainFailure {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _DomainFailure value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _DomainFailure() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _DomainFailure value)  $default,){
final _that = this;
switch (_that) {
case _DomainFailure():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _DomainFailure value)?  $default,){
final _that = this;
switch (_that) {
case _DomainFailure() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String code,  String message,  bool recoverable)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _DomainFailure() when $default != null:
return $default(_that.code,_that.message,_that.recoverable);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String code,  String message,  bool recoverable)  $default,) {final _that = this;
switch (_that) {
case _DomainFailure():
return $default(_that.code,_that.message,_that.recoverable);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String code,  String message,  bool recoverable)?  $default,) {final _that = this;
switch (_that) {
case _DomainFailure() when $default != null:
return $default(_that.code,_that.message,_that.recoverable);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _DomainFailure implements DomainFailure {
  const _DomainFailure({required this.code, required this.message, this.recoverable = true});
  factory _DomainFailure.fromJson(Map<String, dynamic> json) => _$DomainFailureFromJson(json);

@override final  String code;
@override final  String message;
@override@JsonKey() final  bool recoverable;

/// Create a copy of DomainFailure
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$DomainFailureCopyWith<_DomainFailure> get copyWith => __$DomainFailureCopyWithImpl<_DomainFailure>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$DomainFailureToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _DomainFailure&&(identical(other.code, code) || other.code == code)&&(identical(other.message, message) || other.message == message)&&(identical(other.recoverable, recoverable) || other.recoverable == recoverable));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,code,message,recoverable);

@override
String toString() {
  return 'DomainFailure(code: $code, message: $message, recoverable: $recoverable)';
}


}

/// @nodoc
abstract mixin class _$DomainFailureCopyWith<$Res> implements $DomainFailureCopyWith<$Res> {
  factory _$DomainFailureCopyWith(_DomainFailure value, $Res Function(_DomainFailure) _then) = __$DomainFailureCopyWithImpl;
@override @useResult
$Res call({
 String code, String message, bool recoverable
});




}
/// @nodoc
class __$DomainFailureCopyWithImpl<$Res>
    implements _$DomainFailureCopyWith<$Res> {
  __$DomainFailureCopyWithImpl(this._self, this._then);

  final _DomainFailure _self;
  final $Res Function(_DomainFailure) _then;

/// Create a copy of DomainFailure
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? code = null,Object? message = null,Object? recoverable = null,}) {
  return _then(_DomainFailure(
code: null == code ? _self.code : code // ignore: cast_nullable_to_non_nullable
as String,message: null == message ? _self.message : message // ignore: cast_nullable_to_non_nullable
as String,recoverable: null == recoverable ? _self.recoverable : recoverable // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}


}


/// @nodoc
mixin _$AdminSessionState {

 AdminSessionStatus get status; bool get forcePasswordChange; String? get message;
/// Create a copy of AdminSessionState
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$AdminSessionStateCopyWith<AdminSessionState> get copyWith => _$AdminSessionStateCopyWithImpl<AdminSessionState>(this as AdminSessionState, _$identity);

  /// Serializes this AdminSessionState to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is AdminSessionState&&(identical(other.status, status) || other.status == status)&&(identical(other.forcePasswordChange, forcePasswordChange) || other.forcePasswordChange == forcePasswordChange)&&(identical(other.message, message) || other.message == message));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,status,forcePasswordChange,message);

@override
String toString() {
  return 'AdminSessionState(status: $status, forcePasswordChange: $forcePasswordChange, message: $message)';
}


}

/// @nodoc
abstract mixin class $AdminSessionStateCopyWith<$Res>  {
  factory $AdminSessionStateCopyWith(AdminSessionState value, $Res Function(AdminSessionState) _then) = _$AdminSessionStateCopyWithImpl;
@useResult
$Res call({
 AdminSessionStatus status, bool forcePasswordChange, String? message
});




}
/// @nodoc
class _$AdminSessionStateCopyWithImpl<$Res>
    implements $AdminSessionStateCopyWith<$Res> {
  _$AdminSessionStateCopyWithImpl(this._self, this._then);

  final AdminSessionState _self;
  final $Res Function(AdminSessionState) _then;

/// Create a copy of AdminSessionState
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? status = null,Object? forcePasswordChange = null,Object? message = freezed,}) {
  return _then(_self.copyWith(
status: null == status ? _self.status : status // ignore: cast_nullable_to_non_nullable
as AdminSessionStatus,forcePasswordChange: null == forcePasswordChange ? _self.forcePasswordChange : forcePasswordChange // ignore: cast_nullable_to_non_nullable
as bool,message: freezed == message ? _self.message : message // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}

}


/// Adds pattern-matching-related methods to [AdminSessionState].
extension AdminSessionStatePatterns on AdminSessionState {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _AdminSessionState value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _AdminSessionState() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _AdminSessionState value)  $default,){
final _that = this;
switch (_that) {
case _AdminSessionState():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _AdminSessionState value)?  $default,){
final _that = this;
switch (_that) {
case _AdminSessionState() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( AdminSessionStatus status,  bool forcePasswordChange,  String? message)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _AdminSessionState() when $default != null:
return $default(_that.status,_that.forcePasswordChange,_that.message);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( AdminSessionStatus status,  bool forcePasswordChange,  String? message)  $default,) {final _that = this;
switch (_that) {
case _AdminSessionState():
return $default(_that.status,_that.forcePasswordChange,_that.message);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( AdminSessionStatus status,  bool forcePasswordChange,  String? message)?  $default,) {final _that = this;
switch (_that) {
case _AdminSessionState() when $default != null:
return $default(_that.status,_that.forcePasswordChange,_that.message);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _AdminSessionState implements AdminSessionState {
  const _AdminSessionState({this.status = AdminSessionStatus.unknown, this.forcePasswordChange = false, this.message});
  factory _AdminSessionState.fromJson(Map<String, dynamic> json) => _$AdminSessionStateFromJson(json);

@override@JsonKey() final  AdminSessionStatus status;
@override@JsonKey() final  bool forcePasswordChange;
@override final  String? message;

/// Create a copy of AdminSessionState
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$AdminSessionStateCopyWith<_AdminSessionState> get copyWith => __$AdminSessionStateCopyWithImpl<_AdminSessionState>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$AdminSessionStateToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _AdminSessionState&&(identical(other.status, status) || other.status == status)&&(identical(other.forcePasswordChange, forcePasswordChange) || other.forcePasswordChange == forcePasswordChange)&&(identical(other.message, message) || other.message == message));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,status,forcePasswordChange,message);

@override
String toString() {
  return 'AdminSessionState(status: $status, forcePasswordChange: $forcePasswordChange, message: $message)';
}


}

/// @nodoc
abstract mixin class _$AdminSessionStateCopyWith<$Res> implements $AdminSessionStateCopyWith<$Res> {
  factory _$AdminSessionStateCopyWith(_AdminSessionState value, $Res Function(_AdminSessionState) _then) = __$AdminSessionStateCopyWithImpl;
@override @useResult
$Res call({
 AdminSessionStatus status, bool forcePasswordChange, String? message
});




}
/// @nodoc
class __$AdminSessionStateCopyWithImpl<$Res>
    implements _$AdminSessionStateCopyWith<$Res> {
  __$AdminSessionStateCopyWithImpl(this._self, this._then);

  final _AdminSessionState _self;
  final $Res Function(_AdminSessionState) _then;

/// Create a copy of AdminSessionState
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? status = null,Object? forcePasswordChange = null,Object? message = freezed,}) {
  return _then(_AdminSessionState(
status: null == status ? _self.status : status // ignore: cast_nullable_to_non_nullable
as AdminSessionStatus,forcePasswordChange: null == forcePasswordChange ? _self.forcePasswordChange : forcePasswordChange // ignore: cast_nullable_to_non_nullable
as bool,message: freezed == message ? _self.message : message // ignore: cast_nullable_to_non_nullable
as String?,
  ));
}


}

// dart format on

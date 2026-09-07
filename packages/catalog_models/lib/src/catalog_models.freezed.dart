// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'catalog_models.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$RoleRequirement {

 String get id; String get term; List<String> get aliases; List<String> get exclusions; List<String> get phrases; bool get required; double get weight; RuleCategory get category; List<String> get expectedSections; List<String> get recommendationIds;
/// Create a copy of RoleRequirement
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$RoleRequirementCopyWith<RoleRequirement> get copyWith => _$RoleRequirementCopyWithImpl<RoleRequirement>(this as RoleRequirement, _$identity);

  /// Serializes this RoleRequirement to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is RoleRequirement&&(identical(other.id, id) || other.id == id)&&(identical(other.term, term) || other.term == term)&&const DeepCollectionEquality().equals(other.aliases, aliases)&&const DeepCollectionEquality().equals(other.exclusions, exclusions)&&const DeepCollectionEquality().equals(other.phrases, phrases)&&(identical(other.required, required) || other.required == required)&&(identical(other.weight, weight) || other.weight == weight)&&(identical(other.category, category) || other.category == category)&&const DeepCollectionEquality().equals(other.expectedSections, expectedSections)&&const DeepCollectionEquality().equals(other.recommendationIds, recommendationIds));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,term,const DeepCollectionEquality().hash(aliases),const DeepCollectionEquality().hash(exclusions),const DeepCollectionEquality().hash(phrases),required,weight,category,const DeepCollectionEquality().hash(expectedSections),const DeepCollectionEquality().hash(recommendationIds));

@override
String toString() {
  return 'RoleRequirement(id: $id, term: $term, aliases: $aliases, exclusions: $exclusions, phrases: $phrases, required: $required, weight: $weight, category: $category, expectedSections: $expectedSections, recommendationIds: $recommendationIds)';
}


}

/// @nodoc
abstract mixin class $RoleRequirementCopyWith<$Res>  {
  factory $RoleRequirementCopyWith(RoleRequirement value, $Res Function(RoleRequirement) _then) = _$RoleRequirementCopyWithImpl;
@useResult
$Res call({
 String id, String term, List<String> aliases, List<String> exclusions, List<String> phrases, bool required, double weight, RuleCategory category, List<String> expectedSections, List<String> recommendationIds
});




}
/// @nodoc
class _$RoleRequirementCopyWithImpl<$Res>
    implements $RoleRequirementCopyWith<$Res> {
  _$RoleRequirementCopyWithImpl(this._self, this._then);

  final RoleRequirement _self;
  final $Res Function(RoleRequirement) _then;

/// Create a copy of RoleRequirement
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? term = null,Object? aliases = null,Object? exclusions = null,Object? phrases = null,Object? required = null,Object? weight = null,Object? category = null,Object? expectedSections = null,Object? recommendationIds = null,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,term: null == term ? _self.term : term // ignore: cast_nullable_to_non_nullable
as String,aliases: null == aliases ? _self.aliases : aliases // ignore: cast_nullable_to_non_nullable
as List<String>,exclusions: null == exclusions ? _self.exclusions : exclusions // ignore: cast_nullable_to_non_nullable
as List<String>,phrases: null == phrases ? _self.phrases : phrases // ignore: cast_nullable_to_non_nullable
as List<String>,required: null == required ? _self.required : required // ignore: cast_nullable_to_non_nullable
as bool,weight: null == weight ? _self.weight : weight // ignore: cast_nullable_to_non_nullable
as double,category: null == category ? _self.category : category // ignore: cast_nullable_to_non_nullable
as RuleCategory,expectedSections: null == expectedSections ? _self.expectedSections : expectedSections // ignore: cast_nullable_to_non_nullable
as List<String>,recommendationIds: null == recommendationIds ? _self.recommendationIds : recommendationIds // ignore: cast_nullable_to_non_nullable
as List<String>,
  ));
}

}


/// Adds pattern-matching-related methods to [RoleRequirement].
extension RoleRequirementPatterns on RoleRequirement {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _RoleRequirement value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _RoleRequirement() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _RoleRequirement value)  $default,){
final _that = this;
switch (_that) {
case _RoleRequirement():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _RoleRequirement value)?  $default,){
final _that = this;
switch (_that) {
case _RoleRequirement() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String id,  String term,  List<String> aliases,  List<String> exclusions,  List<String> phrases,  bool required,  double weight,  RuleCategory category,  List<String> expectedSections,  List<String> recommendationIds)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _RoleRequirement() when $default != null:
return $default(_that.id,_that.term,_that.aliases,_that.exclusions,_that.phrases,_that.required,_that.weight,_that.category,_that.expectedSections,_that.recommendationIds);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String id,  String term,  List<String> aliases,  List<String> exclusions,  List<String> phrases,  bool required,  double weight,  RuleCategory category,  List<String> expectedSections,  List<String> recommendationIds)  $default,) {final _that = this;
switch (_that) {
case _RoleRequirement():
return $default(_that.id,_that.term,_that.aliases,_that.exclusions,_that.phrases,_that.required,_that.weight,_that.category,_that.expectedSections,_that.recommendationIds);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String id,  String term,  List<String> aliases,  List<String> exclusions,  List<String> phrases,  bool required,  double weight,  RuleCategory category,  List<String> expectedSections,  List<String> recommendationIds)?  $default,) {final _that = this;
switch (_that) {
case _RoleRequirement() when $default != null:
return $default(_that.id,_that.term,_that.aliases,_that.exclusions,_that.phrases,_that.required,_that.weight,_that.category,_that.expectedSections,_that.recommendationIds);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _RoleRequirement implements RoleRequirement {
  const _RoleRequirement({required this.id, required this.term, final  List<String> aliases = const [], final  List<String> exclusions = const [], final  List<String> phrases = const [], required this.required, required this.weight, required this.category, final  List<String> expectedSections = const [], final  List<String> recommendationIds = const []}): _aliases = aliases,_exclusions = exclusions,_phrases = phrases,_expectedSections = expectedSections,_recommendationIds = recommendationIds;
  factory _RoleRequirement.fromJson(Map<String, dynamic> json) => _$RoleRequirementFromJson(json);

@override final  String id;
@override final  String term;
 final  List<String> _aliases;
@override@JsonKey() List<String> get aliases {
  if (_aliases is EqualUnmodifiableListView) return _aliases;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_aliases);
}

 final  List<String> _exclusions;
@override@JsonKey() List<String> get exclusions {
  if (_exclusions is EqualUnmodifiableListView) return _exclusions;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_exclusions);
}

 final  List<String> _phrases;
@override@JsonKey() List<String> get phrases {
  if (_phrases is EqualUnmodifiableListView) return _phrases;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_phrases);
}

@override final  bool required;
@override final  double weight;
@override final  RuleCategory category;
 final  List<String> _expectedSections;
@override@JsonKey() List<String> get expectedSections {
  if (_expectedSections is EqualUnmodifiableListView) return _expectedSections;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_expectedSections);
}

 final  List<String> _recommendationIds;
@override@JsonKey() List<String> get recommendationIds {
  if (_recommendationIds is EqualUnmodifiableListView) return _recommendationIds;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_recommendationIds);
}


/// Create a copy of RoleRequirement
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$RoleRequirementCopyWith<_RoleRequirement> get copyWith => __$RoleRequirementCopyWithImpl<_RoleRequirement>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$RoleRequirementToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _RoleRequirement&&(identical(other.id, id) || other.id == id)&&(identical(other.term, term) || other.term == term)&&const DeepCollectionEquality().equals(other._aliases, _aliases)&&const DeepCollectionEquality().equals(other._exclusions, _exclusions)&&const DeepCollectionEquality().equals(other._phrases, _phrases)&&(identical(other.required, required) || other.required == required)&&(identical(other.weight, weight) || other.weight == weight)&&(identical(other.category, category) || other.category == category)&&const DeepCollectionEquality().equals(other._expectedSections, _expectedSections)&&const DeepCollectionEquality().equals(other._recommendationIds, _recommendationIds));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,term,const DeepCollectionEquality().hash(_aliases),const DeepCollectionEquality().hash(_exclusions),const DeepCollectionEquality().hash(_phrases),required,weight,category,const DeepCollectionEquality().hash(_expectedSections),const DeepCollectionEquality().hash(_recommendationIds));

@override
String toString() {
  return 'RoleRequirement(id: $id, term: $term, aliases: $aliases, exclusions: $exclusions, phrases: $phrases, required: $required, weight: $weight, category: $category, expectedSections: $expectedSections, recommendationIds: $recommendationIds)';
}


}

/// @nodoc
abstract mixin class _$RoleRequirementCopyWith<$Res> implements $RoleRequirementCopyWith<$Res> {
  factory _$RoleRequirementCopyWith(_RoleRequirement value, $Res Function(_RoleRequirement) _then) = __$RoleRequirementCopyWithImpl;
@override @useResult
$Res call({
 String id, String term, List<String> aliases, List<String> exclusions, List<String> phrases, bool required, double weight, RuleCategory category, List<String> expectedSections, List<String> recommendationIds
});




}
/// @nodoc
class __$RoleRequirementCopyWithImpl<$Res>
    implements _$RoleRequirementCopyWith<$Res> {
  __$RoleRequirementCopyWithImpl(this._self, this._then);

  final _RoleRequirement _self;
  final $Res Function(_RoleRequirement) _then;

/// Create a copy of RoleRequirement
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? term = null,Object? aliases = null,Object? exclusions = null,Object? phrases = null,Object? required = null,Object? weight = null,Object? category = null,Object? expectedSections = null,Object? recommendationIds = null,}) {
  return _then(_RoleRequirement(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,term: null == term ? _self.term : term // ignore: cast_nullable_to_non_nullable
as String,aliases: null == aliases ? _self._aliases : aliases // ignore: cast_nullable_to_non_nullable
as List<String>,exclusions: null == exclusions ? _self._exclusions : exclusions // ignore: cast_nullable_to_non_nullable
as List<String>,phrases: null == phrases ? _self._phrases : phrases // ignore: cast_nullable_to_non_nullable
as List<String>,required: null == required ? _self.required : required // ignore: cast_nullable_to_non_nullable
as bool,weight: null == weight ? _self.weight : weight // ignore: cast_nullable_to_non_nullable
as double,category: null == category ? _self.category : category // ignore: cast_nullable_to_non_nullable
as RuleCategory,expectedSections: null == expectedSections ? _self._expectedSections : expectedSections // ignore: cast_nullable_to_non_nullable
as List<String>,recommendationIds: null == recommendationIds ? _self._recommendationIds : recommendationIds // ignore: cast_nullable_to_non_nullable
as List<String>,
  ));
}


}


/// @nodoc
mixin _$JobRole {

 String get slug; String get title; String get description; bool get active; List<SeniorityLevel> get seniorities; List<RoleRequirement> get requirements;
/// Create a copy of JobRole
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$JobRoleCopyWith<JobRole> get copyWith => _$JobRoleCopyWithImpl<JobRole>(this as JobRole, _$identity);

  /// Serializes this JobRole to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is JobRole&&(identical(other.slug, slug) || other.slug == slug)&&(identical(other.title, title) || other.title == title)&&(identical(other.description, description) || other.description == description)&&(identical(other.active, active) || other.active == active)&&const DeepCollectionEquality().equals(other.seniorities, seniorities)&&const DeepCollectionEquality().equals(other.requirements, requirements));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,slug,title,description,active,const DeepCollectionEquality().hash(seniorities),const DeepCollectionEquality().hash(requirements));

@override
String toString() {
  return 'JobRole(slug: $slug, title: $title, description: $description, active: $active, seniorities: $seniorities, requirements: $requirements)';
}


}

/// @nodoc
abstract mixin class $JobRoleCopyWith<$Res>  {
  factory $JobRoleCopyWith(JobRole value, $Res Function(JobRole) _then) = _$JobRoleCopyWithImpl;
@useResult
$Res call({
 String slug, String title, String description, bool active, List<SeniorityLevel> seniorities, List<RoleRequirement> requirements
});




}
/// @nodoc
class _$JobRoleCopyWithImpl<$Res>
    implements $JobRoleCopyWith<$Res> {
  _$JobRoleCopyWithImpl(this._self, this._then);

  final JobRole _self;
  final $Res Function(JobRole) _then;

/// Create a copy of JobRole
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? slug = null,Object? title = null,Object? description = null,Object? active = null,Object? seniorities = null,Object? requirements = null,}) {
  return _then(_self.copyWith(
slug: null == slug ? _self.slug : slug // ignore: cast_nullable_to_non_nullable
as String,title: null == title ? _self.title : title // ignore: cast_nullable_to_non_nullable
as String,description: null == description ? _self.description : description // ignore: cast_nullable_to_non_nullable
as String,active: null == active ? _self.active : active // ignore: cast_nullable_to_non_nullable
as bool,seniorities: null == seniorities ? _self.seniorities : seniorities // ignore: cast_nullable_to_non_nullable
as List<SeniorityLevel>,requirements: null == requirements ? _self.requirements : requirements // ignore: cast_nullable_to_non_nullable
as List<RoleRequirement>,
  ));
}

}


/// Adds pattern-matching-related methods to [JobRole].
extension JobRolePatterns on JobRole {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _JobRole value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _JobRole() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _JobRole value)  $default,){
final _that = this;
switch (_that) {
case _JobRole():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _JobRole value)?  $default,){
final _that = this;
switch (_that) {
case _JobRole() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String slug,  String title,  String description,  bool active,  List<SeniorityLevel> seniorities,  List<RoleRequirement> requirements)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _JobRole() when $default != null:
return $default(_that.slug,_that.title,_that.description,_that.active,_that.seniorities,_that.requirements);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String slug,  String title,  String description,  bool active,  List<SeniorityLevel> seniorities,  List<RoleRequirement> requirements)  $default,) {final _that = this;
switch (_that) {
case _JobRole():
return $default(_that.slug,_that.title,_that.description,_that.active,_that.seniorities,_that.requirements);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String slug,  String title,  String description,  bool active,  List<SeniorityLevel> seniorities,  List<RoleRequirement> requirements)?  $default,) {final _that = this;
switch (_that) {
case _JobRole() when $default != null:
return $default(_that.slug,_that.title,_that.description,_that.active,_that.seniorities,_that.requirements);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _JobRole implements JobRole {
  const _JobRole({required this.slug, required this.title, required this.description, this.active = true, final  List<SeniorityLevel> seniorities = const [], final  List<RoleRequirement> requirements = const []}): _seniorities = seniorities,_requirements = requirements;
  factory _JobRole.fromJson(Map<String, dynamic> json) => _$JobRoleFromJson(json);

@override final  String slug;
@override final  String title;
@override final  String description;
@override@JsonKey() final  bool active;
 final  List<SeniorityLevel> _seniorities;
@override@JsonKey() List<SeniorityLevel> get seniorities {
  if (_seniorities is EqualUnmodifiableListView) return _seniorities;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_seniorities);
}

 final  List<RoleRequirement> _requirements;
@override@JsonKey() List<RoleRequirement> get requirements {
  if (_requirements is EqualUnmodifiableListView) return _requirements;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_requirements);
}


/// Create a copy of JobRole
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$JobRoleCopyWith<_JobRole> get copyWith => __$JobRoleCopyWithImpl<_JobRole>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$JobRoleToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _JobRole&&(identical(other.slug, slug) || other.slug == slug)&&(identical(other.title, title) || other.title == title)&&(identical(other.description, description) || other.description == description)&&(identical(other.active, active) || other.active == active)&&const DeepCollectionEquality().equals(other._seniorities, _seniorities)&&const DeepCollectionEquality().equals(other._requirements, _requirements));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,slug,title,description,active,const DeepCollectionEquality().hash(_seniorities),const DeepCollectionEquality().hash(_requirements));

@override
String toString() {
  return 'JobRole(slug: $slug, title: $title, description: $description, active: $active, seniorities: $seniorities, requirements: $requirements)';
}


}

/// @nodoc
abstract mixin class _$JobRoleCopyWith<$Res> implements $JobRoleCopyWith<$Res> {
  factory _$JobRoleCopyWith(_JobRole value, $Res Function(_JobRole) _then) = __$JobRoleCopyWithImpl;
@override @useResult
$Res call({
 String slug, String title, String description, bool active, List<SeniorityLevel> seniorities, List<RoleRequirement> requirements
});




}
/// @nodoc
class __$JobRoleCopyWithImpl<$Res>
    implements _$JobRoleCopyWith<$Res> {
  __$JobRoleCopyWithImpl(this._self, this._then);

  final _JobRole _self;
  final $Res Function(_JobRole) _then;

/// Create a copy of JobRole
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? slug = null,Object? title = null,Object? description = null,Object? active = null,Object? seniorities = null,Object? requirements = null,}) {
  return _then(_JobRole(
slug: null == slug ? _self.slug : slug // ignore: cast_nullable_to_non_nullable
as String,title: null == title ? _self.title : title // ignore: cast_nullable_to_non_nullable
as String,description: null == description ? _self.description : description // ignore: cast_nullable_to_non_nullable
as String,active: null == active ? _self.active : active // ignore: cast_nullable_to_non_nullable
as bool,seniorities: null == seniorities ? _self._seniorities : seniorities // ignore: cast_nullable_to_non_nullable
as List<SeniorityLevel>,requirements: null == requirements ? _self._requirements : requirements // ignore: cast_nullable_to_non_nullable
as List<RoleRequirement>,
  ));
}


}


/// @nodoc
mixin _$CatalogSnapshot {

 String get version; String get engineVersion; DateTime get publishedAt; List<JobRole> get roles; List<RecommendationTemplate> get recommendations;
/// Create a copy of CatalogSnapshot
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$CatalogSnapshotCopyWith<CatalogSnapshot> get copyWith => _$CatalogSnapshotCopyWithImpl<CatalogSnapshot>(this as CatalogSnapshot, _$identity);

  /// Serializes this CatalogSnapshot to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is CatalogSnapshot&&(identical(other.version, version) || other.version == version)&&(identical(other.engineVersion, engineVersion) || other.engineVersion == engineVersion)&&(identical(other.publishedAt, publishedAt) || other.publishedAt == publishedAt)&&const DeepCollectionEquality().equals(other.roles, roles)&&const DeepCollectionEquality().equals(other.recommendations, recommendations));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,version,engineVersion,publishedAt,const DeepCollectionEquality().hash(roles),const DeepCollectionEquality().hash(recommendations));

@override
String toString() {
  return 'CatalogSnapshot(version: $version, engineVersion: $engineVersion, publishedAt: $publishedAt, roles: $roles, recommendations: $recommendations)';
}


}

/// @nodoc
abstract mixin class $CatalogSnapshotCopyWith<$Res>  {
  factory $CatalogSnapshotCopyWith(CatalogSnapshot value, $Res Function(CatalogSnapshot) _then) = _$CatalogSnapshotCopyWithImpl;
@useResult
$Res call({
 String version, String engineVersion, DateTime publishedAt, List<JobRole> roles, List<RecommendationTemplate> recommendations
});




}
/// @nodoc
class _$CatalogSnapshotCopyWithImpl<$Res>
    implements $CatalogSnapshotCopyWith<$Res> {
  _$CatalogSnapshotCopyWithImpl(this._self, this._then);

  final CatalogSnapshot _self;
  final $Res Function(CatalogSnapshot) _then;

/// Create a copy of CatalogSnapshot
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? version = null,Object? engineVersion = null,Object? publishedAt = null,Object? roles = null,Object? recommendations = null,}) {
  return _then(_self.copyWith(
version: null == version ? _self.version : version // ignore: cast_nullable_to_non_nullable
as String,engineVersion: null == engineVersion ? _self.engineVersion : engineVersion // ignore: cast_nullable_to_non_nullable
as String,publishedAt: null == publishedAt ? _self.publishedAt : publishedAt // ignore: cast_nullable_to_non_nullable
as DateTime,roles: null == roles ? _self.roles : roles // ignore: cast_nullable_to_non_nullable
as List<JobRole>,recommendations: null == recommendations ? _self.recommendations : recommendations // ignore: cast_nullable_to_non_nullable
as List<RecommendationTemplate>,
  ));
}

}


/// Adds pattern-matching-related methods to [CatalogSnapshot].
extension CatalogSnapshotPatterns on CatalogSnapshot {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _CatalogSnapshot value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _CatalogSnapshot() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _CatalogSnapshot value)  $default,){
final _that = this;
switch (_that) {
case _CatalogSnapshot():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _CatalogSnapshot value)?  $default,){
final _that = this;
switch (_that) {
case _CatalogSnapshot() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String version,  String engineVersion,  DateTime publishedAt,  List<JobRole> roles,  List<RecommendationTemplate> recommendations)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _CatalogSnapshot() when $default != null:
return $default(_that.version,_that.engineVersion,_that.publishedAt,_that.roles,_that.recommendations);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String version,  String engineVersion,  DateTime publishedAt,  List<JobRole> roles,  List<RecommendationTemplate> recommendations)  $default,) {final _that = this;
switch (_that) {
case _CatalogSnapshot():
return $default(_that.version,_that.engineVersion,_that.publishedAt,_that.roles,_that.recommendations);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String version,  String engineVersion,  DateTime publishedAt,  List<JobRole> roles,  List<RecommendationTemplate> recommendations)?  $default,) {final _that = this;
switch (_that) {
case _CatalogSnapshot() when $default != null:
return $default(_that.version,_that.engineVersion,_that.publishedAt,_that.roles,_that.recommendations);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _CatalogSnapshot implements CatalogSnapshot {
  const _CatalogSnapshot({required this.version, required this.engineVersion, required this.publishedAt, final  List<JobRole> roles = const [], final  List<RecommendationTemplate> recommendations = const []}): _roles = roles,_recommendations = recommendations;
  factory _CatalogSnapshot.fromJson(Map<String, dynamic> json) => _$CatalogSnapshotFromJson(json);

@override final  String version;
@override final  String engineVersion;
@override final  DateTime publishedAt;
 final  List<JobRole> _roles;
@override@JsonKey() List<JobRole> get roles {
  if (_roles is EqualUnmodifiableListView) return _roles;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_roles);
}

 final  List<RecommendationTemplate> _recommendations;
@override@JsonKey() List<RecommendationTemplate> get recommendations {
  if (_recommendations is EqualUnmodifiableListView) return _recommendations;
  // ignore: implicit_dynamic_type
  return EqualUnmodifiableListView(_recommendations);
}


/// Create a copy of CatalogSnapshot
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$CatalogSnapshotCopyWith<_CatalogSnapshot> get copyWith => __$CatalogSnapshotCopyWithImpl<_CatalogSnapshot>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$CatalogSnapshotToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _CatalogSnapshot&&(identical(other.version, version) || other.version == version)&&(identical(other.engineVersion, engineVersion) || other.engineVersion == engineVersion)&&(identical(other.publishedAt, publishedAt) || other.publishedAt == publishedAt)&&const DeepCollectionEquality().equals(other._roles, _roles)&&const DeepCollectionEquality().equals(other._recommendations, _recommendations));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,version,engineVersion,publishedAt,const DeepCollectionEquality().hash(_roles),const DeepCollectionEquality().hash(_recommendations));

@override
String toString() {
  return 'CatalogSnapshot(version: $version, engineVersion: $engineVersion, publishedAt: $publishedAt, roles: $roles, recommendations: $recommendations)';
}


}

/// @nodoc
abstract mixin class _$CatalogSnapshotCopyWith<$Res> implements $CatalogSnapshotCopyWith<$Res> {
  factory _$CatalogSnapshotCopyWith(_CatalogSnapshot value, $Res Function(_CatalogSnapshot) _then) = __$CatalogSnapshotCopyWithImpl;
@override @useResult
$Res call({
 String version, String engineVersion, DateTime publishedAt, List<JobRole> roles, List<RecommendationTemplate> recommendations
});




}
/// @nodoc
class __$CatalogSnapshotCopyWithImpl<$Res>
    implements _$CatalogSnapshotCopyWith<$Res> {
  __$CatalogSnapshotCopyWithImpl(this._self, this._then);

  final _CatalogSnapshot _self;
  final $Res Function(_CatalogSnapshot) _then;

/// Create a copy of CatalogSnapshot
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? version = null,Object? engineVersion = null,Object? publishedAt = null,Object? roles = null,Object? recommendations = null,}) {
  return _then(_CatalogSnapshot(
version: null == version ? _self.version : version // ignore: cast_nullable_to_non_nullable
as String,engineVersion: null == engineVersion ? _self.engineVersion : engineVersion // ignore: cast_nullable_to_non_nullable
as String,publishedAt: null == publishedAt ? _self.publishedAt : publishedAt // ignore: cast_nullable_to_non_nullable
as DateTime,roles: null == roles ? _self._roles : roles // ignore: cast_nullable_to_non_nullable
as List<JobRole>,recommendations: null == recommendations ? _self._recommendations : recommendations // ignore: cast_nullable_to_non_nullable
as List<RecommendationTemplate>,
  ));
}


}


/// @nodoc
mixin _$RecommendationTemplate {

 String get id; String get text; bool get active;
/// Create a copy of RecommendationTemplate
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$RecommendationTemplateCopyWith<RecommendationTemplate> get copyWith => _$RecommendationTemplateCopyWithImpl<RecommendationTemplate>(this as RecommendationTemplate, _$identity);

  /// Serializes this RecommendationTemplate to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is RecommendationTemplate&&(identical(other.id, id) || other.id == id)&&(identical(other.text, text) || other.text == text)&&(identical(other.active, active) || other.active == active));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,text,active);

@override
String toString() {
  return 'RecommendationTemplate(id: $id, text: $text, active: $active)';
}


}

/// @nodoc
abstract mixin class $RecommendationTemplateCopyWith<$Res>  {
  factory $RecommendationTemplateCopyWith(RecommendationTemplate value, $Res Function(RecommendationTemplate) _then) = _$RecommendationTemplateCopyWithImpl;
@useResult
$Res call({
 String id, String text, bool active
});




}
/// @nodoc
class _$RecommendationTemplateCopyWithImpl<$Res>
    implements $RecommendationTemplateCopyWith<$Res> {
  _$RecommendationTemplateCopyWithImpl(this._self, this._then);

  final RecommendationTemplate _self;
  final $Res Function(RecommendationTemplate) _then;

/// Create a copy of RecommendationTemplate
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? id = null,Object? text = null,Object? active = null,}) {
  return _then(_self.copyWith(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,active: null == active ? _self.active : active // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}

}


/// Adds pattern-matching-related methods to [RecommendationTemplate].
extension RecommendationTemplatePatterns on RecommendationTemplate {
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

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _RecommendationTemplate value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _RecommendationTemplate() when $default != null:
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

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _RecommendationTemplate value)  $default,){
final _that = this;
switch (_that) {
case _RecommendationTemplate():
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

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _RecommendationTemplate value)?  $default,){
final _that = this;
switch (_that) {
case _RecommendationTemplate() when $default != null:
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

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String id,  String text,  bool active)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _RecommendationTemplate() when $default != null:
return $default(_that.id,_that.text,_that.active);case _:
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

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String id,  String text,  bool active)  $default,) {final _that = this;
switch (_that) {
case _RecommendationTemplate():
return $default(_that.id,_that.text,_that.active);case _:
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

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String id,  String text,  bool active)?  $default,) {final _that = this;
switch (_that) {
case _RecommendationTemplate() when $default != null:
return $default(_that.id,_that.text,_that.active);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _RecommendationTemplate implements RecommendationTemplate {
  const _RecommendationTemplate({required this.id, required this.text, this.active = true});
  factory _RecommendationTemplate.fromJson(Map<String, dynamic> json) => _$RecommendationTemplateFromJson(json);

@override final  String id;
@override final  String text;
@override@JsonKey() final  bool active;

/// Create a copy of RecommendationTemplate
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$RecommendationTemplateCopyWith<_RecommendationTemplate> get copyWith => __$RecommendationTemplateCopyWithImpl<_RecommendationTemplate>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$RecommendationTemplateToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _RecommendationTemplate&&(identical(other.id, id) || other.id == id)&&(identical(other.text, text) || other.text == text)&&(identical(other.active, active) || other.active == active));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,id,text,active);

@override
String toString() {
  return 'RecommendationTemplate(id: $id, text: $text, active: $active)';
}


}

/// @nodoc
abstract mixin class _$RecommendationTemplateCopyWith<$Res> implements $RecommendationTemplateCopyWith<$Res> {
  factory _$RecommendationTemplateCopyWith(_RecommendationTemplate value, $Res Function(_RecommendationTemplate) _then) = __$RecommendationTemplateCopyWithImpl;
@override @useResult
$Res call({
 String id, String text, bool active
});




}
/// @nodoc
class __$RecommendationTemplateCopyWithImpl<$Res>
    implements _$RecommendationTemplateCopyWith<$Res> {
  __$RecommendationTemplateCopyWithImpl(this._self, this._then);

  final _RecommendationTemplate _self;
  final $Res Function(_RecommendationTemplate) _then;

/// Create a copy of RecommendationTemplate
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? id = null,Object? text = null,Object? active = null,}) {
  return _then(_RecommendationTemplate(
id: null == id ? _self.id : id // ignore: cast_nullable_to_non_nullable
as String,text: null == text ? _self.text : text // ignore: cast_nullable_to_non_nullable
as String,active: null == active ? _self.active : active // ignore: cast_nullable_to_non_nullable
as bool,
  ));
}


}

// dart format on

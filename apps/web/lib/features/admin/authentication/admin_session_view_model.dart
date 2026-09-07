import 'package:core_models/core_models.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../app/providers.dart';

part 'admin_session_view_model.g.dart';

@riverpod
class AdminSessionViewModel extends _$AdminSessionViewModel {
  @override
  AdminSessionState build() {
    Future<void>.microtask(refresh);
    return const AdminSessionState();
  }

  Future<void> refresh() async {
    state = state.copyWith(status: AdminSessionStatus.unknown, message: null);
    try {
      state = await ref.read(adminSessionRepositoryProvider).current();
    } catch (error) {
      state = state.copyWith(
        status: AdminSessionStatus.failure,
        message: error.toString(),
      );
    }
  }

  Future<void> signIn(String username, String password) async {
    state = state.copyWith(status: AdminSessionStatus.signingIn, message: null);
    try {
      state = await ref
          .read(adminSessionRepositoryProvider)
          .signIn(username, password);
    } catch (_) {
      state = state.copyWith(
        status: AdminSessionStatus.failure,
        message: 'Invalid username or password.',
      );
    }
  }

  Future<void> signOut() async {
    state = state.copyWith(status: AdminSessionStatus.signingOut);
    try {
      await ref.read(adminSessionRepositoryProvider).signOut();
    } finally {
      state = const AdminSessionState(status: AdminSessionStatus.signedOut);
    }
  }

  Future<void> changeCredentials({
    required String currentPassword,
    String? newUsername,
    String? newPassword,
  }) async {
    state = state.copyWith(status: AdminSessionStatus.changingCredentials);
    try {
      await ref
          .read(adminSessionRepositoryProvider)
          .changeCredentials(
            currentPassword: currentPassword,
            newUsername: newUsername,
            newPassword: newPassword,
          );
      state = const AdminSessionState(status: AdminSessionStatus.signedOut);
    } catch (_) {
      state = state.copyWith(
        status: AdminSessionStatus.failure,
        message: 'Credential update failed.',
      );
    }
  }
}

import 'package:design_system/design_system.dart';
import 'package:core_models/core_models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../features/admin/authentication/admin_session_view_model.dart';
import '../features/admin/presentation/admin_pages.dart';
import '../features/public/presentation/public_pages.dart';

part 'router.g.dart';

@riverpod
ThemeData theme(Ref ref) => ReadyMyCvTheme.data();

@riverpod
GoRouter appRouter(Ref ref) {
  final refresh = _RouterRefresh();
  ref.onDispose(refresh.dispose);
  ref.listen(adminSessionViewModelProvider, (_, __) => refresh.notify());
  return GoRouter(
    initialLocation: '/',
    refreshListenable: refresh,
    redirect: (_, state) {
      final session = ref.read(adminSessionViewModelProvider);
      final isAdminRoute = state.matchedLocation.startsWith('/admin');
      final signedIn = switch (session.status) {
        AdminSessionStatus.signedIn ||
        AdminSessionStatus.changingCredentials ||
        AdminSessionStatus.signingOut => true,
        _ => false,
      };
      if (signedIn && state.matchedLocation == '/admin') {
        return '/admin/dashboard';
      }
      if (!signedIn &&
          isAdminRoute &&
          state.matchedLocation != '/admin' &&
          session.status != AdminSessionStatus.unknown &&
          session.status != AdminSessionStatus.signingIn) {
        return '/admin';
      }
      if (signedIn &&
          session.forcePasswordChange &&
          isAdminRoute &&
          state.matchedLocation != '/admin/account') {
        return '/admin/account';
      }
      return null;
    },
    routes: [
      GoRoute(path: '/', builder: (_, __) => const LandingPage()),
      GoRoute(path: '/scan', builder: (_, __) => const ScanPage()),
      GoRoute(path: '/results', builder: (_, __) => const ResultsPage()),
      GoRoute(
        path: '/request-role',
        builder: (_, __) => const RoleRequestPage(),
      ),
      GoRoute(
        path: '/privacy',
        builder: (_, __) => const InfoPage(title: 'Privacy', body: _privacy),
      ),
      GoRoute(
        path: '/terms',
        builder: (_, __) =>
            const InfoPage(title: 'Terms & limitations', body: _terms),
      ),
      GoRoute(path: '/admin', builder: (_, __) => const AdminDashboardPage()),
      GoRoute(
        path: '/admin/dashboard',
        builder: (_, __) => const AdminDashboardPage(),
      ),
      GoRoute(path: '/admin/roles', builder: (_, __) => const AdminRolesPage()),
      GoRoute(
        path: '/admin/rule-versions',
        builder: (_, __) => const AdminRuleVersionsPage(),
      ),
      GoRoute(
        path: '/admin/publication',
        builder: (_, __) => const AdminPublicationPage(),
      ),
      GoRoute(
        path: '/admin/role-requests',
        builder: (_, __) => const AdminRoleRequestsPage(),
      ),
      GoRoute(
        path: '/admin/audit-logs',
        builder: (_, __) => const AdminAuditLogsPage(),
      ),
      GoRoute(
        path: '/admin/account',
        builder: (_, __) => const AdminAccountPage(),
      ),
      GoRoute(
        path: '/admin/settings',
        builder: (_, __) => const AdminSettingsPage(),
      ),
    ],
  );
}

class _RouterRefresh extends ChangeNotifier {
  void notify() => notifyListeners();
}

const _privacy =
    'Your PDF, extracted CV text, evidence, score, and trajectory remain in browser memory. They are never uploaded, stored, logged, fingerprinted, or shared.';
const _terms =
    'This is deterministic guidance based on the selected role rules. It is not an employer ATS score, hiring decision, or guarantee of an interview or job offer. Never add experience you do not have.';

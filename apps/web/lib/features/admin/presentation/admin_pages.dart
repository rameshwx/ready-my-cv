import 'package:core_models/core_models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../app/providers.dart';
import '../authentication/admin_session_view_model.dart';

class AdminDashboardPage extends StatelessWidget {
  const AdminDashboardPage({super.key});

  @override
  Widget build(BuildContext context) => const AdminGate(section: 'dashboard');
}

class AdminRolesPage extends StatelessWidget {
  const AdminRolesPage({super.key});

  @override
  Widget build(BuildContext context) => const AdminGate(section: 'roles');
}

class AdminRuleVersionsPage extends StatelessWidget {
  const AdminRuleVersionsPage({super.key});

  @override
  Widget build(BuildContext context) =>
      const AdminGate(section: 'rule-versions');
}

class AdminPublicationPage extends StatelessWidget {
  const AdminPublicationPage({super.key});

  @override
  Widget build(BuildContext context) => const AdminGate(section: 'publication');
}

class AdminRoleRequestsPage extends StatelessWidget {
  const AdminRoleRequestsPage({super.key});

  @override
  Widget build(BuildContext context) =>
      const AdminGate(section: 'role-requests');
}

class AdminAuditLogsPage extends StatelessWidget {
  const AdminAuditLogsPage({super.key});

  @override
  Widget build(BuildContext context) => const AdminGate(section: 'audit-logs');
}

class AdminAccountPage extends StatelessWidget {
  const AdminAccountPage({super.key});

  @override
  Widget build(BuildContext context) => const AdminGate(section: 'account');
}

class AdminSettingsPage extends StatelessWidget {
  const AdminSettingsPage({super.key});

  @override
  Widget build(BuildContext context) => const AdminGate(section: 'settings');
}

class AdminGate extends ConsumerWidget {
  const AdminGate({super.key, required this.section});

  final String section;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(adminSessionViewModelProvider);
    if (state.forcePasswordChange &&
        section != 'account' &&
        state.status == AdminSessionStatus.signedIn) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (context.mounted) context.go('/admin/account');
      });
      return const Scaffold(
        body: Center(child: Text('Redirecting to required account setup…')),
      );
    }
    return switch (state.status) {
      AdminSessionStatus.unknown || AdminSessionStatus.signingIn =>
        const Scaffold(body: Center(child: CircularProgressIndicator())),
      AdminSessionStatus.signedIn ||
      AdminSessionStatus.changingCredentials ||
      AdminSessionStatus.signingOut => AdminShell(
        section: section,
        forcePasswordChange: state.forcePasswordChange,
      ),
      _ => AdminLoginPage(message: state.message),
    };
  }
}

class AdminLoginPage extends ConsumerStatefulWidget {
  const AdminLoginPage({super.key, this.message});

  final String? message;

  @override
  ConsumerState<AdminLoginPage> createState() => _AdminLoginPageState();
}

class _AdminLoginPageState extends ConsumerState<AdminLoginPage> {
  final username = TextEditingController();
  final password = TextEditingController();

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Ready My CV administrator')),
    body: Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 420),
        child: Card(
          margin: const EdgeInsets.all(24),
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Administrator sign in',
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: username,
                  textInputAction: TextInputAction.next,
                  decoration: const InputDecoration(labelText: 'Username'),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: password,
                  obscureText: true,
                  onSubmitted: (_) => _signIn(),
                  decoration: const InputDecoration(labelText: 'Password'),
                ),
                if (widget.message != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 12),
                    child: Text(
                      widget.message!,
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.error,
                      ),
                    ),
                  ),
                const SizedBox(height: 16),
                FilledButton(onPressed: _signIn, child: const Text('Sign in')),
              ],
            ),
          ),
        ),
      ),
    ),
  );

  Future<void> _signIn() async {
    await ref
        .read(adminSessionViewModelProvider.notifier)
        .signIn(username.text, password.text);
  }
}

class AdminShell extends ConsumerWidget {
  const AdminShell({
    super.key,
    required this.section,
    required this.forcePasswordChange,
  });

  final String section;
  final bool forcePasswordChange;

  @override
  Widget build(BuildContext context, WidgetRef ref) => Scaffold(
    appBar: AppBar(
      title: const Text('Ready My CV admin'),
      actions: [
        TextButton(
          onPressed: () => context.go('/'),
          child: const Text('Public site'),
        ),
        TextButton(
          onPressed: () =>
              ref.read(adminSessionViewModelProvider.notifier).signOut(),
          child: const Text('Sign out'),
        ),
      ],
    ),
    drawer: NavigationDrawer(
      selectedIndex: _index(section),
      onDestinationSelected: (index) => context.go(_routes[index]),
      children: [
        const Padding(
          padding: EdgeInsets.fromLTRB(28, 16, 16, 8),
          child: Text('Administrator portal'),
        ),
        ...const [
          NavigationDrawerDestination(
            icon: Icon(Icons.dashboard_outlined),
            label: Text('Dashboard'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.work_outline),
            label: Text('Roles'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.rule_outlined),
            label: Text('Rule versions'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.publish_outlined),
            label: Text('Publication'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.inbox_outlined),
            label: Text('Role requests'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.history),
            label: Text('Audit logs'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.manage_accounts_outlined),
            label: Text('Account'),
          ),
          NavigationDrawerDestination(
            icon: Icon(Icons.settings_outlined),
            label: Text('Settings'),
          ),
        ],
      ],
    ),
    body: ListView(
      padding: const EdgeInsets.all(24),
      children: [
        if (forcePasswordChange)
          Card(
            color: Theme.of(context).colorScheme.errorContainer,
            child: const Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                'Change the initial administrator password before continuing.',
              ),
            ),
          ),
        Text(_title(section), style: Theme.of(context).textTheme.headlineLarge),
        const SizedBox(height: 16),
        _SectionContent(section: section),
      ],
    ),
  );
}

class _SectionContent extends ConsumerWidget {
  const _SectionContent({required this.section});

  final String section;

  @override
  Widget build(BuildContext context, WidgetRef ref) => switch (section) {
    'dashboard' => _DashboardContent(
      repository: ref.watch(adminRepositoryProvider),
    ),
    'roles' => _ListContent(
      title: 'Active and archived job roles',
      future: ref.watch(adminRepositoryProvider).roles(),
    ),
    'rule-versions' => _ListContent(
      title: 'Draft and published rule versions',
      future: ref.watch(adminRepositoryProvider).ruleVersions(),
    ),
    'publication' => const _PublicationContent(),
    'role-requests' => _RoleRequestsContent(
      repository: ref.watch(adminRepositoryProvider),
    ),
    'audit-logs' => _ListContent(
      title: 'Redacted administrator audit events',
      future: ref.watch(adminRepositoryProvider).auditLogs(),
    ),
    'account' => const _AccountContent(),
    'settings' => const _SettingsContent(),
    _ => const Text('Unknown administrator section.'),
  };
}

class _DashboardContent extends StatelessWidget {
  const _DashboardContent({required this.repository});

  final dynamic repository;

  @override
  Widget build(BuildContext context) => FutureBuilder<Map<String, dynamic>>(
    future: repository.dashboard(),
    builder: (context, snapshot) => snapshot.hasError
        ? Text('Dashboard unavailable: ${snapshot.error}')
        : snapshot.hasData
        ? Wrap(
            spacing: 12,
            runSpacing: 12,
            children: [
              _metric('Role requests', snapshot.data!['roleRequests']),
              _metric('Roles', snapshot.data!['roles']),
              _metric('Aggregate events', snapshot.data!['aggregateEvents']),
            ],
          )
        : const CircularProgressIndicator(),
  );

  Widget _metric(String label, dynamic value) => Card(
    child: Padding(
      padding: const EdgeInsets.all(20),
      child: Text('$label\n$value'),
    ),
  );
}

class _ListContent extends StatelessWidget {
  const _ListContent({required this.title, required this.future});

  final String title;
  final Future<List<Map<String, dynamic>>> future;

  @override
  Widget build(BuildContext context) =>
      FutureBuilder<List<Map<String, dynamic>>>(
        future: future,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text('$title unavailable: ${snapshot.error}');
          }
          if (!snapshot.hasData) return const CircularProgressIndicator();
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title),
              ...snapshot.data!.map(
                (item) => Card(
                  child: ListTile(
                    title: Text(item.values.take(2).join(' · ')),
                    subtitle: Text(item.toString()),
                  ),
                ),
              ),
            ],
          );
        },
      );
}

class _PublicationContent extends ConsumerStatefulWidget {
  const _PublicationContent();

  @override
  ConsumerState<_PublicationContent> createState() =>
      _PublicationContentState();
}

class _PublicationContentState extends ConsumerState<_PublicationContent> {
  final id = TextEditingController();
  String? message;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      TextField(
        controller: id,
        decoration: const InputDecoration(labelText: 'Draft/version ID'),
      ),
      const SizedBox(height: 12),
      Wrap(
        spacing: 8,
        children: [
          FilledButton(
            onPressed: () => _run(
              () => ref.read(adminRepositoryProvider).validateDraft(id.text),
            ),
            child: const Text('Validate'),
          ),
          FilledButton(
            onPressed: () =>
                _run(() => ref.read(adminRepositoryProvider).publish(id.text)),
            child: const Text('Publish immutable snapshot'),
          ),
          OutlinedButton(
            onPressed: () =>
                _run(() => ref.read(adminRepositoryProvider).rollback(id.text)),
            child: const Text('Rollback by republishing'),
          ),
        ],
      ),
      if (message != null)
        Padding(padding: const EdgeInsets.only(top: 12), child: Text(message!)),
    ],
  );

  Future<void> _run(Future<Map<String, dynamic>> Function() action) async {
    try {
      final result = await action();
      setState(() => message = result.toString());
    } catch (error) {
      setState(() => message = error.toString());
    }
  }
}

class _RoleRequestsContent extends StatelessWidget {
  const _RoleRequestsContent({required this.repository});

  final dynamic repository;

  @override
  Widget build(BuildContext context) =>
      FutureBuilder<List<Map<String, dynamic>>>(
        future: repository.roleRequests(),
        builder: (context, snapshot) => !snapshot.hasData
            ? snapshot.hasError
                  ? Text('Role requests unavailable: ${snapshot.error}')
                  : const CircularProgressIndicator()
            : Column(
                children: snapshot.data!
                    .map(
                      (item) => Card(
                        child: ListTile(
                          title: Text(
                            item['role_title']?.toString() ?? 'Untitled',
                          ),
                          subtitle: Text(item.toString()),
                        ),
                      ),
                    )
                    .toList(),
              ),
      );
}

class _AccountContent extends ConsumerStatefulWidget {
  const _AccountContent();

  @override
  ConsumerState<_AccountContent> createState() => _AccountContentState();
}

class _AccountContentState extends ConsumerState<_AccountContent> {
  final current = TextEditingController();
  final username = TextEditingController();
  final password = TextEditingController();
  String? message;

  @override
  Widget build(BuildContext context) => Column(
    children: [
      TextField(
        controller: current,
        obscureText: true,
        decoration: const InputDecoration(labelText: 'Current password'),
      ),
      const SizedBox(height: 12),
      TextField(
        controller: username,
        decoration: const InputDecoration(labelText: 'New username (optional)'),
      ),
      const SizedBox(height: 12),
      TextField(
        controller: password,
        obscureText: true,
        decoration: const InputDecoration(
          labelText: 'New password (12+ characters, optional)',
        ),
      ),
      const SizedBox(height: 12),
      FilledButton(
        onPressed: _submit,
        child: const Text('Change credentials and sign out all sessions'),
      ),
      if (message != null) Text(message!),
    ],
  );

  Future<void> _submit() async {
    await ref
        .read(adminSessionViewModelProvider.notifier)
        .changeCredentials(
          currentPassword: current.text,
          newUsername: username.text,
          newPassword: password.text,
        );
    if (mounted) {
      setState(() => message = 'All sessions were revoked. Sign in again.');
    }
  }
}

class _SettingsContent extends ConsumerStatefulWidget {
  const _SettingsContent();

  @override
  ConsumerState<_SettingsContent> createState() => _SettingsContentState();
}

class _SettingsContentState extends ConsumerState<_SettingsContent> {
  final donation = TextEditingController();
  bool ads = false;
  String? message;

  @override
  Widget build(BuildContext context) => Column(
    children: [
      TextField(
        controller: donation,
        decoration: const InputDecoration(labelText: 'Optional donation URL'),
      ),
      SwitchListTile(
        title: const Text('Ads enabled outside scan/results'),
        value: ads,
        onChanged: (value) => setState(() => ads = value),
      ),
      FilledButton(
        onPressed: () async {
          await ref.read(adminRepositoryProvider).updateSettings({
            'donationUrl': donation.text,
            'adsEnabled': ads,
          });
          setState(() => message = 'Settings saved.');
        },
        child: const Text('Save settings'),
      ),
      if (message != null) Text(message!),
    ],
  );
}

int _index(String section) {
  final index = _routes.indexWhere((route) => route.endsWith(section));
  return index < 0 ? 0 : index;
}

String _title(String section) => section == 'rule-versions'
    ? 'Rule versions'
    : '${section[0].toUpperCase()}${section.substring(1).replaceAll('-', ' ')}';
const _routes = [
  '/admin/dashboard',
  '/admin/roles',
  '/admin/rule-versions',
  '/admin/publication',
  '/admin/role-requests',
  '/admin/audit-logs',
  '/admin/account',
  '/admin/settings',
];

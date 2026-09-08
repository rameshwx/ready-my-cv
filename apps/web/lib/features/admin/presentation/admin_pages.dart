import 'dart:math' as math;

import 'package:core_models/core_models.dart';
import 'package:design_system/design_system.dart';
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
      return const _AdminLoading(
        message: 'Redirecting to required account setup…',
      );
    }
    return switch (state.status) {
      AdminSessionStatus.unknown || AdminSessionStatus.signingIn =>
        const _AdminLoading(message: 'Checking administrator session…'),
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

class _AdminLoading extends StatelessWidget {
  const _AdminLoading({required this.message});

  final String message;

  @override
  Widget build(BuildContext context) => Scaffold(
    body: Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const CircularProgressIndicator(),
          const SizedBox(height: 16),
          Text(message),
        ],
      ),
    ),
  );
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
  void dispose() {
    username.dispose();
    password.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    body: SafeArea(
      child: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 440),
            child: Card(
              child: Padding(
                padding: const EdgeInsets.all(28),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Center(child: BrandMark()),
                    const SizedBox(height: 28),
                    Text(
                      'Administrator sign in',
                      style: Theme.of(context).textTheme.headlineSmall,
                    ),
                    const SizedBox(height: 6),
                    Text(
                      'Manage published role rules and aggregate operations.',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                    const SizedBox(height: 22),
                    TextField(
                      controller: username,
                      textInputAction: TextInputAction.next,
                      decoration: const InputDecoration(
                        labelText: 'Username',
                        prefixIcon: Icon(Icons.person_outline),
                      ),
                    ),
                    const SizedBox(height: 14),
                    TextField(
                      controller: password,
                      obscureText: true,
                      onSubmitted: (_) => _signIn(),
                      decoration: const InputDecoration(
                        labelText: 'Password',
                        prefixIcon: Icon(Icons.lock_outline),
                      ),
                    ),
                    if (widget.message != null) ...[
                      const SizedBox(height: 14),
                      _AdminMessage(message: widget.message!, error: true),
                    ],
                    const SizedBox(height: 20),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton.icon(
                        onPressed: _signIn,
                        icon: const Icon(Icons.login),
                        label: const Text('Sign in'),
                      ),
                    ),
                    const SizedBox(height: 18),
                    const PrivacyBanner(
                      child: Text(
                        'Administrator access is session-based. Visitor CV data and analysis jobs are not exposed in this portal.',
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  Future<void> _signIn() async => ref
      .read(adminSessionViewModelProvider.notifier)
      .signIn(username.text, password.text);
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
  Widget build(BuildContext context, WidgetRef ref) {
    final wide = MediaQuery.sizeOf(context).width >= 960;
    final navigation = _AdminNavigation(
      section: section,
      forcePasswordChange: forcePasswordChange,
    );
    return Scaffold(
      backgroundColor: ReadyMyCvColors.surface,
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(72),
        child: _AdminTopBar(wide: wide),
      ),
      drawer: wide ? null : Drawer(child: SafeArea(child: navigation)),
      body: Row(
        children: [
          if (wide) navigation,
          Expanded(
            child: _AdminMain(
              section: section,
              forcePasswordChange: forcePasswordChange,
            ),
          ),
        ],
      ),
    );
  }
}

class _AdminTopBar extends ConsumerWidget {
  const _AdminTopBar({required this.wide});

  final bool wide;

  @override
  Widget build(BuildContext context, WidgetRef ref) => Container(
    color: Colors.white,
    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
    child: Row(
      children: [
        if (!wide)
          Builder(
            builder: (context) => IconButton(
              tooltip: 'Open administrator navigation',
              onPressed: () => Scaffold.of(context).openDrawer(),
              icon: const Icon(Icons.menu),
            ),
          ),
        if (!wide) const SizedBox(width: 4),
        const BrandMark(compact: true),
        if (wide)
          const Padding(
            padding: EdgeInsets.only(left: 8),
            child: Text(
              'admin',
              style: TextStyle(
                color: ReadyMyCvColors.muted,
                fontSize: 17,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        const SizedBox(width: 18),
        if (wide)
          const StatusBadge(
            label: 'Administrator console',
            color: ReadyMyCvColors.green,
            backgroundColor: ReadyMyCvColors.greenSoft,
          ),
        const Spacer(),
        if (wide) ...[
          TextButton.icon(
            onPressed: () => context.go('/'),
            icon: const Icon(Icons.open_in_new, size: 17),
            label: const Text('Public site'),
          ),
          const SizedBox(width: 8),
          OutlinedButton.icon(
            onPressed: () =>
                ref.read(adminSessionViewModelProvider.notifier).signOut(),
            icon: const Icon(Icons.logout, size: 17),
            label: const Text('Sign out'),
          ),
        ] else
          IconButton(
            tooltip: 'Sign out',
            onPressed: () =>
                ref.read(adminSessionViewModelProvider.notifier).signOut(),
            icon: const Icon(Icons.logout),
          ),
      ],
    ),
  );
}

class _AdminNavigation extends StatelessWidget {
  const _AdminNavigation({
    required this.section,
    required this.forcePasswordChange,
  });

  final String section;
  final bool forcePasswordChange;

  @override
  Widget build(BuildContext context) => Container(
    width: 248,
    color: Colors.white,
    padding: const EdgeInsets.fromLTRB(16, 22, 16, 18),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.fromLTRB(14, 0, 14, 24),
          child: BrandMark(compact: true),
        ),
        const Padding(
          padding: EdgeInsets.fromLTRB(14, 0, 14, 10),
          child: Text(
            'MAIN',
            style: TextStyle(
              color: Color(0xff8aa0bd),
              fontSize: 12,
              fontWeight: FontWeight.w800,
              letterSpacing: 1,
            ),
          ),
        ),
        _navItem(context, 'dashboard', 'Dashboard', Icons.grid_view_outlined),
        _navItem(context, 'roles', 'Roles', Icons.work_outline),
        _navItem(
          context,
          'rule-versions',
          'Rule versions',
          Icons.rule_outlined,
        ),
        _navItem(context, 'publication', 'Publication', Icons.publish_outlined),
        _navItem(
          context,
          'role-requests',
          'Role requests',
          Icons.inbox_outlined,
        ),
        const Padding(
          padding: EdgeInsets.fromLTRB(14, 24, 14, 10),
          child: Text(
            'SYSTEM',
            style: TextStyle(
              color: Color(0xff8aa0bd),
              fontSize: 12,
              fontWeight: FontWeight.w800,
              letterSpacing: 1,
            ),
          ),
        ),
        _navItem(context, 'audit-logs', 'Audit logs', Icons.history),
        _navItem(context, 'account', 'Account', Icons.manage_accounts_outlined),
        _navItem(context, 'settings', 'Settings', Icons.settings_outlined),
        const Spacer(),
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: ReadyMyCvColors.surface,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            children: [
              const Icon(Icons.circle, color: ReadyMyCvColors.green, size: 8),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  forcePasswordChange
                      ? 'Password change required'
                      : 'Admin session active',
                  style: Theme.of(context).textTheme.bodySmall,
                ),
              ),
            ],
          ),
        ),
      ],
    ),
  );

  Widget _navItem(
    BuildContext context,
    String name,
    String label,
    IconData icon,
  ) {
    final selected = section == name;
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Material(
        color: selected ? ReadyMyCvColors.blueSoft : Colors.transparent,
        borderRadius: BorderRadius.circular(11),
        child: InkWell(
          borderRadius: BorderRadius.circular(11),
          onTap: () {
            if (Navigator.of(context).canPop()) Navigator.of(context).pop();
            context.go('/admin/$name');
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 13, vertical: 13),
            child: Row(
              children: [
                Icon(
                  icon,
                  color: selected
                      ? ReadyMyCvColors.blue
                      : ReadyMyCvColors.slate,
                  size: 20,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    label,
                    style: TextStyle(
                      color: selected
                          ? ReadyMyCvColors.blue
                          : ReadyMyCvColors.slate,
                      fontWeight: selected ? FontWeight.w700 : FontWeight.w500,
                    ),
                  ),
                ),
                if (name == 'account' && forcePasswordChange)
                  const Icon(
                    Icons.priority_high,
                    color: ReadyMyCvColors.amber,
                    size: 16,
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _AdminMain extends StatelessWidget {
  const _AdminMain({required this.section, required this.forcePasswordChange});

  final String section;
  final bool forcePasswordChange;

  @override
  Widget build(BuildContext context) => ListView(
    padding: const EdgeInsets.fromLTRB(24, 28, 24, 46),
    children: [
      if (forcePasswordChange) ...[
        const _AdminMessage(
          message:
              'Change the initial administrator password before continuing.',
          error: true,
        ),
        const SizedBox(height: 18),
      ],
      ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 1180),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              _title(section),
              style: Theme.of(context).textTheme.displaySmall,
            ),
            const SizedBox(height: 7),
            Text(
              _description(section),
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const SizedBox(height: 25),
            _SectionContent(section: section),
          ],
        ),
      ),
    ],
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
      kind: _ListKind.roles,
      future: ref.watch(adminRepositoryProvider).roles(),
    ),
    'rule-versions' => _ListContent(
      title: 'Draft and published rule versions',
      kind: _ListKind.versions,
      future: ref.watch(adminRepositoryProvider).ruleVersions(),
    ),
    'publication' => const _PublicationContent(),
    'role-requests' => _RoleRequestsContent(
      repository: ref.watch(adminRepositoryProvider),
    ),
    'audit-logs' => _ListContent(
      title: 'Redacted administrator audit events',
      kind: _ListKind.audit,
      future: ref.watch(adminRepositoryProvider).auditLogs(),
    ),
    'account' => const _AccountContent(),
    'settings' => const _SettingsContent(),
    _ => const Text('Unknown administrator section.'),
  };
}

class _DashboardContent extends StatefulWidget {
  const _DashboardContent({required this.repository});

  final dynamic repository;

  @override
  State<_DashboardContent> createState() => _DashboardContentState();
}

class _DashboardContentState extends State<_DashboardContent> {
  late Future<Map<String, dynamic>> future;

  @override
  void initState() {
    super.initState();
    future = widget.repository.dashboard();
  }

  @override
  Widget build(BuildContext context) => FutureBuilder<Map<String, dynamic>>(
    future: future,
    builder: (context, snapshot) {
      if (snapshot.hasError) {
        return _AdminMessage(
          message: 'Dashboard unavailable: ${snapshot.error}',
          error: true,
        );
      }
      if (!snapshot.hasData) {
        return const Center(child: CircularProgressIndicator());
      }
      final data = snapshot.data!;
      final queue = _asMap(data['queue']);
      final failures = _asMap(data['failures']);
      final roles = _asMap(data['roles']);
      final requests = _asMap(data['roleRequests']);
      final events = _asMap(data['aggregateEvents']);
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Align(
            alignment: Alignment.centerRight,
            child: OutlinedButton.icon(
              onPressed: () =>
                  setState(() => future = widget.repository.dashboard()),
              icon: const Icon(Icons.refresh, size: 17),
              label: const Text('Refresh'),
            ),
          ),
          const SizedBox(height: 14),
          LayoutBuilder(
            builder: (context, constraints) => GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: constraints.maxWidth >= 1000
                  ? 5
                  : constraints.maxWidth >= 620
                  ? 2
                  : 1,
              crossAxisSpacing: 14,
              mainAxisSpacing: 14,
              childAspectRatio: constraints.maxWidth >= 620 ? 1.35 : 2.2,
              children: [
                MetricCard(
                  label: 'Role requests',
                  value: '${requests['total'] ?? 0}',
                  detail: '${requests['new'] ?? 0} new',
                  icon: Icons.person_add_alt_1_outlined,
                  accent: ReadyMyCvColors.blue,
                ),
                MetricCard(
                  label: 'Roles',
                  value: '${roles['total'] ?? 0}',
                  detail: 'Published catalog records',
                  icon: Icons.work_outline,
                  accent: ReadyMyCvColors.blue,
                ),
                MetricCard(
                  label: 'Aggregate events',
                  value: '${events['total'] ?? 0}',
                  detail: 'Privacy-safe counters',
                  icon: Icons.bar_chart_outlined,
                  accent: ReadyMyCvColors.purple,
                ),
                MetricCard(
                  label: 'Analysis queue',
                  value: '${queue['queued'] ?? 0}',
                  detail:
                      'Processing ${queue['processing'] ?? 0} • waiting ${queue['awaiting_email'] ?? 0}',
                  icon: Icons.schedule_outlined,
                  accent: ReadyMyCvColors.green,
                ),
                MetricCard(
                  label: 'Analysis failures',
                  value: '${(failures['processing_failures'] ?? 0) as Object}',
                  detail: 'Email failures ${failures['email_failures'] ?? 0}',
                  icon: Icons.check_circle_outline,
                  accent: ReadyMyCvColors.green,
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SectionHeading(
                    title: 'Active system stream payload',
                    subtitle: 'Aggregate operational telemetry only.',
                  ),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 10,
                    runSpacing: 10,
                    children: [
                      _DataChip(
                        label: 'Role requests',
                        value: _compactMap(requests),
                      ),
                      _DataChip(label: 'Roles', value: _compactMap(roles)),
                      _DataChip(
                        label: 'Aggregate events',
                        value: _compactMap(events),
                      ),
                      _DataChip(
                        label: 'Analysis queue',
                        value: _compactMap(queue),
                      ),
                      _DataChip(
                        label: 'Failures',
                        value: _compactMap(failures),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
          LayoutBuilder(
            builder: (context, constraints) => constraints.maxWidth >= 820
                ? Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(child: _QueueHealth(queue: queue)),
                      const SizedBox(width: 16),
                      Expanded(child: _AdminDashboardNotes()),
                    ],
                  )
                : Column(
                    children: [
                      _QueueHealth(queue: queue),
                      const SizedBox(height: 16),
                      _AdminDashboardNotes(),
                    ],
                  ),
          ),
        ],
      );
    },
  );
}

class _DataChip extends StatelessWidget {
  const _DataChip({required this.label, required this.value});

  final String label;
  final String value;

  @override
  Widget build(BuildContext context) => Container(
    width: 215,
    padding: const EdgeInsets.all(13),
    decoration: BoxDecoration(
      color: ReadyMyCvColors.surface,
      borderRadius: BorderRadius.circular(11),
      border: Border.all(color: ReadyMyCvColors.border),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: Theme.of(context).textTheme.bodySmall),
        const SizedBox(height: 5),
        Text(
          value,
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
          style: const TextStyle(
            fontFamily: 'monospace',
            fontWeight: FontWeight.w700,
          ),
        ),
      ],
    ),
  );
}

class _QueueHealth extends StatelessWidget {
  const _QueueHealth({required this.queue});

  final Map<String, dynamic> queue;

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Queue pipeline health',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 4),
          Text(
            'Aggregate worker state',
            style: Theme.of(context).textTheme.bodySmall,
          ),
          const SizedBox(height: 20),
          _HealthRow(
            label: 'Queued',
            value: '${queue['queued'] ?? 0}',
            progress: _ratio(queue['queued']),
            color: ReadyMyCvColors.blue,
          ),
          _HealthRow(
            label: 'Processing',
            value: '${queue['processing'] ?? 0}',
            progress: _ratio(queue['processing']),
            color: ReadyMyCvColors.green,
          ),
          _HealthRow(
            label: 'Awaiting email',
            value: '${queue['awaiting_email'] ?? 0}',
            progress: _ratio(queue['awaiting_email']),
            color: ReadyMyCvColors.amber,
          ),
          const Divider(height: 26),
          _KeyValue(
            label: 'Oldest queued job',
            value: '${queue['oldest_queued_seconds'] ?? 0}s',
          ),
          _KeyValue(
            label: 'Active processing',
            value: '${queue['active_processing_seconds'] ?? 0}s',
          ),
        ],
      ),
    ),
  );
}

class _HealthRow extends StatelessWidget {
  const _HealthRow({
    required this.label,
    required this.value,
    required this.progress,
    required this.color,
  });

  final String label;
  final String value;
  final double progress;
  final Color color;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(bottom: 14),
    child: Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(label),
            Text(
              value,
              style: TextStyle(color: color, fontWeight: FontWeight.w800),
            ),
          ],
        ),
        const SizedBox(height: 7),
        ProgressTrack(value: progress, color: color),
      ],
    ),
  );
}

class _KeyValue extends StatelessWidget {
  const _KeyValue({required this.label, required this.value});

  final String label;
  final String value;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.only(bottom: 10),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(label, style: Theme.of(context).textTheme.bodySmall),
        Text(value, style: const TextStyle(fontWeight: FontWeight.w800)),
      ],
    ),
  );
}

class _AdminDashboardNotes extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Card(
    color: ReadyMyCvColors.navy,
    child: Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.info_outline, color: Color(0xff93c5fd)),
          const SizedBox(height: 14),
          const Text(
            'Operational boundaries',
            style: TextStyle(
              color: Colors.white,
              fontSize: 18,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'The dashboard exposes aggregate counters only. Visitor jobs, CV text, filenames, and report content are intentionally unavailable.',
            style: TextStyle(color: Color(0xffcbd5e1), height: 1.5),
          ),
          const SizedBox(height: 16),
          TextButton(
            onPressed: () => context.go('/admin/rule-versions'),
            child: const Text('Review rule versions →'),
          ),
        ],
      ),
    ),
  );
}

enum _ListKind { roles, versions, audit }

class _ListContent extends StatefulWidget {
  const _ListContent({
    required this.title,
    required this.kind,
    required this.future,
  });

  final String title;
  final _ListKind kind;
  final Future<List<Map<String, dynamic>>> future;

  @override
  State<_ListContent> createState() => _ListContentState();
}

class _ListContentState extends State<_ListContent> {
  String query = '';
  bool activeOnly = true;

  @override
  Widget build(BuildContext context) =>
      FutureBuilder<List<Map<String, dynamic>>>(
        future: widget.future,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return _AdminMessage(
              message: '${widget.title} unavailable: ${snapshot.error}',
              error: true,
            );
          }
          if (!snapshot.hasData) {
            return const Center(child: CircularProgressIndicator());
          }
          final items = snapshot.data!.where(_matches).toList();
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(14),
                  child: Row(
                    children: [
                      Expanded(
                        child: TextField(
                          onChanged: (value) => setState(() => query = value),
                          decoration: const InputDecoration(
                            isDense: true,
                            hintText: 'Search by title, ID, or slug',
                            prefixIcon: Icon(Icons.search),
                          ),
                        ),
                      ),
                      if (widget.kind == _ListKind.roles) ...[
                        const SizedBox(width: 10),
                        FilterChip(
                          label: const Text('Active only'),
                          selected: activeOnly,
                          onSelected: (value) =>
                              setState(() => activeOnly = value),
                        ),
                      ],
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 14),
              if (items.isEmpty)
                const _EmptyAdmin(message: 'No records match this filter.')
              else
                ...items.map(
                  (item) => Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: _AdminListCard(item: item, kind: widget.kind),
                  ),
                ),
              const SizedBox(height: 8),
              Text(
                'Showing ${items.length} of ${snapshot.data!.length} records',
                style: Theme.of(context).textTheme.bodySmall,
              ),
            ],
          );
        },
      );

  bool _matches(Map<String, dynamic> item) {
    final searchable = item.values.join(' ').toLowerCase();
    final queryMatch =
        query.trim().isEmpty || searchable.contains(query.trim().toLowerCase());
    final activeMatch =
        widget.kind != _ListKind.roles || !activeOnly || item['active'] == true;
    return queryMatch && activeMatch;
  }
}

class _AdminListCard extends StatelessWidget {
  const _AdminListCard({required this.item, required this.kind});

  final Map<String, dynamic> item;
  final _ListKind kind;

  @override
  Widget build(BuildContext context) {
    if (kind == _ListKind.roles) {
      final active = item['active'] == true;
      return Card(
        child: Padding(
          padding: const EdgeInsets.all(18),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              CircleAvatar(
                radius: 21,
                backgroundColor: ReadyMyCvColors.blueSoft,
                foregroundColor: ReadyMyCvColors.blue,
                child: Text(
                  '${item['id'] ?? '—'}',
                  style: const TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Wrap(
                      spacing: 8,
                      runSpacing: 6,
                      children: [
                        Text(
                          '${item['title'] ?? 'Untitled role'}',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        StatusBadge(
                          label: active ? 'Active' : 'Archived',
                          color: active
                              ? ReadyMyCvColors.green
                              : ReadyMyCvColors.muted,
                          backgroundColor: active
                              ? ReadyMyCvColors.greenSoft
                              : ReadyMyCvColors.surface,
                        ),
                      ],
                    ),
                    const SizedBox(height: 5),
                    Text(
                      '${item['description'] ?? 'No description provided.'}',
                    ),
                    const SizedBox(height: 7),
                    Text(
                      'slug: ${item['slug'] ?? '—'}',
                      style: const TextStyle(
                        fontFamily: 'monospace',
                        color: ReadyMyCvColors.muted,
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    }
    if (kind == _ListKind.versions) {
      return Card(
        child: ListTile(
          leading: const CircleAvatar(
            backgroundColor: ReadyMyCvColors.purpleSoft,
            foregroundColor: ReadyMyCvColors.purple,
            child: Icon(Icons.rule_outlined),
          ),
          title: Text('${item['title'] ?? item['slug'] ?? 'Rule version'}'),
          subtitle: Text(
            'Seniority: ${item['seniority'] ?? '—'} • Version ${item['version'] ?? '—'}',
          ),
          trailing: StatusBadge(
            label: '${item['status'] ?? 'unknown'}',
            color: ReadyMyCvColors.blue,
            backgroundColor: ReadyMyCvColors.blueSoft,
          ),
        ),
      );
    }
    return Card(
      child: ListTile(
        leading: const CircleAvatar(
          backgroundColor: ReadyMyCvColors.blueSoft,
          foregroundColor: ReadyMyCvColors.blue,
          child: Icon(Icons.history),
        ),
        title: Text('${item['action'] ?? 'Audit event'}'),
        subtitle: Text(
          '${item['created_at'] ?? 'Unknown time'}\n${item['summary'] ?? 'Redacted summary'}',
        ),
      ),
    );
  }
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
  bool busy = false;

  @override
  void dispose() {
    id.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Publish an immutable catalog snapshot',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 6),
          Text(
            'Validate, publish, or rollback using the existing administrator operations.',
            style: Theme.of(context).textTheme.bodyMedium,
          ),
          const SizedBox(height: 18),
          TextField(
            controller: id,
            decoration: const InputDecoration(labelText: 'Draft or version ID'),
          ),
          const SizedBox(height: 16),
          Wrap(
            spacing: 10,
            runSpacing: 10,
            children: [
              FilledButton(
                onPressed: busy
                    ? null
                    : () => _run(
                        () => ref
                            .read(adminRepositoryProvider)
                            .validateDraft(id.text),
                      ),
                child: const Text('Validate'),
              ),
              FilledButton(
                onPressed: busy
                    ? null
                    : () => _run(
                        () =>
                            ref.read(adminRepositoryProvider).publish(id.text),
                      ),
                child: const Text('Publish snapshot'),
              ),
              OutlinedButton(
                onPressed: busy
                    ? null
                    : () => _run(
                        () =>
                            ref.read(adminRepositoryProvider).rollback(id.text),
                      ),
                child: const Text('Rollback'),
              ),
            ],
          ),
          if (message != null)
            Padding(
              padding: const EdgeInsets.only(top: 16),
              child: _AdminMessage(message: message!),
            ),
        ],
      ),
    ),
  );

  Future<void> _run(Future<Map<String, dynamic>> Function() action) async {
    setState(() => busy = true);
    try {
      final result = await action();
      if (mounted) {
        setState(() {
          busy = false;
          message = result.toString();
        });
      }
    } catch (error) {
      if (mounted) {
        setState(() {
          busy = false;
          message = error.toString();
        });
      }
    }
  }
}

class _RoleRequestsContent extends StatefulWidget {
  const _RoleRequestsContent({required this.repository});

  final dynamic repository;

  @override
  State<_RoleRequestsContent> createState() => _RoleRequestsContentState();
}

class _RoleRequestsContentState extends State<_RoleRequestsContent> {
  String query = '';

  @override
  Widget build(
    BuildContext context,
  ) => FutureBuilder<List<Map<String, dynamic>>>(
    future: widget.repository.roleRequests(),
    builder: (context, snapshot) {
      if (snapshot.hasError) {
        return _AdminMessage(
          message: 'Role requests unavailable: ${snapshot.error}',
          error: true,
        );
      }
      if (!snapshot.hasData) {
        return const Center(child: CircularProgressIndicator());
      }
      final items = snapshot.data!
          .where(
            (item) =>
                query.trim().isEmpty ||
                item.values
                    .join(' ')
                    .toLowerCase()
                    .contains(query.trim().toLowerCase()),
          )
          .toList();
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Card(
            child: Padding(
              padding: const EdgeInsets.all(14),
              child: TextField(
                onChanged: (value) => setState(() => query = value),
                decoration: const InputDecoration(
                  isDense: true,
                  hintText: 'Search role requests',
                  prefixIcon: Icon(Icons.search),
                ),
              ),
            ),
          ),
          const SizedBox(height: 14),
          if (items.isEmpty)
            const _EmptyAdmin(message: 'No role requests match this filter.')
          else
            ...items.map(
              (item) => Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: Card(
                  child: ListTile(
                    leading: const CircleAvatar(
                      backgroundColor: ReadyMyCvColors.amberSoft,
                      foregroundColor: ReadyMyCvColors.amber,
                      child: Icon(Icons.inbox_outlined),
                    ),
                    title: Text('${item['role_title'] ?? 'Untitled role'}'),
                    subtitle: Text(
                      '${item['seniority'] ?? 'Seniority not provided'} • ${item['industry'] ?? 'Industry not provided'}\n${item['created_at'] ?? 'Unknown time'}',
                    ),
                    trailing: StatusBadge(
                      label: '${item['status'] ?? 'new'}',
                      color: ReadyMyCvColors.blue,
                      backgroundColor: ReadyMyCvColors.blueSoft,
                    ),
                  ),
                ),
              ),
            ),
          Text(
            'Showing ${items.length} of ${snapshot.data!.length} requests',
            style: Theme.of(context).textTheme.bodySmall,
          ),
        ],
      );
    },
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
  bool busy = false;

  @override
  void dispose() {
    current.dispose();
    username.dispose();
    password.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Administrator credentials',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 6),
          Text(
            'Changing credentials revokes all active sessions.',
            style: Theme.of(context).textTheme.bodyMedium,
          ),
          const SizedBox(height: 18),
          TextField(
            controller: current,
            obscureText: true,
            decoration: const InputDecoration(labelText: 'Current password'),
          ),
          const SizedBox(height: 14),
          TextField(
            controller: username,
            decoration: const InputDecoration(
              labelText: 'New username (optional)',
            ),
          ),
          const SizedBox(height: 14),
          TextField(
            controller: password,
            obscureText: true,
            decoration: const InputDecoration(
              labelText: 'New password (12+ characters, optional)',
            ),
          ),
          const SizedBox(height: 18),
          FilledButton.icon(
            onPressed: busy ? null : _submit,
            icon: const Icon(Icons.save_outlined),
            label: const Text('Change credentials and sign out all sessions'),
          ),
          if (message != null)
            Padding(
              padding: const EdgeInsets.only(top: 14),
              child: _AdminMessage(message: message!),
            ),
        ],
      ),
    ),
  );

  Future<void> _submit() async {
    setState(() => busy = true);
    try {
      await ref
          .read(adminSessionViewModelProvider.notifier)
          .changeCredentials(
            currentPassword: current.text,
            newUsername: username.text,
            newPassword: password.text,
          );
      if (mounted) {
        setState(() {
          busy = false;
          message = 'All sessions were revoked. Sign in again.';
        });
      }
    } catch (error) {
      if (mounted) {
        setState(() {
          busy = false;
          message = error.toString();
        });
      }
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
  bool busy = false;

  @override
  void dispose() {
    donation.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Site settings', style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 6),
          Text(
            'Optional public-site settings. Analysis and result privacy behavior is not controlled here.',
            style: Theme.of(context).textTheme.bodyMedium,
          ),
          const SizedBox(height: 18),
          TextField(
            controller: donation,
            decoration: const InputDecoration(
              labelText: 'Optional donation URL',
            ),
          ),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('Ads enabled outside scan/results'),
            value: ads,
            onChanged: busy ? null : (value) => setState(() => ads = value),
          ),
          const SizedBox(height: 10),
          FilledButton.icon(
            onPressed: busy ? null : _save,
            icon: const Icon(Icons.save_outlined),
            label: const Text('Save settings'),
          ),
          if (message != null)
            Padding(
              padding: const EdgeInsets.only(top: 14),
              child: _AdminMessage(message: message!),
            ),
        ],
      ),
    ),
  );

  Future<void> _save() async {
    setState(() => busy = true);
    try {
      await ref.read(adminRepositoryProvider).updateSettings({
        'donationUrl': donation.text,
        'adsEnabled': ads,
      });
      if (mounted) {
        setState(() {
          busy = false;
          message = 'Settings saved.';
        });
      }
    } catch (error) {
      if (mounted) {
        setState(() {
          busy = false;
          message = error.toString();
        });
      }
    }
  }
}

class _AdminMessage extends StatelessWidget {
  const _AdminMessage({required this.message, this.error = false});

  final String message;
  final bool error;

  @override
  Widget build(BuildContext context) => Container(
    width: double.infinity,
    padding: const EdgeInsets.all(14),
    decoration: BoxDecoration(
      color: error ? ReadyMyCvColors.redSoft : ReadyMyCvColors.greenSoft,
      borderRadius: BorderRadius.circular(12),
      border: Border.all(
        color: error ? const Color(0xfffecaca) : const Color(0xffbbf7d0),
      ),
    ),
    child: Text(
      message,
      style: TextStyle(
        color: error ? ReadyMyCvColors.red : ReadyMyCvColors.green,
        fontWeight: FontWeight.w600,
      ),
    ),
  );
}

class _EmptyAdmin extends StatelessWidget {
  const _EmptyAdmin({required this.message});

  final String message;

  @override
  Widget build(BuildContext context) => Container(
    width: double.infinity,
    padding: const EdgeInsets.all(22),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(14),
      border: Border.all(color: ReadyMyCvColors.border),
    ),
    child: Text(message),
  );
}

double _ratio(dynamic value) {
  final number = value is num ? value.toDouble() : 0;
  return number <= 0 ? 0 : math.min(number / 10, 1);
}

Map<String, dynamic> _asMap(dynamic value) =>
    value is Map ? Map<String, dynamic>.from(value) : const {};
String _compactMap(Map<String, dynamic> value) =>
    value.entries.map((entry) => '${entry.key}: ${entry.value}').join(' • ');

String _title(String section) => section == 'rule-versions'
    ? 'Rule versions'
    : '${section[0].toUpperCase()}${section.substring(1).replaceAll('-', ' ')}';
String _description(String section) => switch (section) {
  'dashboard' => 'Real-time status of role catalogs and aggregate processing.',
  'roles' => 'Published and archived job roles used by CV evaluation.',
  'rule-versions' =>
    'Draft and published rule snapshots for deterministic analysis.',
  'publication' => 'Validate and publish immutable catalog snapshots.',
  'role-requests' =>
    'Review incoming requests for roles not yet in the catalog.',
  'audit-logs' => 'Redacted administrator events and publication history.',
  'account' => 'Control administrator credentials and session access.',
  'settings' => 'Manage optional public-site settings.',
  _ => 'Administrator section',
};

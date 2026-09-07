import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'data/api_client.dart';
import 'data/pdf_parser.dart';
import 'domain/engine.dart';
import 'domain/models.dart';

final apiProvider = Provider((_) => ApiClient());
final catalogProvider = FutureProvider(
  (ref) => ref.read(apiProvider).catalog(),
);
final resultProvider = StateProvider<AnalysisResult?>((_) => null);
final sessionProvider = FutureProvider(
  (ref) => ref.read(apiProvider).session(),
);

void main() => runApp(const ProviderScope(child: ReadyMyCvApp()));

final router = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (_, __) => const LandingPage()),
    GoRoute(path: '/scan', builder: (_, __) => const ScanPage()),
    GoRoute(path: '/results', builder: (_, __) => const ResultsPage()),
    GoRoute(path: '/request-role', builder: (_, __) => const RequestRolePage()),
    GoRoute(
      path: '/privacy',
      builder: (_, __) => const InfoPage(
        title: 'Privacy',
        body:
            'Your PDF and extracted CV text stay in browser memory. They are never uploaded, stored, logged, fingerprinted, or shared.',
      ),
    ),
    GoRoute(
      path: '/terms',
      builder: (_, __) => const InfoPage(
        title: 'Terms & limitations',
        body:
            'This is deterministic guidance, not an employer ATS score, hiring decision, or guarantee. Never add experience you do not have.',
      ),
    ),
    for (final path in [
      '/admin',
      '/admin/dashboard',
      '/admin/roles',
      '/admin/rule-versions',
      '/admin/publication',
      '/admin/role-requests',
      '/admin/audit-logs',
      '/admin/account',
      '/admin/settings',
    ])
      GoRoute(path: path, builder: (_, __) => const AdminPage()),
  ],
);

class ReadyMyCvApp extends StatelessWidget {
  const ReadyMyCvApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp.router(
    debugShowCheckedModeBanner: false,
    title: 'Ready My CV',
    theme: ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xff1268d3),
        secondary: const Color(0xff16a36b),
      ),
      scaffoldBackgroundColor: const Color(0xfff6f9fd),
    ),
    routerConfig: router,
  );
}

class Shell extends StatelessWidget {
  const Shell({super.key, required this.child});
  final Widget child;
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(
      title: InkWell(
        onTap: () => context.go('/'),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Image.asset('assets/app_logo.png', height: 38),
            const SizedBox(width: 10),
            const Text(
              'Ready My CV',
              style: TextStyle(fontWeight: FontWeight.w800),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => context.go('/privacy'),
          child: const Text('Privacy'),
        ),
        TextButton(
          onPressed: () => context.go('/admin'),
          child: const Text('Admin'),
        ),
      ],
    ),
    body: child,
  );
}

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});
  @override
  Widget build(BuildContext context) => Shell(
    child: Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 900),
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Chip(label: Text('100% free • No account required')),
              const SizedBox(height: 22),
              Text(
                'Know how ready your CV is\nfor the role you want.',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  fontWeight: FontWeight.w900,
                  color: const Color(0xff12335c),
                ),
              ),
              const SizedBox(height: 16),
              const Text(
                'Private, evidence-based guidance that runs in your browser — not another mysterious ATS score.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 18),
              ),
              const SizedBox(height: 28),
              FilledButton.icon(
                onPressed: () => context.go('/scan'),
                icon: const Icon(Icons.document_scanner_outlined),
                label: const Padding(
                  padding: EdgeInsets.all(12),
                  child: Text('Check my CV'),
                ),
              ),
              const SizedBox(height: 32),
              const Wrap(
                spacing: 12,
                runSpacing: 12,
                children: [
                  _Feature(Icons.lock_outline, 'Private by design'),
                  _Feature(Icons.fact_check_outlined, 'Evidence, not keywords'),
                  _Feature(Icons.visibility_outlined, 'Fully explainable'),
                ],
              ),
            ],
          ),
        ),
      ),
    ),
  );
}

class _Feature extends StatelessWidget {
  const _Feature(this.icon, this.label);
  final IconData icon;
  final String label;
  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(18),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, color: const Color(0xff16a36b)),
          const SizedBox(width: 8),
          Text(label, style: const TextStyle(fontWeight: FontWeight.w700)),
        ],
      ),
    ),
  );
}

class ScanPage extends ConsumerStatefulWidget {
  const ScanPage({super.key});
  @override
  ConsumerState<ScanPage> createState() => _ScanPageState();
}

class _ScanPageState extends ConsumerState<ScanPage> {
  JobRole? role;
  bool busy = false;
  String? status;
  @override
  Widget build(BuildContext context) {
    final catalog = ref.watch(catalogProvider);
    return Shell(
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 700),
          child: ListView(
            padding: const EdgeInsets.all(24),
            children: [
              Text(
                'Check your CV',
                style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                  fontWeight: FontWeight.w800,
                ),
              ),
              const Text(
                'Select a role and a text-based PDF. Your CV never leaves this browser.',
              ),
              const SizedBox(height: 20),
              catalog.when(
                data: (c) => DropdownButtonFormField<JobRole>(
                  value: role,
                  decoration: const InputDecoration(
                    labelText: 'Target role',
                    border: OutlineInputBorder(),
                  ),
                  items: c.roles
                      .map(
                        (r) => DropdownMenuItem(value: r, child: Text(r.title)),
                      )
                      .toList(),
                  onChanged: busy ? null : (v) => setState(() => role = v),
                ),
                loading: () => const LinearProgressIndicator(),
                error: (_, __) => const Text('Catalog unavailable.'),
              ),
              const SizedBox(height: 20),
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(
                    children: [
                      const Icon(Icons.picture_as_pdf_outlined, size: 48),
                      const Text(
                        'Your CV is read privately in this browser. We do not upload, store, or save your CV data anywhere.',
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 14),
                      FilledButton.icon(
                        onPressed: busy || role == null ? null : _pick,
                        icon: const Icon(Icons.upload_file),
                        label: const Text('Select PDF'),
                      ),
                      const Text(
                        'PDF • 10 MB max • 25 pages • selectable text',
                        style: TextStyle(fontSize: 12),
                      ),
                    ],
                  ),
                ),
              ),
              if (busy) ...[
                const SizedBox(height: 16),
                const LinearProgressIndicator(),
              ],
              if (status != null)
                Padding(padding: const EdgeInsets.all(8), child: Text(status!)),
              TextButton(
                onPressed: () => context.go('/request-role'),
                child: const Text('Can’t find your role? Request it'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _pick() async {
    setState(() {
      busy = true;
      status = 'Selecting file…';
    });
    try {
      final picked = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: ['pdf'],
        withData: true,
      );
      if (picked == null) return;
      final file = picked.files.single;
      if (file.bytes == null || file.extension?.toLowerCase() != 'pdf')
        throw Exception('Please choose a PDF.');
      setState(() => status = 'Extracting text locally…');
      final parsed = await LocalPdfParser().parse(file.bytes!);
      setState(() => status = 'Analyzing and verifying…');
      final catalog = ref.read(catalogProvider).value!;
      ref.read(resultProvider.notifier).state = const ReadinessEngine().analyze(
        parsed.text,
        role!,
        catalog.version,
      );
      if (mounted) context.go('/results');
    } catch (e) {
      setState(() => status = e.toString().replaceFirst('Exception: ', ''));
    } finally {
      if (mounted) setState(() => busy = false);
    }
  }
}

class ResultsPage extends ConsumerWidget {
  const ResultsPage({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final r = ref.watch(resultProvider);
    if (r == null)
      return Shell(
        child: Center(
          child: TextButton(
            onPressed: () => context.go('/scan'),
            child: const Text('Start a private scan'),
          ),
        ),
      );
    return Shell(
      child: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 900),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    '${r.score.total} — ${r.score.band}',
                    style: Theme.of(context).textTheme.displaySmall?.copyWith(
                      fontWeight: FontWeight.w900,
                    ),
                  ),
                  Text(
                    '${r.role.title} • Catalog ${r.catalogVersion} • Verified',
                  ),
                  const SizedBox(height: 16),
                  const Card(
                    child: Padding(
                      padding: EdgeInsets.all(14),
                      child: Text(
                        'This is guidance, not an employer ATS score or a guarantee of an interview or job offer.',
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    'Evidence map',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  ...r.evidence.map(
                    (e) => Card(
                      child: ListTile(
                        leading: Icon(
                          e.classification == EvidenceClassification.strong
                              ? Icons.verified
                              : Icons.info_outline,
                        ),
                        title: Text(e.requirement.term),
                        subtitle: Text(
                          '${e.classification.name}: ${e.explanation}',
                        ),
                        trailing: Text('× ${e.multiplier}'),
                      ),
                    ),
                  ),
                  const SizedBox(height: 18),
                  Text(
                    'Truthful improvements',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  ...r.recommendations.map(
                    (x) => ListTile(
                      leading: const Icon(Icons.lightbulb_outline),
                      title: Text(x),
                    ),
                  ),
                  ExpansionTile(
                    title: const Text('How this result was produced'),
                    children: r.trajectory
                        .map((x) => ListTile(title: Text(x)))
                        .toList(),
                  ),
                  FilledButton.tonal(
                    onPressed: () {
                      ref.read(resultProvider.notifier).state = null;
                      context.go('/scan');
                    },
                    child: const Text('Analyze another CV'),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class InfoPage extends StatelessWidget {
  const InfoPage({super.key, required this.title, required this.body});
  final String title, body;
  @override
  Widget build(BuildContext context) => Shell(
    child: Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 700),
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(title, style: Theme.of(context).textTheme.headlineLarge),
              const SizedBox(height: 20),
              Text(body, style: const TextStyle(fontSize: 17, height: 1.6)),
            ],
          ),
        ),
      ),
    ),
  );
}

class RequestRolePage extends ConsumerStatefulWidget {
  const RequestRolePage({super.key});
  @override
  ConsumerState<RequestRolePage> createState() => _RequestRolePageState();
}

class _RequestRolePageState extends ConsumerState<RequestRolePage> {
  final role = TextEditingController();
  String? message;
  @override
  Widget build(BuildContext context) => Shell(
    child: Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 600),
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Request a role',
                style: Theme.of(context).textTheme.headlineLarge,
              ),
              const Text('No attachments or CV text.'),
              const SizedBox(height: 16),
              TextField(
                controller: role,
                decoration: const InputDecoration(
                  labelText: 'Role title',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 12),
              FilledButton(
                onPressed: () async {
                  try {
                    await ref.read(apiProvider).requestRole({
                      'roleTitle': role.text,
                      'website': '',
                    });
                    setState(
                      () => message = 'Thank you. Your request was received.',
                    );
                  } catch (_) {
                    setState(
                      () => message = 'Please enter a valid role title.',
                    );
                  }
                },
                child: const Text('Send request'),
              ),
              if (message != null) Text(message!),
            ],
          ),
        ),
      ),
    ),
  );
}

class AdminPage extends ConsumerStatefulWidget {
  const AdminPage({super.key});
  @override
  ConsumerState<AdminPage> createState() => _AdminPageState();
}

class _AdminPageState extends ConsumerState<AdminPage> {
  final username = TextEditingController(),
      password = TextEditingController(),
      current = TextEditingController(),
      nextPassword = TextEditingController();
  String? error;
  @override
  Widget build(BuildContext context) {
    final session = ref.watch(sessionProvider);
    return Shell(
      child: session.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (_, __) => _login(),
        data: (s) => s['signedIn'] == true
            ? _portal(s['forcePasswordChange'] == true)
            : _login(),
      ),
    );
  }

  Widget _login() => Center(
    child: SizedBox(
      width: 400,
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Administrator sign in',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w800),
              ),
              const SizedBox(height: 16),
              TextField(
                controller: username,
                decoration: const InputDecoration(labelText: 'Username'),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: password,
                obscureText: true,
                decoration: const InputDecoration(labelText: 'Password'),
              ),
              if (error != null)
                Text(error!, style: const TextStyle(color: Colors.red)),
              FilledButton(onPressed: _signIn, child: const Text('Sign in')),
            ],
          ),
        ),
      ),
    ),
  );
  Future<void> _signIn() async {
    try {
      await ref.read(apiProvider).login(username.text, password.text);
      ref.invalidate(sessionProvider);
    } catch (_) {
      setState(() => error = 'Invalid username or password.');
    }
  }

  Widget _portal(bool force) => ListView(
    padding: const EdgeInsets.all(24),
    children: [
      Text('Admin dashboard', style: Theme.of(context).textTheme.headlineLarge),
      if (force)
        const Card(
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Text(
              'Security action required: change the default password.',
            ),
          ),
        ),
      const Wrap(
        spacing: 10,
        runSpacing: 10,
        children: [
          _Feature(Icons.analytics_outlined, 'Aggregate dashboard'),
          _Feature(Icons.work_outline, 'Role catalog'),
          _Feature(Icons.rule_outlined, 'Rule versions'),
          _Feature(Icons.inbox_outlined, 'Role requests'),
          _Feature(Icons.history, 'Safe audit logs'),
        ],
      ),
      const SizedBox(height: 24),
      TextField(
        controller: current,
        obscureText: true,
        decoration: const InputDecoration(labelText: 'Current password'),
      ),
      const SizedBox(height: 10),
      TextField(
        controller: nextPassword,
        obscureText: true,
        decoration: const InputDecoration(
          labelText: 'New password (12+ characters)',
        ),
      ),
      FilledButton(
        onPressed: () async {
          try {
            await ref
                .read(apiProvider)
                .account(current.text, null, nextPassword.text);
            ref.invalidate(sessionProvider);
          } catch (_) {
            setState(() => error = 'Credential update failed.');
          }
        },
        child: const Text('Update credentials and sign out'),
      ),
      TextButton(
        onPressed: () async {
          await ref.read(apiProvider).logout();
          ref.invalidate(sessionProvider);
        },
        child: const Text('Sign out'),
      ),
    ],
  );
}

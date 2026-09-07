import 'dart:typed_data';

import 'package:catalog_models/catalog_models.dart';
import 'package:core_models/core_models.dart';
import 'package:design_system/design_system.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../app/providers.dart';
import '../../role_request/application/role_request_view_model.dart';
import '../../scan/application/scan_view_model.dart';

class AppShell extends StatelessWidget {
  const AppShell({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(
      title: InkWell(
        onTap: () => context.go('/'),
        child: const Text(
          'Ready My CV',
          style: TextStyle(fontWeight: FontWeight.w800),
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
  Widget build(BuildContext context) => AppShell(
    child: Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 900),
        child: ListView(
          padding: const EdgeInsets.all(24),
          children: [
            const Chip(label: Text('100% free • No account required')),
            const SizedBox(height: 20),
            Text(
              'Know how ready your CV is\nfor the role you want.',
              textAlign: TextAlign.center,
              style: Theme.of(
                context,
              ).textTheme.displayMedium?.copyWith(fontWeight: FontWeight.w900),
            ),
            const SizedBox(height: 16),
            const Text(
              'Private, evidence-based guidance that runs in your browser — not another mysterious ATS score.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 18),
            ),
            const SizedBox(height: 24),
            const PrivacyBanner(),
            const SizedBox(height: 24),
            Center(
              child: FilledButton.icon(
                onPressed: () => context.go('/scan'),
                icon: const Icon(Icons.document_scanner_outlined),
                label: const Padding(
                  padding: EdgeInsets.all(12),
                  child: Text('Check my CV'),
                ),
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

class ScanPage extends ConsumerWidget {
  const ScanPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final catalog = ref.watch(publishedCatalogProvider);
    final scan = ref.watch(scanViewModelProvider);
    return AppShell(
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 760),
          child: ListView(
            padding: const EdgeInsets.all(24),
            children: [
              Text(
                'Check your CV',
                style: Theme.of(context).textTheme.headlineLarge,
              ),
              const Text(
                'Select a role and a text-based PDF. Your CV never leaves this browser.',
              ),
              const SizedBox(height: 20),
              catalog.when(
                loading: () => const LinearProgressIndicator(),
                error: (error, _) => Text('Catalog unavailable: $error'),
                data: (snapshot) => DropdownButtonFormField<JobRole>(
                  value: scan.role,
                  decoration: const InputDecoration(labelText: 'Target role'),
                  items: snapshot.roles
                      .where((role) => role.active)
                      .map(
                        (role) => DropdownMenuItem(
                          value: role,
                          child: Text(role.title),
                        ),
                      )
                      .toList(),
                  onChanged: scan.busy
                      ? null
                      : (role) => role == null
                            ? null
                            : ref
                                  .read(scanViewModelProvider.notifier)
                                  .chooseRole(
                                    role,
                                    role.seniorities.isEmpty
                                        ? null
                                        : role.seniorities.first.name,
                                  ),
                ),
              ),
              if (scan.role != null && scan.role!.seniorities.isNotEmpty) ...[
                const SizedBox(height: 16),
                DropdownButtonFormField<String>(
                  value: scan.seniority,
                  decoration: const InputDecoration(labelText: 'Seniority'),
                  items: scan.role!.seniorities
                      .map(
                        (level) => DropdownMenuItem(
                          value: level.name,
                          child: Text(_seniorityLabel(level)),
                        ),
                      )
                      .toList(),
                  onChanged: scan.busy
                      ? null
                      : (value) => value == null
                            ? null
                            : ref
                                  .read(scanViewModelProvider.notifier)
                                  .chooseRole(scan.role!, value),
                ),
              ],
              const SizedBox(height: 16),
              PrivacyBanner(
                child: const Text(
                  'Your CV is read privately in this browser. We do not upload, store, or save your CV data anywhere.',
                ),
              ),
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: scan.busy || scan.role == null
                    ? null
                    : () => _pick(context, ref),
                icon: const Icon(Icons.upload_file),
                label: const Text('Select PDF'),
              ),
              const Text(
                'PDF • 10 MB max • 25 pages • selectable text',
                textAlign: TextAlign.center,
              ),
              if (scan.busy) ...[
                const SizedBox(height: 16),
                LinearProgressIndicator(
                  value: scan.stage == ScanStage.completed ? 1 : null,
                ),
                const SizedBox(height: 8),
                Text(_stageLabel(scan.stage), textAlign: TextAlign.center),
                TextButton(
                  onPressed: () =>
                      ref.read(scanViewModelProvider.notifier).cancel(),
                  child: const Text('Cancel'),
                ),
              ],
              if (scan.errorMessage != null) ...[
                const SizedBox(height: 12),
                Text(
                  scan.errorMessage!,
                  style: TextStyle(color: Theme.of(context).colorScheme.error),
                ),
              ],
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

  Future<void> _pick(BuildContext context, WidgetRef ref) async {
    final viewModel = ref.read(scanViewModelProvider.notifier);
    viewModel.beginFileSelection();
    final picked = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['pdf'],
      withData: true,
    );
    if (picked == null) {
      viewModel.fileSelectionCancelled();
      return;
    }
    final bytes = picked.files.single.bytes;
    if (bytes == null ||
        picked.files.single.extension?.toLowerCase() != 'pdf') {
      if (bytes != null) {
        bytes.fillRange(0, bytes.length, 0);
      }
      viewModel.fileSelectionCancelled();
      return;
    }
    await viewModel.analyze(Uint8List.fromList(bytes));
    if (context.mounted &&
        ref.read(scanViewModelProvider).stage == ScanStage.completed) {
      context.go('/results');
    }
  }
}

class ResultsPage extends ConsumerWidget {
  const ResultsPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final result = ref.watch(scanViewModelProvider).result;
    if (result == null) {
      return AppShell(
        child: Center(
          child: TextButton(
            onPressed: () => context.go('/scan'),
            child: const Text('Start a private scan'),
          ),
        ),
      );
    }
    return AppShell(
      child: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          Text(
            '${result.score.total} — ${result.score.band}',
            style: Theme.of(
              context,
            ).textTheme.displaySmall?.copyWith(fontWeight: FontWeight.w900),
          ),
          Text(
            '${result.roleTitle} • Catalog ${result.catalogVersion} • Engine ${result.engineVersion} • Verified',
          ),
          const SizedBox(height: 16),
          const PrivacyBanner(
            child: Text(
              'This is guidance based on the selected role rules. It is not an employer ATS score and does not guarantee interviews or job offers.',
            ),
          ),
          const SizedBox(height: 16),
          Text(
            'Score components',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          Text(
            'Role skills ${result.score.roleSkills.toStringAsFixed(1)}/35 • Experience ${result.score.experience.toStringAsFixed(1)}/25 • ATS ${result.score.ats.toStringAsFixed(1)}/20 • Completeness ${result.score.completeness.toStringAsFixed(1)}/10 • Impact ${result.score.impact.toStringAsFixed(1)}/10',
          ),
          const SizedBox(height: 16),
          Text('Evidence map', style: Theme.of(context).textTheme.titleLarge),
          ...result.evidence.map(
            (e) => Card(
              child: ListTile(
                title: Text(e.canonicalTerm),
                subtitle: Text(
                  '${e.classification.name}: ${e.explanation}\n${e.section ?? 'Document'} • page ${e.page ?? '-'} • span ${e.start ?? '-'}-${e.end ?? '-'}',
                ),
                trailing: Text('× ${e.multiplier}'),
              ),
            ),
          ),
          Text(
            'Truthful improvements',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          ...result.recommendations.map(
            (x) => ListTile(
              leading: const Icon(Icons.lightbulb_outline),
              title: Text(x.text),
            ),
          ),
          ExpansionTile(
            title: const Text('How this result was produced'),
            children: result.trajectory
                .map(
                  (x) => ListTile(
                    title: Text('${x.step}. ${x.agent}: ${x.decision}'),
                    subtitle: Text(x.observation),
                  ),
                )
                .toList(),
          ),
          FilledButton.tonal(
            onPressed: () {
              ref.read(scanViewModelProvider.notifier).reset();
              context.go('/scan');
            },
            child: const Text('Analyze another CV'),
          ),
        ],
      ),
    );
  }
}

class RoleRequestPage extends ConsumerStatefulWidget {
  const RoleRequestPage({super.key});

  @override
  ConsumerState<RoleRequestPage> createState() => _RoleRequestPageState();
}

class _RoleRequestPageState extends ConsumerState<RoleRequestPage> {
  final controller = TextEditingController();
  final seniority = TextEditingController();
  final industry = TextEditingController();
  final desiredSkills = TextEditingController();
  final replyEmail = TextEditingController();

  @override
  void dispose() {
    controller.dispose();
    seniority.dispose();
    industry.dispose();
    desiredSkills.dispose();
    replyEmail.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final message = ref.watch(roleRequestViewModelProvider);
    return AppShell(
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 600),
          child: ListView(
            padding: const EdgeInsets.all(24),
            children: [
              Text(
                'Request a role',
                style: Theme.of(context).textTheme.headlineLarge,
              ),
              const Text('No attachments or CV text are accepted.'),
              const SizedBox(height: 16),
              TextField(
                controller: controller,
                maxLength: 100,
                decoration: const InputDecoration(labelText: 'Role title'),
              ),
              TextField(
                controller: seniority,
                decoration: const InputDecoration(
                  labelText: 'Seniority (optional)',
                ),
              ),
              TextField(
                controller: industry,
                decoration: const InputDecoration(
                  labelText: 'Industry (optional)',
                ),
              ),
              TextField(
                controller: desiredSkills,
                maxLength: 500,
                decoration: const InputDecoration(
                  labelText: 'Desired skills (optional)',
                ),
              ),
              TextField(
                controller: replyEmail,
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
                  labelText: 'Reply email (optional)',
                ),
              ),
              FilledButton(
                onPressed: () => ref
                    .read(roleRequestViewModelProvider.notifier)
                    .submit(
                      title: controller.text,
                      seniority: seniority.text,
                      industry: industry.text,
                      desiredSkills: desiredSkills.text,
                      replyEmail: replyEmail.text,
                    ),
                child: const Text('Send request'),
              ),
              if (message != null)
                Padding(
                  padding: const EdgeInsets.only(top: 12),
                  child: Text(message),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

class InfoPage extends StatelessWidget {
  const InfoPage({super.key, required this.title, required this.body});

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) => AppShell(
    child: ListView(
      padding: const EdgeInsets.all(24),
      children: [
        Text(title, style: Theme.of(context).textTheme.headlineLarge),
        const SizedBox(height: 16),
        Text(body),
      ],
    ),
  );
}

String _stageLabel(ScanStage stage) => switch (stage) {
  ScanStage.loadingCatalog => 'Loading catalog…',
  ScanStage.selectingFile => 'Select a local PDF…',
  ScanStage.validatingFile => 'Validating file locally…',
  ScanStage.extracting => 'Extracting text locally…',
  ScanStage.analyzing => 'Analyzing requirements…',
  ScanStage.verifying => 'Verifying result…',
  ScanStage.completed => 'Complete',
  ScanStage.cancelled => 'Cancelled',
  ScanStage.failed => 'Failed',
  _ => 'Preparing…',
};

String _seniorityLabel(SeniorityLevel level) => switch (level) {
  SeniorityLevel.junior => 'Junior',
  SeniorityLevel.mid => 'Mid-level',
  SeniorityLevel.senior => 'Senior',
  SeniorityLevel.lead => 'Lead',
};

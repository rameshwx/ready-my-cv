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
import '../../scan/application/scan_state.dart';
import '../../scan/application/scan_view_model.dart';

const privacyNotice =
    'To support more PDF formats, your CV will be temporarily uploaded to our secure server for processing. The uploaded file, extracted text, analysis report, and any email address you provide will be deleted after processing and report delivery. We do not use your CV for training, advertising, or other purposes.';

class AppShell extends StatelessWidget {
  const AppShell({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: PreferredSize(
      preferredSize: const Size.fromHeight(72),
      child: _PublicHeader(),
    ),
    body: Column(
      children: [
        Expanded(child: child),
        const _PublicFooter(),
      ],
    ),
  );
}

class _PublicHeader extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final compact = MediaQuery.sizeOf(context).width < 900;
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(bottom: BorderSide(color: ReadyMyCvColors.border)),
      ),
      child: SafeArea(
        bottom: false,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          child: Row(
            children: [
              InkWell(
                borderRadius: BorderRadius.circular(12),
                onTap: () => context.go('/'),
                child: const BrandMark(compact: true),
              ),
              const Spacer(),
              if (!compact) ...[
                TextButton(
                  onPressed: () => context.go('/privacy'),
                  child: const Text('Privacy'),
                ),
                TextButton(
                  onPressed: () => context.go('/admin'),
                  child: const Text('Admin portal'),
                ),
                const SizedBox(width: 8),
                OutlinedButton.icon(
                  onPressed: () => context.go('/scan'),
                  icon: const Icon(Icons.play_circle_outline, size: 18),
                  label: const Text('Start assessment'),
                ),
              ] else
                PopupMenuButton<String>(
                  tooltip: 'Open menu',
                  onSelected: (value) => context.go(value),
                  itemBuilder: (context) => const [
                    PopupMenuItem(
                      value: '/scan',
                      child: Text('Start assessment'),
                    ),
                    PopupMenuItem(value: '/privacy', child: Text('Privacy')),
                    PopupMenuItem(value: '/admin', child: Text('Admin portal')),
                  ],
                ),
            ],
          ),
        ),
      ),
    );
  }
}

class _PublicFooter extends StatelessWidget {
  const _PublicFooter();

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 22),
    decoration: const BoxDecoration(
      color: Colors.white,
      border: Border(top: BorderSide(color: ReadyMyCvColors.border)),
    ),
    child: LayoutBuilder(
      builder: (context, constraints) {
        final links = Wrap(
          spacing: 4,
          children: [
            TextButton(
              onPressed: () => context.go('/privacy'),
              child: const Text('Privacy policy'),
            ),
            TextButton(
              onPressed: () => context.go('/terms'),
              child: const Text('Terms'),
            ),
            TextButton(
              onPressed: () => context.go('/admin'),
              child: const Text('Admin'),
            ),
          ],
        );
        final identity = Wrap(
          spacing: 8,
          runSpacing: 4,
          crossAxisAlignment: WrapCrossAlignment.center,
          children: [
            const Icon(Icons.circle, color: ReadyMyCvColors.green, size: 7),
            Text('Ready My CV', style: Theme.of(context).textTheme.bodySmall),
            const Text('•'),
            Text(
              'Temporary, evidence-based guidance',
              style: Theme.of(context).textTheme.bodySmall,
            ),
          ],
        );
        return constraints.maxWidth < 620
            ? Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [identity, const SizedBox(height: 8), links],
              )
            : Row(
                children: [
                  Expanded(child: identity),
                  links,
                ],
              );
      },
    ),
  );
}

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});

  @override
  Widget build(BuildContext context) => AppShell(
    child: ListView(
      children: [
        Container(
          color: ReadyMyCvColors.surface,
          padding: const EdgeInsets.fromLTRB(24, 56, 24, 72),
          child: Column(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 14,
                  vertical: 8,
                ),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: ReadyMyCvColors.border),
                ),
                child: const Wrap(
                  alignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  spacing: 8,
                  runSpacing: 4,
                  children: [
                    Icon(Icons.circle, color: ReadyMyCvColors.green, size: 8),
                    Text('100% free'),
                    Text('•', style: TextStyle(color: ReadyMyCvColors.border)),
                    Text('No account required'),
                    Text('•', style: TextStyle(color: ReadyMyCvColors.border)),
                    Text(
                      'Temporary processing',
                      style: TextStyle(
                        color: ReadyMyCvColors.green,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 28),
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 760),
                child: Text(
                  'Know how ready your CV is\nfor the role you want.',
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.displayMedium?.copyWith(
                    fontSize: MediaQuery.sizeOf(context).width < 600 ? 38 : 54,
                    height: 1.08,
                  ),
                ),
              ),
              const SizedBox(height: 20),
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 650),
                child: Text(
                  'Private, evidence-based guidance with temporary server processing — not another mysterious ATS score.',
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    color: ReadyMyCvColors.slate,
                    fontWeight: FontWeight.w400,
                    height: 1.5,
                  ),
                ),
              ),
              const SizedBox(height: 36),
              _AssessmentPreviewCard(),
            ],
          ),
        ),
        Container(
          color: Colors.white,
          padding: const EdgeInsets.fromLTRB(24, 56, 24, 68),
          child: Column(
            children: [
              Text(
                'Why Ready My CV is different',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 8),
              Text(
                'Actionable signals for people who want to improve their next application.',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              const SizedBox(height: 32),
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1180),
                child: LayoutBuilder(
                  builder: (context, constraints) {
                    final columns = constraints.maxWidth >= 850
                        ? 3
                        : constraints.maxWidth >= 560
                        ? 2
                        : 1;
                    return GridView.count(
                      crossAxisCount: columns,
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      crossAxisSpacing: 18,
                      mainAxisSpacing: 18,
                      childAspectRatio: columns == 1 ? 2.2 : 1.45,
                      children: const [
                        _TrustCard(
                          index: '01',
                          title: 'Evidence-backed signals',
                          text:
                              'See concrete evidence of scope, technical mastery, and measurable impact instead of keyword stuffing.',
                          color: ReadyMyCvColors.blue,
                          background: ReadyMyCvColors.blueSoft,
                        ),
                        _TrustCard(
                          index: '02',
                          title: 'Role-specific rubrics',
                          text:
                              'Evaluate your CV against the published role and seniority rules selected for this assessment.',
                          color: ReadyMyCvColors.green,
                          background: ReadyMyCvColors.greenSoft,
                        ),
                        _TrustCard(
                          index: '03',
                          title: 'Privacy first',
                          text:
                              'No visitor account, no advertising profile, and automatic deletion of temporary processing data.',
                          color: ReadyMyCvColors.purple,
                          background: ReadyMyCvColors.purpleSoft,
                        ),
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}

class _AssessmentPreviewCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 760),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Start with a private assessment',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 8),
            Text(
              'Choose a published role, upload one PDF, and receive deterministic evidence-based guidance.',
              style: Theme.of(context).textTheme.bodyMedium,
            ),
            const SizedBox(height: 20),
            LayoutBuilder(
              builder: (context, constraints) => constraints.maxWidth < 520
                  ? const Column(
                      children: [
                        _PreviewStep(number: '1', label: 'Choose role'),
                        _StepConnector(),
                        _PreviewStep(number: '2', label: 'Upload PDF'),
                        _StepConnector(),
                        _PreviewStep(number: '3', label: 'Review results'),
                      ],
                    )
                  : const Row(
                      children: [
                        Expanded(
                          child: _PreviewStep(
                            number: '1',
                            label: 'Choose role',
                          ),
                        ),
                        _StepConnector(),
                        Expanded(
                          child: _PreviewStep(number: '2', label: 'Upload PDF'),
                        ),
                        _StepConnector(),
                        Expanded(
                          child: _PreviewStep(
                            number: '3',
                            label: 'Review results',
                          ),
                        ),
                      ],
                    ),
            ),
            const SizedBox(height: 22),
            SizedBox(
              width: double.infinity,
              child: FilledButton.icon(
                onPressed: () => context.go('/scan'),
                icon: const Icon(Icons.document_scanner_outlined),
                label: const Text('Check my CV'),
              ),
            ),
            const SizedBox(height: 18),
            const PrivacyBanner(
              child: Text(
                'Your CV is uploaded only after consent and processed temporarily. We delete the CV, report, and delivery details after completion or expiry.',
              ),
            ),
          ],
        ),
      ),
    ),
  );
}

class _PreviewStep extends StatelessWidget {
  const _PreviewStep({required this.number, required this.label});

  final String number;
  final String label;

  @override
  Widget build(BuildContext context) => Row(
    children: [
      CircleAvatar(
        radius: 15,
        backgroundColor: ReadyMyCvColors.blueSoft,
        foregroundColor: ReadyMyCvColors.blue,
        child: Text(
          number,
          style: const TextStyle(fontWeight: FontWeight.w800),
        ),
      ),
      const SizedBox(width: 8),
      Expanded(
        child: Text(
          label,
          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700),
        ),
      ),
    ],
  );
}

class _StepConnector extends StatelessWidget {
  const _StepConnector();

  @override
  Widget build(BuildContext context) =>
      const SizedBox(width: 24, child: Divider(color: ReadyMyCvColors.border));
}

class _TrustCard extends StatelessWidget {
  const _TrustCard({
    required this.index,
    required this.title,
    required this.text,
    required this.color,
    required this.background,
  });

  final String index;
  final String title;
  final String text;
  final Color color;
  final Color background;

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(
              color: background,
              borderRadius: BorderRadius.circular(10),
            ),
            child: Text(
              index,
              style: TextStyle(color: color, fontWeight: FontWeight.w800),
            ),
          ),
          const SizedBox(height: 16),
          Text(title, style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          Text(text, style: Theme.of(context).textTheme.bodyMedium),
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
  final emailController = TextEditingController();

  @override
  void dispose() {
    emailController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final catalog = ref.watch(publishedCatalogProvider);
    final scan = ref.watch(scanViewModelProvider);
    return PopScope<void>(
      onPopInvokedWithResult: (didPop, _) {
        if (didPop) ref.read(scanViewModelProvider.notifier).cancel();
      },
      child: AppShell(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(24, 34, 24, 48),
          children: [
            PageContainer(
              maxWidth: 820,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Check your CV',
                    style: Theme.of(context).textTheme.headlineLarge,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Select a role and a PDF. The server uses local PDF tools and the existing deterministic analysis engine.',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                  const SizedBox(height: 24),
                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          _FormStepLabel(number: '1', label: 'Target role'),
                          const SizedBox(height: 10),
                          catalog.when(
                            loading: () => const LinearProgressIndicator(),
                            error: (error, _) => _InlineError(
                              message: 'Catalog unavailable: $error',
                            ),
                            data: (snapshot) {
                              final roles = snapshot.roles
                                  .where((role) => role.active)
                                  .toList();
                              return DropdownButtonFormField<JobRole>(
                                value: scan.role,
                                decoration: const InputDecoration(
                                  hintText:
                                      'Choose the role you are applying for',
                                ),
                                items: roles
                                    .map(
                                      (role) => DropdownMenuItem(
                                        value: role,
                                        child: Text(role.title),
                                      ),
                                    )
                                    .toList(),
                                onChanged:
                                    scan.busy ||
                                        scan.stage == ScanStage.awaitingEmail
                                    ? null
                                    : (role) {
                                        if (role == null) return;
                                        ref
                                            .read(
                                              scanViewModelProvider.notifier,
                                            )
                                            .chooseRole(
                                              role,
                                              role.seniorities.isEmpty
                                                  ? null
                                                  : role.seniorities.first.name,
                                            );
                                      },
                              );
                            },
                          ),
                          if (scan.role != null &&
                              scan.role!.seniorities.isNotEmpty) ...[
                            const SizedBox(height: 16),
                            DropdownButtonFormField<String>(
                              value: scan.seniority,
                              decoration: const InputDecoration(
                                labelText: 'Seniority',
                              ),
                              items: scan.role!.seniorities
                                  .map(
                                    (level) => DropdownMenuItem(
                                      value: level.name,
                                      child: Text(_seniorityLabel(level)),
                                    ),
                                  )
                                  .toList(),
                              onChanged:
                                  scan.busy ||
                                      scan.stage == ScanStage.awaitingEmail
                                  ? null
                                  : (value) {
                                      if (value != null) {
                                        ref
                                            .read(
                                              scanViewModelProvider.notifier,
                                            )
                                            .chooseRole(scan.role!, value);
                                      }
                                    },
                            ),
                          ],
                          const SizedBox(height: 24),
                          _FormStepLabel(number: '2', label: 'Upload your PDF'),
                          const SizedBox(height: 10),
                          InkWell(
                            onTap:
                                scan.busy ||
                                    scan.stage == ScanStage.awaitingEmail ||
                                    scan.role == null ||
                                    !scan.consentGiven
                                ? null
                                : () => _pick(context, ref),
                            borderRadius: BorderRadius.circular(14),
                            child: Container(
                              width: double.infinity,
                              padding: const EdgeInsets.symmetric(
                                horizontal: 18,
                                vertical: 28,
                              ),
                              decoration: BoxDecoration(
                                color: ReadyMyCvColors.surface,
                                borderRadius: BorderRadius.circular(14),
                                border: Border.all(
                                  color: ReadyMyCvColors.border,
                                  width: 1.5,
                                ),
                              ),
                              child: Column(
                                children: [
                                  const CircleAvatar(
                                    radius: 25,
                                    backgroundColor: ReadyMyCvColors.blueSoft,
                                    foregroundColor: ReadyMyCvColors.blue,
                                    child: Icon(
                                      Icons.upload_file_outlined,
                                      size: 26,
                                    ),
                                  ),
                                  const SizedBox(height: 12),
                                  Text(
                                    scan.role == null
                                        ? 'Choose a role first'
                                        : scan.consentGiven
                                        ? 'Select a PDF to begin'
                                        : 'Accept the privacy notice to upload',
                                    style: const TextStyle(
                                      fontWeight: FontWeight.w700,
                                    ),
                                  ),
                                  const SizedBox(height: 5),
                                  const Text(
                                    'PDF only • 10 MB maximum • up to 25 pages',
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(height: 20),
                          PrivacyBanner(child: Text(privacyNotice)),
                          CheckboxListTile(
                            contentPadding: EdgeInsets.zero,
                            value: scan.consentGiven,
                            onChanged:
                                scan.busy ||
                                    scan.stage == ScanStage.awaitingEmail
                                ? null
                                : (value) => ref
                                      .read(scanViewModelProvider.notifier)
                                      .setConsent(value ?? false),
                            title: const Text(
                              'I understand and agree to this temporary processing notice.',
                            ),
                            controlAffinity: ListTileControlAffinity.leading,
                          ),
                          if (scan.errorMessage != null) ...[
                            const SizedBox(height: 8),
                            _InlineError(message: scan.errorMessage!),
                          ],
                        ],
                      ),
                    ),
                  ),
                  if (scan.busy || scan.stage == ScanStage.awaitingEmail) ...[
                    const SizedBox(height: 18),
                    _ProcessingPanel(
                      scan: scan,
                      emailController: emailController,
                    ),
                  ],
                  if (scan.stage == ScanStage.completed && scan.emailSent) ...[
                    const SizedBox(height: 18),
                    const _TerminalNotice(
                      icon: Icons.mark_email_read_outlined,
                      color: ReadyMyCvColors.green,
                      title: 'Report accepted for delivery',
                      message:
                          'Your report was accepted for email delivery. Temporary processing data is purged after delivery; your email provider may retain the message.',
                    ),
                  ],
                  if (scan.stage == ScanStage.expired) ...[
                    const SizedBox(height: 18),
                    const _TerminalNotice(
                      icon: Icons.timer_off_outlined,
                      color: ReadyMyCvColors.amber,
                      title: 'This assessment expired',
                      message:
                          'The temporary processing window closed. Start a new assessment to try again.',
                    ),
                  ],
                  if (scan.stage == ScanStage.cancelled) ...[
                    const SizedBox(height: 18),
                    const _TerminalNotice(
                      icon: Icons.cancel_outlined,
                      color: ReadyMyCvColors.slate,
                      title: 'Assessment cancelled',
                      message:
                          'The temporary job and local data have been cleared.',
                    ),
                  ],
                  const SizedBox(height: 16),
                  Align(
                    alignment: Alignment.center,
                    child: TextButton.icon(
                      onPressed: () => context.go('/request-role'),
                      icon: const Icon(Icons.add_circle_outline, size: 18),
                      label: const Text('Can’t find your role? Request it'),
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
        picked.files.single.extension?.toLowerCase() != 'pdf' ||
        !picked.files.single.name.toLowerCase().endsWith('.pdf')) {
      if (bytes != null) bytes.fillRange(0, bytes.length, 0);
      viewModel.fileSelectionCancelled();
      return;
    }
    final uploadBytes = Uint8List.fromList(bytes);
    bytes.fillRange(0, bytes.length, 0);
    await viewModel.analyze(uploadBytes);
    if (context.mounted &&
        ref.read(scanViewModelProvider).stage == ScanStage.completed &&
        ref.read(scanViewModelProvider).result != null) {
      context.go('/results');
    }
  }
}

class _FormStepLabel extends StatelessWidget {
  const _FormStepLabel({required this.number, required this.label});

  final String number;
  final String label;

  @override
  Widget build(BuildContext context) => Row(
    children: [
      CircleAvatar(
        radius: 13,
        backgroundColor: ReadyMyCvColors.blueSoft,
        foregroundColor: ReadyMyCvColors.blue,
        child: Text(
          number,
          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w800),
        ),
      ),
      const SizedBox(width: 9),
      Text(
        label.toUpperCase(),
        style: const TextStyle(
          color: ReadyMyCvColors.slate,
          fontSize: 12,
          fontWeight: FontWeight.w800,
          letterSpacing: .8,
        ),
      ),
    ],
  );
}

class _ProcessingPanel extends StatelessWidget {
  const _ProcessingPanel({required this.scan, required this.emailController});

  final ScanState scan;
  final TextEditingController emailController;

  @override
  Widget build(BuildContext context) {
    final stage = _stageDefinition(scan.stage);
    final isEmail = scan.stage == ScanStage.awaitingEmail;
    return Card(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      StatusBadge(
                        label: stage.badge,
                        color: stage.color,
                        backgroundColor: stage.background,
                      ),
                      const SizedBox(height: 10),
                      Text(
                        stage.title,
                        style: Theme.of(context).textTheme.titleLarge,
                      ),
                      const SizedBox(height: 4),
                      Text(
                        stage.description,
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ],
                  ),
                ),
                if (!isEmail)
                  IconButton(
                    tooltip: 'Cancel assessment',
                    onPressed: () => _cancel(context),
                    icon: const Icon(Icons.close),
                  ),
              ],
            ),
          ),
          if (!isEmail) ...[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: ProgressTrack(value: _stageProgress(scan.stage)),
            ),
            const SizedBox(height: 18),
            Container(
              padding: const EdgeInsets.fromLTRB(20, 16, 20, 18),
              color: ReadyMyCvColors.surface,
              child: Column(
                children: [
                  _StageRow(
                    number: '1',
                    label: 'Upload and validate',
                    active: _stageIndex(scan.stage) >= 1,
                    current:
                        scan.stage == ScanStage.uploading ||
                        scan.stage == ScanStage.validatingFile,
                  ),
                  _StageRow(
                    number: '2',
                    label: 'Queue and process',
                    active: _stageIndex(scan.stage) >= 2,
                    current:
                        scan.stage == ScanStage.queued ||
                        scan.stage == ScanStage.processing ||
                        scan.stage == ScanStage.extracting ||
                        scan.stage == ScanStage.analyzing,
                  ),
                  _StageRow(
                    number: '3',
                    label: 'Prepare verified report',
                    active: _stageIndex(scan.stage) >= 3,
                    current:
                        scan.stage == ScanStage.preparingReport ||
                        scan.stage == ScanStage.verifying,
                  ),
                  _StageRow(
                    number: '4',
                    label: 'Deliver and purge',
                    active: _stageIndex(scan.stage) >= 4,
                    current: scan.stage == ScanStage.sendingEmail,
                  ),
                ],
              ),
            ),
          ] else
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Divider(),
                  const SizedBox(height: 15),
                  Text(
                    'This analysis is taking longer than usual.',
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Enter your email address and we will send the completed report when it is ready. This address is used only for this delivery.',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 14),
                  TextField(
                    controller: emailController,
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      labelText: 'Email address',
                    ),
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton.icon(
                      onPressed: scan.busy ? null : () => _sendEmail(context),
                      icon: const Icon(Icons.send_outlined),
                      label: const Text('Email my report'),
                    ),
                  ),
                  const SizedBox(height: 5),
                  Text(
                    'No marketing messages. Your email provider may retain a delivered report.',
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                  if (scan.errorMessage != null) ...[
                    const SizedBox(height: 12),
                    _InlineError(message: scan.errorMessage!),
                  ],
                  const SizedBox(height: 8),
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton.icon(
                      onPressed: () => _cancel(context),
                      icon: const Icon(Icons.delete_outline, size: 17),
                      label: const Text('Cancel and purge'),
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }

  void _cancel(BuildContext context) {
    // The parent owns the provider; this callback is replaced by the button
    // finder in the page through the nearest notifier-aware context.
    final container = ProviderScope.containerOf(context, listen: false);
    container.read(scanViewModelProvider.notifier).cancel();
  }

  void _sendEmail(BuildContext context) {
    final container = ProviderScope.containerOf(context, listen: false);
    container
        .read(scanViewModelProvider.notifier)
        .sendEmail(emailController.text);
  }
}

class _StageRow extends StatelessWidget {
  const _StageRow({
    required this.number,
    required this.label,
    required this.active,
    required this.current,
  });

  final String number;
  final String label;
  final bool active;
  final bool current;

  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 7),
    child: Row(
      children: [
        CircleAvatar(
          radius: 15,
          backgroundColor: active ? ReadyMyCvColors.greenSoft : Colors.white,
          foregroundColor: active
              ? ReadyMyCvColors.green
              : ReadyMyCvColors.muted,
          child: current
              ? const SizedBox(
                  width: 11,
                  height: 11,
                  child: CircularProgressIndicator(strokeWidth: 2),
                )
              : active
              ? const Icon(Icons.check, size: 17)
              : Text(
                  number,
                  style: const TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w800,
                  ),
                ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Text(
            label,
            style: TextStyle(
              fontWeight: current ? FontWeight.w700 : FontWeight.w500,
              color: active ? ReadyMyCvColors.navy : ReadyMyCvColors.muted,
            ),
          ),
        ),
        if (current) const StatusBadge(label: 'In progress'),
        if (active && !current)
          const Icon(
            Icons.check_circle,
            color: ReadyMyCvColors.green,
            size: 17,
          ),
      ],
    ),
  );
}

class _TerminalNotice extends StatelessWidget {
  const _TerminalNotice({
    required this.icon,
    required this.color,
    required this.title,
    required this.message,
  });

  final IconData icon;
  final Color color;
  final String title;
  final String message;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: color.withValues(alpha: .08),
      borderRadius: BorderRadius.circular(14),
      border: Border.all(color: color.withValues(alpha: .2)),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, color: color),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.w700)),
              const SizedBox(height: 3),
              Text(message),
            ],
          ),
        ),
      ],
    ),
  );
}

class _InlineError extends StatelessWidget {
  const _InlineError({required this.message});

  final String message;

  @override
  Widget build(BuildContext context) => Text(
    message,
    style: TextStyle(
      color: Theme.of(context).colorScheme.error,
      fontWeight: FontWeight.w600,
    ),
  );
}

class ResultsPage extends ConsumerStatefulWidget {
  const ResultsPage({super.key});

  @override
  ConsumerState<ResultsPage> createState() => _ResultsPageState();
}

class _ResultsPageState extends ConsumerState<ResultsPage> {
  _EvidenceFilter filter = _EvidenceFilter.all;

  @override
  Widget build(BuildContext context) {
    final result = ref.watch(scanViewModelProvider).result;
    if (result == null) {
      return AppShell(
        child: Center(
          child: FilledButton.icon(
            onPressed: () => context.go('/scan'),
            icon: const Icon(Icons.lock_outline),
            label: const Text('Start a private scan'),
          ),
        ),
      );
    }
    final evidence = result.evidence.where(_matchesFilter).toList();
    final componentCards = _scoreComponents(result.score);
    return AppShell(
      child: ListView(
        padding: const EdgeInsets.fromLTRB(24, 32, 24, 46),
        children: [
          PageContainer(
            maxWidth: 1220,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                LayoutBuilder(
                  builder: (context, constraints) => constraints.maxWidth < 680
                      ? Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            _scoreHeading(context, result),
                            const SizedBox(height: 18),
                            _ScoreRing(score: result.score.total),
                          ],
                        )
                      : Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Expanded(child: _scoreHeading(context, result)),
                            _ScoreRing(score: result.score.total),
                          ],
                        ),
                ),
                const SizedBox(height: 22),
                const PrivacyBanner(
                  child: Text(
                    'This is guidance based on the selected role rules. It is not an employer ATS score and does not guarantee interviews or job offers.',
                  ),
                ),
                const SizedBox(height: 34),
                SectionHeading(
                  title: 'Score components',
                  subtitle:
                      'Breakdown according to the published role rules and deterministic analysis engine.',
                ),
                const SizedBox(height: 14),
                GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: componentCards.length,
                  gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                    maxCrossAxisExtent: 240,
                    mainAxisExtent: 148,
                    crossAxisSpacing: 14,
                    mainAxisSpacing: 14,
                  ),
                  itemBuilder: (context, index) =>
                      _ScoreComponentCard(component: componentCards[index]),
                ),
                const SizedBox(height: 38),
                SectionHeading(
                  title: 'Evidence map',
                  subtitle:
                      'Extracted signals and context qualifiers detected across your CV.',
                  trailing: _EvidenceFilterBar(
                    result: result,
                    filter: filter,
                    onChanged: (value) => setState(() => filter = value),
                  ),
                ),
                const SizedBox(height: 14),
                if (evidence.isEmpty)
                  const _EmptyPanel(message: 'No evidence matches this filter.')
                else
                  ...evidence.map(
                    (item) => Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: _EvidenceCard(evidence: item),
                    ),
                  ),
                const SizedBox(height: 28),
                SectionHeading(
                  title: 'Truthful improvements',
                  subtitle:
                      'Suggestions selected from the published recommendation templates.',
                ),
                const SizedBox(height: 14),
                if (result.recommendations.isEmpty)
                  const _EmptyPanel(
                    message:
                        'No additional recommendations were generated for this result.',
                  )
                else
                  ...result.recommendations.map(
                    (item) => _RecommendationCard(text: item.text),
                  ),
                const SizedBox(height: 26),
                Card(
                  child: ExpansionTile(
                    title: const Text('How this result was produced'),
                    subtitle: Text(
                      'Engine ${result.engineVersion} • Catalog ${result.catalogVersion}',
                    ),
                    children: [
                      const Padding(
                        padding: EdgeInsets.fromLTRB(20, 0, 20, 12),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            'The analyzer applies deterministic agents and published role rules. The trajectory below is included for transparency and does not change the result.',
                          ),
                        ),
                      ),
                      ...result.trajectory.map(
                        (entry) => ListTile(
                          leading: CircleAvatar(
                            radius: 15,
                            backgroundColor: ReadyMyCvColors.blueSoft,
                            foregroundColor: ReadyMyCvColors.blue,
                            child: Text(
                              '${entry.step}',
                              style: const TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                          ),
                          title: Text('${entry.agent}: ${entry.decision}'),
                          subtitle: Text(entry.observation),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 22),
                Align(
                  alignment: Alignment.centerRight,
                  child: FilledButton.icon(
                    onPressed: () {
                      ref.read(scanViewModelProvider.notifier).reset();
                      context.go('/scan');
                    },
                    icon: const Icon(Icons.refresh),
                    label: const Text('Analyze another CV'),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _scoreHeading(BuildContext context, AnalysisResult result) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Wrap(
        crossAxisAlignment: WrapCrossAlignment.center,
        spacing: 12,
        runSpacing: 8,
        children: [
          Text(
            '${result.score.total} — ${result.score.band}',
            style: Theme.of(context).textTheme.displaySmall,
          ),
          StatusBadge(
            label: _scoreStatus(result.score.total),
            color: _scoreColor(result.score.total),
            backgroundColor: _scoreBackground(result.score.total),
          ),
        ],
      ),
      const SizedBox(height: 10),
      Wrap(
        spacing: 8,
        runSpacing: 5,
        children: [
          Text(result.roleTitle),
          const Text('•'),
          if (result.seniority != null) ...[
            Text(_displayCase(result.seniority!)),
            const Text('•'),
          ],
          Text('Catalog ${result.catalogVersion}'),
          const Text('•'),
          Text('Engine ${result.engineVersion}'),
          const StatusBadge(
            label: 'Verified',
            color: ReadyMyCvColors.green,
            backgroundColor: ReadyMyCvColors.greenSoft,
            icon: Icons.check,
          ),
        ],
      ),
    ],
  );

  bool _matchesFilter(Evidence item) => switch (filter) {
    _EvidenceFilter.all => true,
    _EvidenceFilter.strong =>
      item.classification == EvidenceClassification.strong,
    _EvidenceFilter.weak => item.classification == EvidenceClassification.weak,
    _EvidenceFilter.attention =>
      item.classification == EvidenceClassification.missing ||
          item.classification == EvidenceClassification.contradictory ||
          item.classification == EvidenceClassification.mentionOnly,
  };
}

class _ScoreRing extends StatelessWidget {
  const _ScoreRing({required this.score});

  final int score;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: ReadyMyCvColors.surface,
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: ReadyMyCvColors.border),
    ),
    child: Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          width: 68,
          height: 68,
          child: Stack(
            alignment: Alignment.center,
            children: [
              CircularProgressIndicator(
                value: score / 100,
                strokeWidth: 8,
                backgroundColor: const Color(0xffe2e8f0),
                valueColor: const AlwaysStoppedAnimation(ReadyMyCvColors.blue),
              ),
              Text(
                '$score%',
                style: const TextStyle(fontWeight: FontWeight.w800),
              ),
            ],
          ),
        ),
        const SizedBox(width: 13),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'CURRENT FIT',
              style: TextStyle(
                color: Color(0xff8aa0bd),
                fontSize: 11,
                fontWeight: FontWeight.w800,
                letterSpacing: 1,
              ),
            ),
            const SizedBox(height: 4),
            const Text(
              'Selected role',
              style: TextStyle(fontWeight: FontWeight.w700),
            ),
            Text(
              'Verified result',
              style: TextStyle(color: ReadyMyCvColors.blue, fontSize: 12),
            ),
          ],
        ),
      ],
    ),
  );
}

class _ScoreComponent {
  const _ScoreComponent(this.label, this.value, this.maximum, this.color);

  final String label;
  final double value;
  final double maximum;
  final Color color;

  double get ratio => maximum == 0 ? 0 : (value / maximum).clamp(0, 1);
}

List<_ScoreComponent> _scoreComponents(ScoreBreakdown score) => [
  _ScoreComponent('Role skills', score.roleSkills, 35, ReadyMyCvColors.blue),
  _ScoreComponent('Experience', score.experience, 25, ReadyMyCvColors.red),
  _ScoreComponent('ATS parsing', score.ats, 20, ReadyMyCvColors.green),
  _ScoreComponent(
    'Completeness',
    score.completeness,
    10,
    ReadyMyCvColors.green,
  ),
  _ScoreComponent('Impact', score.impact, 10, ReadyMyCvColors.green),
];

class _ScoreComponentCard extends StatelessWidget {
  const _ScoreComponentCard({required this.component});

  final _ScoreComponent component;

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(15),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: Text(
                  component.label,
                  style: Theme.of(context).textTheme.bodySmall,
                ),
              ),
              Text(
                '${component.value.toStringAsFixed(1)} / ${component.maximum.toStringAsFixed(0)}',
                style: const TextStyle(fontWeight: FontWeight.w800),
              ),
            ],
          ),
          const SizedBox(height: 13),
          ProgressTrack(value: component.ratio, color: component.color),
          const SizedBox(height: 9),
          Text(
            '${(component.ratio * 100).round()}% of component',
            style: TextStyle(
              color: component.color,
              fontSize: 12,
              fontWeight: FontWeight.w700,
            ),
          ),
        ],
      ),
    ),
  );
}

enum _EvidenceFilter { all, strong, weak, attention }

class _EvidenceFilterBar extends StatelessWidget {
  const _EvidenceFilterBar({
    required this.result,
    required this.filter,
    required this.onChanged,
  });

  final AnalysisResult result;
  final _EvidenceFilter filter;
  final ValueChanged<_EvidenceFilter> onChanged;

  @override
  Widget build(BuildContext context) {
    final counts = <_EvidenceFilter, int>{
      _EvidenceFilter.all: result.evidence.length,
      _EvidenceFilter.strong: result.evidence
          .where((item) => item.classification == EvidenceClassification.strong)
          .length,
      _EvidenceFilter.weak: result.evidence
          .where((item) => item.classification == EvidenceClassification.weak)
          .length,
      _EvidenceFilter.attention: result.evidence
          .where(
            (item) =>
                item.classification == EvidenceClassification.missing ||
                item.classification == EvidenceClassification.contradictory ||
                item.classification == EvidenceClassification.mentionOnly,
          )
          .length,
    };
    return PopupMenuButton<_EvidenceFilter>(
      tooltip: 'Filter evidence',
      onSelected: onChanged,
      itemBuilder: (context) => _EvidenceFilter.values
          .map(
            (value) => PopupMenuItem(
              value: value,
              child: Text('${_filterLabel(value)} (${counts[value]})'),
            ),
          )
          .toList(),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
        decoration: BoxDecoration(
          color: ReadyMyCvColors.surface,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: ReadyMyCvColors.border),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              '${_filterLabel(filter)} (${counts[filter]})',
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700),
            ),
            const SizedBox(width: 5),
            const Icon(Icons.tune, size: 16),
          ],
        ),
      ),
    );
  }
}

class _EvidenceCard extends StatelessWidget {
  const _EvidenceCard({required this.evidence});

  final Evidence evidence;

  @override
  Widget build(BuildContext context) {
    final color = _classificationColor(evidence.classification);
    final location = [
      evidence.section ?? 'Document',
      if (evidence.page != null) 'page ${evidence.page}',
      if (evidence.start != null && evidence.end != null)
        'span ${evidence.start}-${evidence.end}',
    ].join(' • ');
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Wrap(
                    spacing: 8,
                    runSpacing: 6,
                    children: [
                      Text(
                        evidence.canonicalTerm,
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      EvidenceBadge(
                        label: _displayClassification(evidence.classification),
                        color: color,
                      ),
                    ],
                  ),
                  const SizedBox(height: 7),
                  Text(evidence.explanation),
                  const SizedBox(height: 7),
                  Text(location, style: Theme.of(context).textTheme.bodySmall),
                ],
              ),
            ),
            const SizedBox(width: 12),
            Text(
              '× ${evidence.multiplier}',
              style: const TextStyle(
                color: ReadyMyCvColors.muted,
                fontWeight: FontWeight.w700,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _RecommendationCard extends StatelessWidget {
  const _RecommendationCard({required this.text});

  final String text;

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(18),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const CircleAvatar(
            radius: 18,
            backgroundColor: ReadyMyCvColors.amberSoft,
            foregroundColor: ReadyMyCvColors.amber,
            child: Icon(Icons.lightbulb_outline, size: 19),
          ),
          const SizedBox(width: 13),
          Expanded(
            child: Text(
              text,
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: ReadyMyCvColors.navy,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

class _EmptyPanel extends StatelessWidget {
  const _EmptyPanel({required this.message});

  final String message;

  @override
  Widget build(BuildContext context) => Container(
    width: double.infinity,
    padding: const EdgeInsets.all(20),
    decoration: BoxDecoration(
      color: ReadyMyCvColors.surface,
      borderRadius: BorderRadius.circular(14),
      border: Border.all(color: ReadyMyCvColors.border),
    ),
    child: Text(message),
  );
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
      child: ListView(
        padding: const EdgeInsets.symmetric(vertical: 34),
        children: [
          PageContainer(
            maxWidth: 720,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Request a role',
                  style: Theme.of(context).textTheme.headlineLarge,
                ),
                const SizedBox(height: 8),
                Text(
                  'Tell us which role you would like to see evaluated. No CV text or attachment is accepted here.',
                  style: Theme.of(context).textTheme.bodyLarge,
                ),
                const SizedBox(height: 22),
                Card(
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      children: [
                        TextField(
                          controller: controller,
                          maxLength: 100,
                          decoration: const InputDecoration(
                            labelText: 'Role title',
                          ),
                        ),
                        const SizedBox(height: 14),
                        TextField(
                          controller: seniority,
                          decoration: const InputDecoration(
                            labelText: 'Seniority (optional)',
                          ),
                        ),
                        const SizedBox(height: 14),
                        TextField(
                          controller: industry,
                          decoration: const InputDecoration(
                            labelText: 'Industry (optional)',
                          ),
                        ),
                        const SizedBox(height: 14),
                        TextField(
                          controller: desiredSkills,
                          maxLength: 500,
                          maxLines: 3,
                          decoration: const InputDecoration(
                            labelText: 'Desired skills (optional)',
                          ),
                        ),
                        const SizedBox(height: 14),
                        TextField(
                          controller: replyEmail,
                          keyboardType: TextInputType.emailAddress,
                          decoration: const InputDecoration(
                            labelText: 'Reply email (optional)',
                          ),
                        ),
                        const SizedBox(height: 18),
                        SizedBox(
                          width: double.infinity,
                          child: FilledButton.icon(
                            onPressed: () => ref
                                .read(roleRequestViewModelProvider.notifier)
                                .submit(
                                  title: controller.text,
                                  seniority: seniority.text,
                                  industry: industry.text,
                                  desiredSkills: desiredSkills.text,
                                  replyEmail: replyEmail.text,
                                ),
                            icon: const Icon(Icons.send_outlined),
                            label: const Text('Send request'),
                          ),
                        ),
                        if (message != null) ...[
                          Padding(
                            padding: const EdgeInsets.only(top: 14),
                            child: Text(message),
                          ),
                        ],
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
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
      padding: const EdgeInsets.symmetric(vertical: 34),
      children: [
        PageContainer(
          maxWidth: 980,
          child: title == 'Privacy'
              ? _PrivacyContent(body: body)
              : _TermsContent(body: body),
        ),
      ],
    ),
  );
}

class _PrivacyContent extends StatelessWidget {
  const _PrivacyContent({required this.body});

  final String body;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Center(
        child: Column(
          children: [
            const StatusBadge(
              label: 'Privacy-by-design processing',
              color: ReadyMyCvColors.green,
              backgroundColor: ReadyMyCvColors.greenSoft,
            ),
            const SizedBox(height: 18),
            Text(
              'Privacy & ephemeral processing',
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.displaySmall,
            ),
            const SizedBox(height: 10),
            Text(
              'Temporary processing, explicit consent, and no permanent visitor history.',
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.bodyLarge,
            ),
          ],
        ),
      ),
      const SizedBox(height: 30),
      _PolicyNotice(title: 'Core policy statement', body: body),
      const SizedBox(height: 30),
      SectionHeading(
        title: 'Our four commitments',
        subtitle: 'Safeguards that govern every CV analysis.',
      ),
      const SizedBox(height: 14),
      LayoutBuilder(
        builder: (context, constraints) => GridView.count(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          crossAxisCount: constraints.maxWidth >= 650 ? 2 : 1,
          crossAxisSpacing: 14,
          mainAxisSpacing: 14,
          childAspectRatio: constraints.maxWidth >= 650 ? 1.8 : 2.4,
          children: const [
            _CommitmentCard(
              icon: Icons.delete_outline,
              color: ReadyMyCvColors.red,
              title: 'Deletion after processing',
              text:
                  'The temporary PDF, extracted document, result, and delivery details are removed after completion, cancellation, expiry, or failure cleanup.',
            ),
            _CommitmentCard(
              icon: Icons.shield_outlined,
              color: ReadyMyCvColors.green,
              title: 'No training or advertising',
              text:
                  'CV content is not used for training, advertising, analytics, or unrelated purposes.',
            ),
            _CommitmentCard(
              icon: Icons.person_outline,
              color: ReadyMyCvColors.blue,
              title: 'No visitor accounts',
              text:
                  'The product does not create a persistent visitor profile or permanent analysis history.',
            ),
            _CommitmentCard(
              icon: Icons.lock_outline,
              color: ReadyMyCvColors.purple,
              title: 'Temporary secure processing',
              text:
                  'The upload and processing flow is limited to the assessment window. Your email provider may retain a delivered report.',
            ),
          ],
        ),
      ),
      const SizedBox(height: 30),
      Card(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Data lifecycle',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const SizedBox(height: 4),
              Text(
                'Select a stage to see what is retained and when it is released.',
                style: Theme.of(context).textTheme.bodySmall,
              ),
              const SizedBox(height: 12),
              const _LifecycleTile(
                title: '1. Consent and upload',
                body:
                    'The PDF is transmitted only after the explicit processing notice is accepted.',
              ),
              const _LifecycleTile(
                title: '2. Parse and analyze',
                body:
                    'Local PDF utilities and the deterministic engine process the temporary job.',
              ),
              const _LifecycleTile(
                title: '3. Result or report delivery',
                body:
                    'Fast results are shown in the active session. Delayed results are sent only when an email address is provided.',
              ),
              const _LifecycleTile(
                title: '4. Purge',
                body:
                    'Temporary artifacts are removed through the common cleanup path. Mailbox retention is controlled by your email provider.',
              ),
            ],
          ),
        ),
      ),
      const SizedBox(height: 30),
      Card(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Frequently asked questions',
                style: Theme.of(context).textTheme.titleLarge,
              ),
              const _FaqTile(
                question: 'Does Ready My CV keep my email address?',
                answer:
                    'No. It is used only to deliver the requested report and is removed with the temporary job.',
              ),
              const _FaqTile(
                question: 'Does the email provider retain the report?',
                answer:
                    'A delivered report may remain in your mailbox according to your provider settings and retention rules.',
              ),
              const _FaqTile(
                question: 'Are human reviewers auditing my CV?',
                answer:
                    'No human review is part of the deterministic analysis flow.',
              ),
            ],
          ),
        ),
      ),
    ],
  );
}

class _PolicyNotice extends StatelessWidget {
  const _PolicyNotice({required this.title, required this.body});

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.all(20),
    decoration: BoxDecoration(
      color: ReadyMyCvColors.blueSoft,
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: const Color(0xffcfe0ff)),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const CircleAvatar(
          backgroundColor: ReadyMyCvColors.blue,
          foregroundColor: Colors.white,
          child: Icon(Icons.info_outline),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(
                      title,
                      style: Theme.of(context).textTheme.titleMedium,
                    ),
                  ),
                  const StatusBadge(
                    label: 'Official notice',
                    color: ReadyMyCvColors.blue,
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Text(
                body,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  fontStyle: FontStyle.italic,
                  height: 1.55,
                ),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}

class _CommitmentCard extends StatelessWidget {
  const _CommitmentCard({
    required this.icon,
    required this.color,
    required this.title,
    required this.text,
  });

  final IconData icon;
  final Color color;
  final String title;
  final String text;

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CircleAvatar(
            radius: 21,
            backgroundColor: color.withValues(alpha: .1),
            foregroundColor: color,
            child: Icon(icon),
          ),
          const SizedBox(height: 13),
          Text(title, style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 6),
          Text(text, style: Theme.of(context).textTheme.bodyMedium),
        ],
      ),
    ),
  );
}

class _LifecycleTile extends StatelessWidget {
  const _LifecycleTile({required this.title, required this.body});

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) => ExpansionTile(
    title: Text(title),
    children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
        child: Align(alignment: Alignment.centerLeft, child: Text(body)),
      ),
    ],
  );
}

class _FaqTile extends StatelessWidget {
  const _FaqTile({required this.question, required this.answer});

  final String question;
  final String answer;

  @override
  Widget build(BuildContext context) => ExpansionTile(
    title: Text(question),
    children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
        child: Align(alignment: Alignment.centerLeft, child: Text(answer)),
      ),
    ],
  );
}

class _TermsContent extends StatelessWidget {
  const _TermsContent({required this.body});

  final String body;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        'Terms & limitations',
        style: Theme.of(context).textTheme.displaySmall,
      ),
      const SizedBox(height: 10),
      Text(
        'Understand what this deterministic guidance can and cannot tell you.',
        style: Theme.of(context).textTheme.bodyLarge,
      ),
      const SizedBox(height: 26),
      Card(
        child: Padding(
          padding: const EdgeInsets.all(22),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const StatusBadge(
                label: 'Guidance only',
                color: ReadyMyCvColors.amber,
                backgroundColor: ReadyMyCvColors.amberSoft,
              ),
              const SizedBox(height: 16),
              Text(body, style: Theme.of(context).textTheme.bodyLarge),
            ],
          ),
        ),
      ),
      const SizedBox(height: 16),
      const PrivacyBanner(
        child: Text(
          'Use only truthful experience in your CV. A readiness result is not an employer decision, hiring guarantee, or substitute for your own review.',
        ),
      ),
    ],
  );
}

class _StageDefinition {
  const _StageDefinition(
    this.badge,
    this.title,
    this.description,
    this.color,
    this.background,
  );

  final String badge;
  final String title;
  final String description;
  final Color color;
  final Color background;
}

_StageDefinition _stageDefinition(ScanStage stage) => switch (stage) {
  ScanStage.uploading => const _StageDefinition(
    'Uploading',
    'Sending your PDF securely',
    'The file is being transferred after consent.',
    ReadyMyCvColors.blue,
    ReadyMyCvColors.blueSoft,
  ),
  ScanStage.validatingFile => const _StageDefinition(
    'Validating',
    'Checking the PDF',
    'The server is checking structure, limits, and supported pages.',
    ReadyMyCvColors.blue,
    ReadyMyCvColors.blueSoft,
  ),
  ScanStage.queued => const _StageDefinition(
    'Queued',
    'Waiting for an analysis worker',
    'Your temporary job is safely queued for processing.',
    ReadyMyCvColors.amber,
    ReadyMyCvColors.amberSoft,
  ),
  ScanStage.processing ||
  ScanStage.extracting ||
  ScanStage.analyzing => const _StageDefinition(
    'Processing',
    'Evaluating evidence and competencies',
    'The deterministic engine is comparing the document with the selected role rules.',
    ReadyMyCvColors.blue,
    ReadyMyCvColors.blueSoft,
  ),
  ScanStage.preparingReport || ScanStage.verifying => const _StageDefinition(
    'Verifying',
    'Preparing your verified report',
    'The result is being checked against the existing result contract.',
    ReadyMyCvColors.green,
    ReadyMyCvColors.greenSoft,
  ),
  ScanStage.sendingEmail => const _StageDefinition(
    'Sending',
    'Sending your report',
    'The delivery request is being completed.',
    ReadyMyCvColors.blue,
    ReadyMyCvColors.blueSoft,
  ),
  _ => const _StageDefinition(
    'Working',
    'Preparing your assessment',
    'The temporary assessment is in progress.',
    ReadyMyCvColors.blue,
    ReadyMyCvColors.blueSoft,
  ),
};

double? _stageProgress(ScanStage stage) => switch (stage) {
  ScanStage.uploading || ScanStage.validatingFile => .2,
  ScanStage.queued => .4,
  ScanStage.processing || ScanStage.extracting || ScanStage.analyzing => .65,
  ScanStage.preparingReport || ScanStage.verifying => .85,
  ScanStage.sendingEmail => .95,
  _ => null,
};

int _stageIndex(ScanStage stage) => switch (stage) {
  ScanStage.uploading || ScanStage.validatingFile => 1,
  ScanStage.queued ||
  ScanStage.processing ||
  ScanStage.extracting ||
  ScanStage.analyzing => 2,
  ScanStage.preparingReport || ScanStage.verifying => 3,
  ScanStage.sendingEmail => 4,
  _ => 0,
};

String _scoreStatus(int score) => score < 50
    ? 'Needs work'
    : score < 70
    ? 'Needs revision'
    : score < 85
    ? 'Strong foundation'
    : 'Very strong';
Color _scoreColor(int score) => score < 50
    ? ReadyMyCvColors.red
    : score < 70
    ? ReadyMyCvColors.amber
    : ReadyMyCvColors.green;
Color _scoreBackground(int score) => score < 50
    ? ReadyMyCvColors.redSoft
    : score < 70
    ? ReadyMyCvColors.amberSoft
    : ReadyMyCvColors.greenSoft;
Color _classificationColor(EvidenceClassification value) => switch (value) {
  EvidenceClassification.strong => ReadyMyCvColors.green,
  EvidenceClassification.weak => ReadyMyCvColors.amber,
  EvidenceClassification.mentionOnly => ReadyMyCvColors.blue,
  EvidenceClassification.missing ||
  EvidenceClassification.contradictory => ReadyMyCvColors.red,
};
String _displayClassification(EvidenceClassification value) => switch (value) {
  EvidenceClassification.mentionOnly => 'Mention only',
  EvidenceClassification.missing => 'Missing',
  EvidenceClassification.contradictory => 'Contradictory',
  EvidenceClassification.strong => 'Strong',
  EvidenceClassification.weak => 'Weak',
};
String _filterLabel(_EvidenceFilter value) => switch (value) {
  _EvidenceFilter.all => 'All',
  _EvidenceFilter.strong => 'Strong',
  _EvidenceFilter.weak => 'Weak',
  _EvidenceFilter.attention => 'Needs attention',
};
String _displayCase(String value) =>
    value.isEmpty ? value : '${value[0].toUpperCase()}${value.substring(1)}';

String _seniorityLabel(SeniorityLevel level) => switch (level) {
  SeniorityLevel.junior => 'Junior',
  SeniorityLevel.mid => 'Mid-level',
  SeniorityLevel.senior => 'Senior',
  SeniorityLevel.lead => 'Lead',
};

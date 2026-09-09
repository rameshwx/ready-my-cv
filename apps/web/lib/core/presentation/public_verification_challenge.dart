import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../app/providers.dart';
import '../domain/repositories.dart';

class PublicVerificationChallengeCard extends ConsumerStatefulWidget {
  const PublicVerificationChallengeCard({
    super.key,
    required this.onAnswerChanged,
    this.enabled = true,
  });

  final ValueChanged<int?> onAnswerChanged;
  final bool enabled;

  @override
  ConsumerState<PublicVerificationChallengeCard> createState() =>
      _PublicVerificationChallengeCardState();
}

class _PublicVerificationChallengeCardState
    extends ConsumerState<PublicVerificationChallengeCard> {
  final controller = TextEditingController();
  PublicVerificationChallenge? challenge;
  String? error;
  var loading = true;

  @override
  void initState() {
    super.initState();
    _refresh(notifyParent: false);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  Future<void> _refresh({bool notifyParent = true}) async {
    if (notifyParent) widget.onAnswerChanged(null);
    controller.clear();
    setState(() {
      loading = true;
      error = null;
      challenge = null;
    });
    try {
      final next = await ref.read(publicVerificationRepositoryProvider).issue();
      if (!mounted) return;
      setState(() {
        challenge = next;
        loading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        error = 'Verification is temporarily unavailable. Please try again.';
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Text(
        'Human verification',
        style: TextStyle(fontWeight: FontWeight.w700),
      ),
      const SizedBox(height: 8),
      if (loading) const LinearProgressIndicator(),
      if (challenge != null) ...[
        Text(challenge!.question),
        const SizedBox(height: 8),
        TextField(
          controller: controller,
          enabled: widget.enabled,
          keyboardType: TextInputType.number,
          inputFormatters: [FilteringTextInputFormatter.digitsOnly],
          decoration: const InputDecoration(labelText: 'Answer'),
          onChanged: (value) => widget.onAnswerChanged(int.tryParse(value)),
        ),
      ],
      if (error != null)
        Text(
          error!,
          style: TextStyle(color: Theme.of(context).colorScheme.error),
        ),
      TextButton.icon(
        onPressed: loading || !widget.enabled ? null : _refresh,
        icon: const Icon(Icons.refresh),
        label: const Text('New question'),
      ),
    ],
  );
}

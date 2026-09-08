import 'package:flutter/material.dart';

import 'captcha_challenge_types.dart';

class CaptchaChallenge extends StatelessWidget {
  const CaptchaChallenge({
    super.key,
    required this.siteKey,
    required this.onTokenChanged,
    this.onStatusChanged,
  });

  final String siteKey;
  final ValueChanged<String?> onTokenChanged;
  final ValueChanged<CaptchaRenderStatus>? onStatusChanged;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.all(14),
    decoration: BoxDecoration(
      color: const Color(0xfff8fafc),
      borderRadius: BorderRadius.circular(12),
      border: Border.all(color: const Color(0xffd8e1ec)),
    ),
    child: const Text('Complete the CAPTCHA verification.'),
  );
}

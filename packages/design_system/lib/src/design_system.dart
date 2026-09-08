import 'package:flutter/material.dart';

class ReadyMyCvTheme {
  const ReadyMyCvTheme._();

  static ThemeData data() => ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xff1268d3),
      secondary: const Color(0xff16a36b),
    ),
    scaffoldBackgroundColor: const Color(0xfff6f9fd),
    inputDecorationTheme: const InputDecorationTheme(
      border: OutlineInputBorder(),
    ),
  );
}

class PrivacyBanner extends StatelessWidget {
  const PrivacyBanner({super.key, this.child});

  final Widget? child;

  @override
  Widget build(BuildContext context) => Card(
    color: Theme.of(context).colorScheme.primaryContainer,
    child: Padding(
      padding: const EdgeInsets.all(14),
      child:
          child ??
          const Text(
            'Your CV is uploaded only after consent and processed temporarily. We delete the CV, report, and delivery details after completion or expiry.',
          ),
    ),
  );
}

class EvidenceBadge extends StatelessWidget {
  const EvidenceBadge({super.key, required this.label, required this.color});

  final String label;
  final Color color;

  @override
  Widget build(BuildContext context) => Chip(
    avatar: Icon(Icons.circle, size: 12, color: color),
    label: Text(label),
  );
}

import 'package:flutter/material.dart';

class ReadyMyCvColors {
  const ReadyMyCvColors._();

  static const navy = Color(0xff0f172a);
  static const slate = Color(0xff475569);
  static const muted = Color(0xff64748b);
  static const border = Color(0xffdbe4f0);
  static const surface = Color(0xfff8fafc);
  static const blue = Color(0xff2563eb);
  static const blueSoft = Color(0xffeff6ff);
  static const green = Color(0xff059669);
  static const greenSoft = Color(0xffecfdf5);
  static const amber = Color(0xffd97706);
  static const amberSoft = Color(0xfffffbeb);
  static const red = Color(0xffdc2626);
  static const redSoft = Color(0xfffef2f2);
  static const purple = Color(0xff9333ea);
  static const purpleSoft = Color(0xfffaf5ff);
}

class ReadyMyCvTheme {
  const ReadyMyCvTheme._();

  static ThemeData data() {
    final scheme =
        ColorScheme.fromSeed(
          seedColor: ReadyMyCvColors.blue,
          brightness: Brightness.light,
        ).copyWith(
          primary: ReadyMyCvColors.blue,
          onPrimary: Colors.white,
          secondary: ReadyMyCvColors.green,
          onSecondary: Colors.white,
          surface: Colors.white,
          onSurface: ReadyMyCvColors.navy,
          outline: ReadyMyCvColors.border,
          error: ReadyMyCvColors.red,
        );
    final base = Typography.material2021(platform: TargetPlatform.android);
    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      scaffoldBackgroundColor: ReadyMyCvColors.surface,
      visualDensity: VisualDensity.standard,
      textTheme: base.black.copyWith(
        displayLarge: base.black.displayLarge?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w800,
          letterSpacing: -1.5,
        ),
        displayMedium: base.black.displayMedium?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w800,
          letterSpacing: -1.1,
        ),
        displaySmall: base.black.displaySmall?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w800,
          letterSpacing: -0.7,
        ),
        headlineLarge: base.black.headlineLarge?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w800,
          letterSpacing: -0.5,
        ),
        headlineSmall: base.black.headlineSmall?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w700,
        ),
        titleLarge: base.black.titleLarge?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w700,
        ),
        titleMedium: base.black.titleMedium?.copyWith(
          color: ReadyMyCvColors.navy,
          fontWeight: FontWeight.w600,
        ),
        bodyLarge: base.black.bodyLarge?.copyWith(
          color: ReadyMyCvColors.slate,
          height: 1.45,
        ),
        bodyMedium: base.black.bodyMedium?.copyWith(
          color: ReadyMyCvColors.slate,
          height: 1.4,
        ),
        bodySmall: base.black.bodySmall?.copyWith(
          color: ReadyMyCvColors.muted,
          height: 1.35,
        ),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.white,
        foregroundColor: ReadyMyCvColors.navy,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        centerTitle: false,
      ),
      cardTheme: CardThemeData(
        color: Colors.white,
        surfaceTintColor: Colors.transparent,
        elevation: 0,
        margin: EdgeInsets.zero,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: ReadyMyCvColors.border),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: ReadyMyCvColors.surface,
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 15,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: ReadyMyCvColors.border),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: ReadyMyCvColors.border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: ReadyMyCvColors.blue, width: 2),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: ReadyMyCvColors.red),
        ),
        labelStyle: const TextStyle(color: ReadyMyCvColors.slate),
      ),
      dividerTheme: const DividerThemeData(
        color: ReadyMyCvColors.border,
        space: 1,
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          backgroundColor: ReadyMyCvColors.blue,
          foregroundColor: Colors.white,
          minimumSize: const Size(0, 48),
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: const TextStyle(fontWeight: FontWeight.w700),
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: ReadyMyCvColors.navy,
          minimumSize: const Size(0, 46),
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
          side: const BorderSide(color: ReadyMyCvColors.border),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
      ),
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: ReadyMyCvColors.blue,
          textStyle: const TextStyle(fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}

class BrandMark extends StatelessWidget {
  const BrandMark({super.key, this.compact = false, this.showName = true});

  final bool compact;
  final bool showName;

  @override
  Widget build(BuildContext context) => Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      ClipRRect(
        borderRadius: BorderRadius.circular(compact ? 9 : 11),
        child: Image.asset(
          'assets/app_logo.png',
          width: compact ? 38 : 44,
          height: compact ? 38 : 44,
          fit: BoxFit.cover,
          semanticLabel: 'Ready My CV logo',
        ),
      ),
      if (showName) ...[
        const SizedBox(width: 10),
        Text(
          'Ready My CV',
          style: TextStyle(
            color: ReadyMyCvColors.navy,
            fontSize: compact ? 17 : 19,
            fontWeight: FontWeight.w800,
            letterSpacing: -0.3,
          ),
        ),
      ],
    ],
  );
}

class PageContainer extends StatelessWidget {
  const PageContainer({super.key, required this.child, this.maxWidth = 1180});

  final Widget child;
  final double maxWidth;

  @override
  Widget build(BuildContext context) => Center(
    child: ConstrainedBox(
      constraints: BoxConstraints(maxWidth: maxWidth),
      child: Padding(padding: const EdgeInsets.all(24), child: child),
    ),
  );
}

class SectionHeading extends StatelessWidget {
  const SectionHeading({
    super.key,
    required this.title,
    this.subtitle,
    this.trailing,
  });

  final String title;
  final String? subtitle;
  final Widget? trailing;

  @override
  Widget build(BuildContext context) => Row(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: Theme.of(context).textTheme.titleLarge),
            if (subtitle != null) ...[
              const SizedBox(height: 4),
              Text(subtitle!, style: Theme.of(context).textTheme.bodySmall),
            ],
          ],
        ),
      ),
      if (trailing != null) trailing!,
    ],
  );
}

class StatusBadge extends StatelessWidget {
  const StatusBadge({
    super.key,
    required this.label,
    this.color = ReadyMyCvColors.blue,
    this.backgroundColor = ReadyMyCvColors.blueSoft,
    this.icon,
  });

  final String label;
  final Color color;
  final Color backgroundColor;
  final IconData? icon;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
    decoration: BoxDecoration(
      color: backgroundColor,
      borderRadius: BorderRadius.circular(999),
      border: Border.all(color: color.withValues(alpha: .22)),
    ),
    child: Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon ?? Icons.circle, size: icon == null ? 7 : 14, color: color),
        const SizedBox(width: 6),
        Text(
          label,
          style: TextStyle(
            color: color,
            fontSize: 12,
            fontWeight: FontWeight.w700,
          ),
        ),
      ],
    ),
  );
}

class MetricCard extends StatelessWidget {
  const MetricCard({
    super.key,
    required this.label,
    required this.value,
    this.detail,
    this.icon = Icons.insights_outlined,
    this.accent = ReadyMyCvColors.blue,
  });

  final String label;
  final String value;
  final String? detail;
  final IconData icon;
  final Color accent;

  @override
  Widget build(BuildContext context) => Card(
    child: Padding(
      padding: const EdgeInsets.all(18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: Text(
                  label.toUpperCase(),
                  style: const TextStyle(
                    color: Color(0xff8aa0bd),
                    fontSize: 12,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 1,
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(9),
                decoration: BoxDecoration(
                  color: accent.withValues(alpha: .09),
                  borderRadius: BorderRadius.circular(11),
                ),
                child: Icon(icon, color: accent, size: 20),
              ),
            ],
          ),
          const SizedBox(height: 15),
          Text(
            value,
            style: Theme.of(
              context,
            ).textTheme.headlineSmall?.copyWith(fontWeight: FontWeight.w800),
          ),
          if (detail != null) ...[
            const SizedBox(height: 10),
            const Divider(),
            const SizedBox(height: 9),
            Text(detail!, style: Theme.of(context).textTheme.bodySmall),
          ],
        ],
      ),
    ),
  );
}

class PrivacyBanner extends StatelessWidget {
  const PrivacyBanner({
    super.key,
    this.child,
    this.title = 'Privacy by design',
  });

  final Widget? child;
  final String title;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: ReadyMyCvColors.blueSoft,
      borderRadius: BorderRadius.circular(14),
      border: Border.all(color: const Color(0xffcfe0ff)),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Icon(Icons.lock_outline, color: ReadyMyCvColors.blue, size: 21),
        const SizedBox(width: 12),
        Expanded(
          child: DefaultTextStyle(
            style: Theme.of(context).textTheme.bodySmall!.copyWith(
              color: const Color(0xff17366f),
              height: 1.5,
            ),
            child: child ?? Text(title),
          ),
        ),
      ],
    ),
  );
}

class ProgressTrack extends StatelessWidget {
  const ProgressTrack({
    super.key,
    this.value,
    this.color = ReadyMyCvColors.blue,
  });

  final double? value;
  final Color color;

  @override
  Widget build(BuildContext context) => ClipRRect(
    borderRadius: BorderRadius.circular(99),
    child: LinearProgressIndicator(
      value: value,
      minHeight: 9,
      backgroundColor: const Color(0xffe8eef7),
      valueColor: AlwaysStoppedAnimation<Color>(color),
    ),
  );
}

class EvidenceBadge extends StatelessWidget {
  const EvidenceBadge({super.key, required this.label, required this.color});

  final String label;
  final Color color;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 5),
    decoration: BoxDecoration(
      color: color.withValues(alpha: .09),
      borderRadius: BorderRadius.circular(7),
      border: Border.all(color: color.withValues(alpha: .2)),
    ),
    child: Text(
      label,
      style: TextStyle(color: color, fontSize: 12, fontWeight: FontWeight.w700),
    ),
  );
}

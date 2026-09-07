import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'router.dart';

class ReadyMyCvApp extends ConsumerWidget {
  const ReadyMyCvApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) => MaterialApp.router(
    debugShowCheckedModeBanner: false,
    title: 'Ready My CV',
    theme: ref.watch(themeProvider),
    routerConfig: ref.watch(appRouterProvider),
  );
}

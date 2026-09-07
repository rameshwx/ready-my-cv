import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv/main.dart';

void main() {
  testWidgets('landing page explains privacy and is free', (tester) async {
    await tester.pumpWidget(const ProviderScope(child: ReadyMyCvApp()));
    await tester.pump();
    expect(find.textContaining('100% free'), findsOneWidget);
    expect(find.textContaining('browser'), findsOneWidget);
  });
}

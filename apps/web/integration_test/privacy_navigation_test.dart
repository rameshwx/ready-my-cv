import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:ready_my_cv_web/app/app.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('public navigation keeps the local-processing promise visible', (
    tester,
  ) async {
    await tester.pumpWidget(const ProviderScope(child: ReadyMyCvApp()));
    await tester.pumpAndSettle();
    expect(find.textContaining('temporary server processing'), findsOneWidget);

    await tester.tap(find.text('Check my CV'));
    await tester.pumpAndSettle();
    expect(find.textContaining('To support more PDF formats'), findsOneWidget);
    expect(find.textContaining('secure server for processing'), findsOneWidget);
  });
}

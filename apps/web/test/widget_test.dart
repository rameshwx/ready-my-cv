import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv_web/app/app.dart';

void main() {
  testWidgets('landing page explains temporary processing and is free', (
    tester,
  ) async {
    await tester.pumpWidget(const ProviderScope(child: ReadyMyCvApp()));
    await tester.pump();
    expect(find.textContaining('100% free'), findsOneWidget);
    expect(find.textContaining('temporary server processing'), findsOneWidget);
    expect(find.bySemanticsLabel('Ready My CV logo'), findsOneWidget);
  });

  testWidgets('landing page stacks the assessment preview on narrow screens', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(() {
      tester.view.resetPhysicalSize();
      tester.view.resetDevicePixelRatio();
    });

    await tester.pumpWidget(const ProviderScope(child: ReadyMyCvApp()));
    await tester.pump();

    expect(find.text('Choose role'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}

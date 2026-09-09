import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv_web/core/presentation/captcha_challenge.dart';

void main() {
  test('controller keeps the newest platform view binding', () {
    final controller = CaptchaChallengeController();
    final oldOwner = Object();
    final newOwner = Object();
    var resetCalls = 0;

    controller.attach(
      oldOwner,
      reader: () => 'old-token',
      reset: () => resetCalls++,
    );
    controller.attach(
      newOwner,
      reader: () => 'new-token',
      reset: () => resetCalls++,
    );

    controller.detach(oldOwner);
    expect(controller.readToken(), 'new-token');
    controller.reset();
    expect(resetCalls, 1);

    controller.detach(newOwner);
    expect(controller.readToken(), isNull);
  });

  test('controller fails closed when the token bridge throws', () {
    final controller = CaptchaChallengeController();
    final owner = Object();
    controller.attach(
      owner,
      reader: () => throw StateError('bridge unavailable'),
      reset: () {},
    );

    expect(controller.readToken(), isNull);
  });
}

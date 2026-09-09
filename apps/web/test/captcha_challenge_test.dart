import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv_web/core/presentation/captcha_challenge_types.dart';

void main() {
  test('CAPTCHA controller reads its active binding', () {
    final controller = CaptchaChallengeController();
    final unbind = controller.bind(() => 'active-token');

    expect(controller.readToken(), 'active-token');

    unbind();
    expect(controller.readToken(), isNull);
  });

  test('an old CAPTCHA widget cannot clear a newer binding', () {
    final controller = CaptchaChallengeController();
    final unbindOld = controller.bind(() => 'old-token');
    final unbindNew = controller.bind(() => 'new-token');

    unbindOld();
    expect(controller.readToken(), 'new-token');

    unbindNew();
    expect(controller.readToken(), isNull);
  });
}

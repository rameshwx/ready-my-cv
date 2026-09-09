import 'package:flutter_test/flutter_test.dart';
import 'package:ready_my_cv_web/core/presentation/captcha_challenge_types.dart';

void main() {
  test('maps CAPTCHA bridge lifecycle statuses without false failures', () {
    expect(
      captchaRenderStatusFromBridgeValue('loading'),
      CaptchaRenderStatus.loading,
    );
    expect(
      captchaRenderStatusFromBridgeValue('ready'),
      CaptchaRenderStatus.ready,
    );
    expect(
      captchaRenderStatusFromBridgeValue('blocked'),
      CaptchaRenderStatus.blocked,
    );
    expect(
      captchaRenderStatusFromBridgeValue('unexpected'),
      CaptchaRenderStatus.blocked,
    );
  });

  test('an old CAPTCHA widget cannot unbind a replacement widget', () {
    final controller = CaptchaChallengeController();
    String? oldReader() => 'old-token';
    String? newReader() => 'new-token';

    final unbindOld = controller.bind(oldReader);
    final unbindNew = controller.bind(newReader);

    unbindOld();
    expect(controller.readToken(), 'new-token');

    unbindNew();
    expect(controller.readToken(), isNull);
  });

  test(
    'an earlier binding cannot clear a later binding for the same reader',
    () {
      final controller = CaptchaChallengeController();
      String? reader() => 'token';

      final unbindEarlier = controller.bind(reader);
      final unbindLater = controller.bind(reader);

      unbindEarlier();
      expect(controller.readToken(), 'token');

      unbindLater();
      expect(controller.readToken(), isNull);
    },
  );
}

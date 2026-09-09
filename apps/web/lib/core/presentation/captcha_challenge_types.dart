enum CaptchaRenderStatus { loading, ready, blocked }

typedef CaptchaTokenReader = String? Function();

/// Provides a safe bridge from the rendered CAPTCHA widget to its owner.
///
/// The owner is tracked so that disposing an old platform view cannot detach
/// the reader belonging to a newer view created after a reset.
class CaptchaChallengeController {
  Object? _owner;
  CaptchaTokenReader? _reader;
  void Function()? _resetter;

  void attach(
    Object owner, {
    required CaptchaTokenReader reader,
    required void Function() reset,
  }) {
    _owner = owner;
    _reader = reader;
    _resetter = reset;
  }

  void detach(Object owner) {
    if (!identical(_owner, owner)) return;
    _owner = null;
    _reader = null;
    _resetter = null;
  }

  String? readToken() {
    try {
      return _reader?.call();
    } catch (_) {
      return null;
    }
  }

  void reset() {
    try {
      _resetter?.call();
    } catch (_) {
      // A disposed or unavailable platform view is already reset.
    }
  }
}

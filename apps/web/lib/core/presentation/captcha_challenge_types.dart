enum CaptchaRenderStatus { loading, ready, blocked }

typedef CaptchaTokenReader = String? Function();

/// Provides the current token directly from the rendered CAPTCHA widget.
///
/// The callback event keeps the form reactive, while this controller avoids
/// submitting an event value that has expired before the user presses submit.
class CaptchaChallengeController {
  CaptchaTokenReader? _readToken;
  Object? _binding;

  String? readToken() => _readToken?.call();

  void Function() bind(CaptchaTokenReader reader) {
    final binding = Object();
    _binding = binding;
    _readToken = reader;

    var active = true;
    return () {
      if (!active) return;
      active = false;
      if (identical(_binding, binding)) {
        _binding = null;
        _readToken = null;
      }
    };
  }
}

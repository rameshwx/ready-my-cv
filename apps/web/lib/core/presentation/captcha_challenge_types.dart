enum CaptchaRenderStatus { loading, ready, blocked }

CaptchaRenderStatus captchaRenderStatusFromBridgeValue(Object? value) {
  return switch (value) {
    'loading' => CaptchaRenderStatus.loading,
    'ready' => CaptchaRenderStatus.ready,
    _ => CaptchaRenderStatus.blocked,
  };
}

typedef CaptchaTokenReader = String? Function();

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

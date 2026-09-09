enum CaptchaRenderStatus { loading, ready, blocked }

class CaptchaChallengeController {
  String? Function()? _readToken;

  String? readToken() => _readToken?.call();

  void bind(String? Function() reader) {
    _readToken = reader;
  }

  void unbind() {
    _readToken = null;
  }
}

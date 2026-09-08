// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use

import 'dart:async';
import 'dart:html' as html;
import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

@JS('renderReadyMyCvCaptcha')
external void _renderReadyMyCvCaptcha(JSString elementId, JSString siteKey);

@JS('resetReadyMyCvCaptcha')
external void _resetReadyMyCvCaptcha(JSString elementId);

int _nextCaptchaId = 0;

class CaptchaChallenge extends StatefulWidget {
  const CaptchaChallenge({
    super.key,
    required this.siteKey,
    required this.onTokenChanged,
  });

  final String siteKey;
  final ValueChanged<String?> onTokenChanged;

  @override
  State<CaptchaChallenge> createState() => _CaptchaChallengeState();
}

class _CaptchaChallengeState extends State<CaptchaChallenge> {
  late final String _elementId;
  late final String _viewType;
  StreamSubscription<html.Event>? _subscription;

  @override
  void initState() {
    super.initState();
    final id = _nextCaptchaId++;
    _elementId = 'ready-my-cv-captcha-$id';
    _viewType = _elementId;
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (viewId) {
      return html.DivElement()..id = _elementId;
    });
    _subscription = html.window.on['ready-my-cv-captcha-$_elementId'].listen((
      event,
    ) {
      final detail = (event as html.CustomEvent).detail;
      final token = detail is String && detail.isNotEmpty ? detail : null;
      widget.onTokenChanged(token);
    });
  }

  @override
  void didUpdateWidget(covariant CaptchaChallenge oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.siteKey != widget.siteKey) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) _render();
      });
    }
  }

  void _render() {
    _renderReadyMyCvCaptcha(_elementId.toJS, widget.siteKey.toJS);
  }

  @override
  void dispose() {
    _subscription?.cancel();
    _resetReadyMyCvCaptcha(_elementId.toJS);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SizedBox(
    height: 82,
    child: HtmlElementView(
      viewType: _viewType,
      onPlatformViewCreated: (_) => _render(),
    ),
  );
}

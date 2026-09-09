// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use

import 'dart:async';
import 'dart:html' as html;
import 'dart:js_interop';
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'captcha_challenge_types.dart';

@JS('renderReadyMyCvCaptcha')
external void _renderReadyMyCvCaptcha(JSString elementId, JSString siteKey);

@JS('resetReadyMyCvCaptcha')
external void _resetReadyMyCvCaptcha(JSString elementId);

@JS('getReadyMyCvCaptchaToken')
external JSString _getReadyMyCvCaptchaToken(JSString elementId);

int _nextCaptchaId = 0;

class CaptchaChallenge extends StatefulWidget {
  const CaptchaChallenge({
    super.key,
    required this.siteKey,
    required this.onTokenChanged,
    this.onStatusChanged,
    this.controller,
  });

  final String siteKey;
  final ValueChanged<String?> onTokenChanged;
  final ValueChanged<CaptchaRenderStatus>? onStatusChanged;
  final CaptchaChallengeController? controller;

  @override
  State<CaptchaChallenge> createState() => _CaptchaChallengeState();
}

class _CaptchaChallengeState extends State<CaptchaChallenge> {
  late final String _elementId;
  late final String _viewType;
  late final CaptchaTokenReader _tokenReader;
  StreamSubscription<html.Event>? _subscription;
  StreamSubscription<html.Event>? _statusSubscription;
  void Function()? _unbindController;

  @override
  void initState() {
    super.initState();
    final id = _nextCaptchaId++;
    _elementId = 'ready-my-cv-captcha-$id';
    _viewType = _elementId;
    _tokenReader = _readToken;
    _unbindController = widget.controller?.bind(_tokenReader);
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (viewId) {
      return html.DivElement()
        ..id = _elementId
        ..style.width = '304px'
        ..style.height = '78px'
        ..style.maxWidth = '100%'
        ..style.display = 'block';
    });
    _subscription = html.window.on['ready-my-cv-captcha-$_elementId'].listen((
      event,
    ) {
      final detail = (event as html.CustomEvent).detail;
      final token = detail is String && detail.isNotEmpty ? detail : null;
      widget.onTokenChanged(token);
    });
    _statusSubscription = html
        .window
        .on['ready-my-cv-captcha-status-$_elementId']
        .listen((event) {
          final detail = (event as html.CustomEvent).detail;
          final status = captchaRenderStatusFromBridgeValue(detail);
          widget.onStatusChanged?.call(status);
        });
  }

  @override
  void didUpdateWidget(covariant CaptchaChallenge oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.controller != widget.controller) {
      _unbindController?.call();
      _unbindController = widget.controller?.bind(_tokenReader);
    }
    if (oldWidget.siteKey != widget.siteKey) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) _render();
      });
    }
  }

  String? _readToken() {
    final token = _getReadyMyCvCaptchaToken(_elementId.toJS).toDart;
    return token.isEmpty ? null : token;
  }

  void _render() {
    widget.onStatusChanged?.call(CaptchaRenderStatus.loading);
    _renderReadyMyCvCaptcha(_elementId.toJS, widget.siteKey.toJS);
  }

  @override
  void dispose() {
    _subscription?.cancel();
    _statusSubscription?.cancel();
    _unbindController?.call();
    _resetReadyMyCvCaptcha(_elementId.toJS);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SizedBox(
    width: double.infinity,
    height: 82,
    child: HtmlElementView(
      viewType: _viewType,
      onPlatformViewCreated: (_) => _render(),
    ),
  );
}

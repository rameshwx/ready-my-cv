(function () {
  const widgets = Object.create(null);
  const pending = Object.create(null);
  const apiSources = [
    'https://www.recaptcha.net/recaptcha/api.js',
    'https://www.google.com/recaptcha/api.js',
  ];
  const apiTimeoutMs = 10000;
  const renderRetryMs = 100;
  const maxRenderAttempts = 150;
  let apiSourceIndex = 0;
  let apiState = 'loading';
  let apiTimer = null;
  let apiScript = null;

  function notify(elementId, token) {
    window.dispatchEvent(new CustomEvent('ready-my-cv-captcha-' + elementId, {
      detail: token || '',
    }));
  }

  function notifyStatus(elementId, status) {
    window.dispatchEvent(new CustomEvent('ready-my-cv-captcha-status-' + elementId, {
      detail: status,
    }));
  }

  function apiIsReady() {
    return window.grecaptcha && typeof window.grecaptcha.render === 'function';
  }

  function clearApiTimer() {
    if (apiTimer !== null) {
      window.clearTimeout(apiTimer);
      apiTimer = null;
    }
  }

  function blockPending() {
    apiState = 'blocked';
    Object.keys(pending).forEach((elementId) => {
      delete pending[elementId];
      notifyStatus(elementId, 'blocked');
    });
  }

  function tryNextApiSource() {
    if (apiState === 'ready') return;
    clearApiTimer();
    if (apiSourceIndex < apiSources.length - 1) {
      apiSourceIndex += 1;
      loadApi();
      return;
    }
    blockPending();
  }

  function loadApi() {
    apiState = 'loading';
    clearApiTimer();
    if (apiScript) apiScript.remove();

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = apiSources[apiSourceIndex] +
      '?onload=readyMyCvCaptchaApiLoaded&render=explicit';
    script.onerror = tryNextApiSource;
    apiScript = script;
    document.head.appendChild(script);
    apiTimer = window.setTimeout(tryNextApiSource, apiTimeoutMs);
  }

  function drainPending() {
    Object.keys(pending).forEach((elementId) => {
      attemptRender(elementId, pending[elementId], 0);
    });
  }

  window.readyMyCvCaptchaApiLoaded = function () {
    if (!apiIsReady()) {
      window.setTimeout(window.readyMyCvCaptchaApiLoaded, renderRetryMs);
      return;
    }
    clearApiTimer();
    apiState = 'ready';
    drainPending();
  };

  function attemptRender(elementId, request, attempt) {
    if (pending[elementId] !== request) return;
    if (apiState === 'blocked') {
      delete pending[elementId];
      notifyStatus(elementId, 'blocked');
      return;
    }

    const element = document.getElementById(elementId);
    if (!element || !apiIsReady()) {
      if (attempt >= maxRenderAttempts) {
        delete pending[elementId];
        notifyStatus(elementId, 'blocked');
        return;
      }
      window.setTimeout(() => attemptRender(elementId, request, attempt + 1), renderRetryMs);
      return;
    }

    try {
      if (widgets[elementId] !== undefined) {
        window.grecaptcha.reset(widgets[elementId]);
      }
      widgets[elementId] = window.grecaptcha.render(element, {
        sitekey: request.siteKey,
        callback: (token) => notify(elementId, token),
        'expired-callback': () => notify(elementId, ''),
        'error-callback': () => notify(elementId, ''),
      });
      delete pending[elementId];
      notifyStatus(elementId, 'ready');
    } catch (_) {
      delete pending[elementId];
      notifyStatus(elementId, 'blocked');
    }
  }

  window.renderReadyMyCvCaptcha = function (elementId, siteKey) {
    pending[elementId] = { siteKey: siteKey };
    notifyStatus(elementId, 'loading');
    attemptRender(elementId, pending[elementId], 0);
  };

  window.resetReadyMyCvCaptcha = function (elementId) {
    delete pending[elementId];
    if (widgets[elementId] !== undefined && window.grecaptcha) {
      window.grecaptcha.reset(widgets[elementId]);
    }
    notify(elementId, '');
  };

  loadApi();
})();

(function () {
  const widgets = Object.create(null);

  function notify(elementId, token) {
    window.dispatchEvent(new CustomEvent('ready-my-cv-captcha-' + elementId, {
      detail: token || '',
    }));
  }

  function render(elementId, siteKey, attempt) {
    const element = document.getElementById(elementId);
    if (!element) return;
    if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
      if (attempt < 100) window.setTimeout(() => render(elementId, siteKey, attempt + 1), 100);
      return;
    }
    if (widgets[elementId] !== undefined) window.grecaptcha.reset(widgets[elementId]);
    widgets[elementId] = window.grecaptcha.render(element, {
      sitekey: siteKey,
      callback: (token) => notify(elementId, token),
      'expired-callback': () => notify(elementId, ''),
      'error-callback': () => notify(elementId, ''),
    });
  }

  window.renderReadyMyCvCaptcha = function (elementId, siteKey) {
    render(elementId, siteKey, 0);
  };

  window.resetReadyMyCvCaptcha = function (elementId) {
    if (widgets[elementId] !== undefined && window.grecaptcha) {
      window.grecaptcha.reset(widgets[elementId]);
    }
    notify(elementId, '');
  };
})();

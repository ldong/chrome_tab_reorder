if (navigator.appVersion.indexOf("Linux") < 0) {
  document.addEventListener("keydown", function(e) {
    // Return if no modifiers.
    if ((!e.shiftKey || ! e.metaKey) || e.ctrlKey || e.altKey) {
      return;
    }
    // Only send if we are interested.
    switch (e.keyCode) {
      // left right arrow
      case 37:
      case 39:
      // 0..9
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        chrome.extension.sendMessage(
          {keyCode: e.keyCode},
          function(response) {
            // No-op.
          });
        e.stopPropagation();
        e.preventDefault();
       break;
    }
  },
  true);
}

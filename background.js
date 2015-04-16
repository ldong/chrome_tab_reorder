
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    var relativeIndex;
    var absoluteIndex;
    switch (request.keyCode) {
      // left arrow
     case 37:
       console.log('Move tab left');
       moveTabToPosition(-1);
       break;
     // right arrow
     case 39:
       console.log('Move tab right');
       moveTabToPosition(1);
       break;
     // 0..9
     case 48:
       break;
     case 49:
       console.log('Move tab leftmost');
       moveTabToPosition(null, 0);
       break;
     case 50:
     case 51:
     case 52:
     case 53:
     case 54:
     case 55:
     case 56:
       absoluteIndex = request.keyCode - 49;
       console.log('Move tab to ' + absoluteIndex);
       moveTabToPosition(null, absoluteIndex);
       break;
     case 57:
        console.log('Move tab rightmost');
        chrome.tabs.getAllInWindow(
          undefined,
          function(allTabs) {
            moveTabToPosition(null, allTabs.length - 1);
          });
        break;
     default:
    }
    sendResponse({});
 });

 function moveTabToPosition(opt_relative, opt_absolute) {
    chrome.tabs.getSelected(
      undefined,
      function(tab) {
        var newTabIndex = opt_absolute != undefined ?
            opt_absolute : tab.index + opt_relative;
        if (newTabIndex < 0) {
          return;
        }
        chrome.tabs.move(
          tab.id,
          {index: newTabIndex});
      }
    );
 }

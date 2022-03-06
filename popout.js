chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  var obj = {};

  chrome.tabs.sendMessage(activeTab.id, { command: 'runCommands', data: obj });
});

// get the tab's url
function getCurrentTabsUrl() {}

// validate current page is product in selected websides
function validateUrl(url) {}

// decide the type of the website
function decideType(url) {}

// scrape current item
function scrapeSingleProductInfo(type, url) {}

// save item
function addProductList(obj) {}

// remove item
function removeProductList(obj) {}

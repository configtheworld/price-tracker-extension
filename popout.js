// Initial queries
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  var obj = {};

  chrome.tabs.sendMessage(activeTab.id, { command: 'runCommands', data: obj });
});

// controllers

// get the tab's url
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

// validate current page is product in selected websides
function validateUrl(url) {
  console.log(url);
}

// decide the type of the website
function decideType(url) {}

// scrape current item
function scrapeSingleProductInfo(type, url) {}

// save item
function addProductList(obj) {}

// remove item
function removeProductList(obj) {}

// event listeners

document.querySelector('.get-url').addEventListener('click', function () {
  getCurrentTabUrl(function (url) {
    validateUrl(url);
  });
});

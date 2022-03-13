// content.js
alert('Hello Price Tracker!');

// content script for page interactions
chrome.runtime.onMessage.addListener(function (request, sender, response) {
  console.log('message-received');
  console.log(request, sender, response);
});

// check all stored items prices on browser runtime
function checkPrices() {}

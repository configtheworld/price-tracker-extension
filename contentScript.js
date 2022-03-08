chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(msg, sender, response);
  if (msg.command == 'runCommands') {
    var scrapeObj = msg.data;
    console.log(scrapeObj + 'asdasda');
  }
});

// check all stored items prices on browser runtime
function checkPrices() {}

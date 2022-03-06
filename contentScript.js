chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == 'runCommands') {
    var scrapeObj = msg.data;
    console.log(scrapeObj);
  }
});

// check all stored items prices on browser runtime
function checkPrices() {}

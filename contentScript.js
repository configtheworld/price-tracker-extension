chorome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name == 'runCommands') {
    var scrapeObj = msg.data;
  }
});
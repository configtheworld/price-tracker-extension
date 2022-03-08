var all_products = {};

// controllers
chrome.storage.sync.get('products', function (products) {
  if (products) {
    all_products = products;
    console.log(all_products);
  } else {
    all_products = { items: [] };

    chrome.storage.sync.set({ products: all_products }, function () {
      // Notify that we saved.
      message('Settings saved');
      console.log('products not found create new');
    });
  }
});
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
  const domain = url.split('.')[1];
  if (domain != undefined) {
    decideType(domain);
  } else {
    // Ops tekrar deneyiniz yazdır
    console.log('Oops');
  }
}

// decide the type of the website
function decideType(domain) {
  if (domain === 'hepsiburada') {
    // send message
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      var message = activeTab.title;
      chrome.tabs.sendMessage(activeTab.id, {
        title: message,
        command: 'runCommands',
        data: domain,
      });
    });
  } else if (domain === 'trendyol') {
    // TODO
    console.log('trendyol');
  } else if (domain === 'n11') {
    // TODO
    console.log('n11');
  } else {
    console.log('oops');
  }
}

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

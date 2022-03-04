document.querySelector('.new-command').addEventListener('click', function () {
  //var len = document.querySelector('.commands-list').children;

  var id = Math.floor(1000 + Math.random() * 9000);

  var newItem = `<div class="command-item" id="${id + 1}" >
    <input class="value-1" placeholder="https://..."/>
  <select>
      <option class="trendyol">trendyol</option>
      <option class="hepsiburada">hepsiburada</option>
      <option class="n11">n11</option>
  </select>
  
</div>`;
  document.querySelector('.commands-list').innerHTML += newItem;
});

document.querySelector('.run-command').addEventListener('click', function () {
  var commandsArr = [];
  var commands = document.querySelectorAll('.commands-list .command-item');

  for (var i = 0; i < commands.length; i++) {
    var itemObj = {};
    itemObj.type = commands[i].querySelector('select').value;
    itemObj.url = commands[i].querySelector('input').value;
    commandsArr.push(itemObj);
  }
});

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  var obj = {};

  chrome.tabs.sendMessage(activeTab.id, { command: 'runCommands', data: obj });
});

// <button class="remove-command"  name="${id}" onClick="reply_click(this.id)">Sil</button>
// document
//   .querySelector('.remove-command')
//   .addEventListener('click', function () {
//     document.getElementsByName(clicked_id + 1)[0].remove();
//   });

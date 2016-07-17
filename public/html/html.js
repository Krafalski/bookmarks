function htmlBuilder (){
  var html = '<!DOCTYPE html>';
  html += '<html><head><meta charset="utf-8">';
  html += '<title>Bookmarks</title>';
  html += '<link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans+Condensed:300" rel="stylesheet">'
  html +='<link href="normalize.css" rel="stylesheet">';
  html += '<link href="styles.css" rel="stylesheet">';
  html += '</head>';
  html += '<body>';
  html += '<div id="container">';
  html += '<div id="wrapper">';
  html += '<h1>Bookmarks</h1>';
  html += '<div>';
  html += '<form action="/add" method="POST">';
  html += '<span class=""> Add a new bookmark </span>';
  html += '<input id="title" name="title" type="text" placeholder="website" class="input" required="">';
  html += '<input id="url" name="url" type="text" pattern="http[s]*://.+" placeholder="http://" class="input" required="">';
  html += '<label class="add" for="submit"></label>';
  html += '<button id="submit" type="submit" class="">Add!</button>';
  html += '</form>';
  html += '</div>';
  return html;
};

function htmlCloser (){
var html = '';
html +=  '</div>';//close wrapper
html += '</div>'; //close container
html += '<script src="app.js"></script>'
html += '</body>'
html += '</html>'
return html;
};

module.exports.builder = htmlBuilder;
module.exports.closer = htmlCloser;

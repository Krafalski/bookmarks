var html            = require ('./html.js');

function bookmarkList(row, j){
  var site    ='';
  site += '<tr class="each-site">';
  site += '<td><a target="_blank" href="' + row[j].url + '">' + row[j].title +'</a></td>'
  site += '<td> </td> '
  site += '<td><a href="delete/' + row[j].id + '" class="delete"> x </a></td>'
  site += '</tr>';
  return site;
};



module.exports.list = bookmarkList;

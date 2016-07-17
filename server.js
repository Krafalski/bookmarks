var bodyParser    = require ('body-parser');
var bookmarkList  = require ('./public/html/bookmarklist.js')
var express       = require ('express');
var html          = require ('./public/html/html.js');
var sqlite3       = require ('sqlite3').verbose();
var db            = new sqlite3.Database('bookmarks.db');

var alert ="none";

db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='bookmarks'",
 function(err, rows) {
    if(err !== null) {
      console.log(err);
    } else if(rows === undefined) {
      db.run('CREATE TABLE "bookmarks" ' +
     '("id" INTEGER PRIMARY KEY AUTOINCREMENT, ' +
     '"title" VARCHAR(255), ' +
     'url VARCHAR(255))',
      function(err) {
       if(err !== null) {console.log(err);
       } else { console.log("SQL Table 'bookmarks' initialized."); }
      });
    } else {
      console.log("SQL Table 'bookmarks' already initialized.");
      }
});

var app           = express();
var port          = process.env.PORT || 3993;

app.use(express.static(__dirname + '/public/assets/images'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/html'));
app.use(express.static(__dirname + '/public/js'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res, next) {
  db.all('SELECT * FROM bookmarks ORDER BY title COLLATE NOCASE ', function(err, row) {
    if(err !== null) {
      next(err);
    } else {
        // console.log(row);
        var page = html.builder();
        if (alert==="add"){
        page += '<div class="alert">bookmark successfully added! </div><table>'
      } else if (alert==="delete"){
        page += '<div class="alert2">bookmark successfully deleted! </div><table>'
      } else {
        page += '<div class="alert3"> test Welcome! </div><table>'
      }
        for (var j=0; j <row.length; j++){
        page += bookmarkList.list(row, j);
      }
        page += '</table>'
        page += html.closer();
        alert="none";
        res.send(page);
    }
  });
});

app.post('/add', function(req, res, next) {
  title = req.body.title;
  url = req.body.url;
  sqlRequest = "INSERT INTO 'bookmarks' (title, url) " +
               "VALUES('" + title + "', '" + url + "')"
  db.run(sqlRequest, function(err) {
    if(err !== null) {
      next(err);
    }
    alert = "add";
    res.redirect('back');
  });
});

app.get('/delete/:id', function(req, res, next) {
  db.run("DELETE FROM bookmarks WHERE id='" + req.params.id + "'",
         function(err) {
          if(err !== null) {
            next(err);
          }  else {
            alert = "delete";
            res.redirect('back');
          }
  });
});

app.listen(port, function(){
  console.log('Please go to localhost:%s',  port);
});

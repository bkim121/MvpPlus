var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/signup', function (req, res) {
  var arr = [];
  arr.push(req.body.username, req.body.password);
  if (req.body.password.length < 1){
    res.send('NOT LONG ENOUGH')
  } else {
    db.checkUser((err, data) => {
      var exist = false
      data.forEach(entry => {
        if (entry.username === req.body.username){
          exist = true;
        }
      })
      if (!exist) {
        db.addNewUser(arr, (err, data) => {
          console.log(data)
        })
      } else {
        res.send('ALREADY TAKEN')
      }
    })
  }

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


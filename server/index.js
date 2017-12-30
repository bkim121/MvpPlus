var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/signup', function (req, res) {
  var arr = [];
  arr.push(req.body.username, req.body.password);
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
        res.send('new')
      })
    } else {
      res.send('ALREADY TAKEN')
    }
  })
});


app.post('/login', (req, res) => {
  console.log(req.body)
  db.findUser([req.body.username], (err, data) => {
    var password = data[0].password;
    if (password === req.body.password){
      res.send('match')
    } else {
      res.send('error')
    }
  })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});


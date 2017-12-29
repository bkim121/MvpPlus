var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'linkspeak'
});

var addNewUser = (params, callback) => {
  connection.query('INSERT INTO user SET username = ?, password = ?', params, (err, results) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var checkUser = (callback) => {
  connection.query('SELECT username FROM user', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports.addNewUser = addNewUser;
module.exports.checkUser = checkUser;
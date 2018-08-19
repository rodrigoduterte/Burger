var mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "h6c6uvut2uPrawug6",
    database : "burgers_db",
    multipleStatements: true
  });
}

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;
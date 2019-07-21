// Set up MySQL connection.
const mysql = require("mysql");
let connection;

// Set up MySQL connection for deployment on Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    port: "3306",
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
}

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

// Make connection.
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
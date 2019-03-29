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
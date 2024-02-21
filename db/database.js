const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localname',
  user: 'root',
  password: '',
  database: 'test'
});

connection.connect();

module.exports = connection;
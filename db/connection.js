const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: '127.0.0.1',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: 'love1spell87',
    database: 'election'
  });


  module.exports = db;
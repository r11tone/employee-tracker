const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'password',
      database: 'tracker_db'
    });

    db.connect(function (err) {
        if (err) throw err;
      });
      
      module.exports = db;
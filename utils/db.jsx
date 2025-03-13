const mysql = require('mysql2');

const db = mysql.createConnection({
    host           : "localhost",
    user           : "root",
    port           : "3306",
    password       : "0194235sR$",
    database       : "todolist",
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = db;
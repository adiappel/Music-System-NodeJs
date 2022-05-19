const sql = require('mysql2');

//create connection to DB
const db = sql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '!qwerty12345!',
    database: 'Basic_Music_System'
});

module.exports = db;
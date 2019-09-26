const router = require('express').Router()
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.MYPASSWORD,
    database: 'run4it_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id' + connection.threadId);
    // connection.query('SELECT * FROM products', function(err, data) {
    //     console.table(data)
    // })
});

//fetch all contacts
router.get('/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts', function(err,data) {
        res.json(data)
    })
})

module.exports = router;
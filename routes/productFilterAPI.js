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


router.get('/productFilter', (req, res) => {
    connection.query("SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id WHERE products.product_type = 'mens'", function (err, data) {
        res.json(data)
    })
})

module.exports=router;
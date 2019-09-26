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

//finding a product through the product_id
router.get('/products/:product_id', (req, res) => {
    connection.query('SELECT * FROM products', function(err, data) { 
    const product = data.find(c => c.product_id === parseInt(req.params.product_id));
    if (!product) res.status(404).send('The product with the given ID was not found');
    res.send(product);
    })
});

module.exports = router;
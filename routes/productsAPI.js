const router = require('express').Router() //router is code that runs your routes. router is what actually invokes the callback function to process the request.
const connection = require('../connectionDb') //creating a connection to MySQL database

//fetch all products
router.get('/products', (req, res) => {
    connection.query('SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id;', function(err, data) {
        res.json(data)
    })
})

module.exports = router;
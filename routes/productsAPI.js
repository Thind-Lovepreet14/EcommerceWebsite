const router = require('express').Router()
const connection = require('../connectionDb')

//fetch all products
router.get('/products', (req, res) => {
    connection.query('SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id;', function(err, data) {
        res.json(data)
    })
})

module.exports = router;
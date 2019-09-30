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


// const typeQuery = `SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id WHERE products.product_type = ?`;
// const priceHighToLow = `SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id ORDER BY price.price DESC;`
// const priceLowToHigh = `SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id ORDER BY price.price ASC;`
 
// router.get('/productFilter', (req, res) => {
//     let type = req.query.type //returns type as mens or womens
//     let priceMax = req.query.priceMax //returns highest price
//     let priceMin = req.query.priceMin //returns lowest price

//     if(type && !priceMax && !priceMin) {
//         connection.query(typeQuery,[type], function (err, data) {
//             if(err) throw err;
//             res.send(data)
//         })
//     } else if (priceMax && !type && !priceMin) {
//         connection.query(priceHighToLow,[priceMax], function(err, data) {
//             if(err) throw err;
//             res.send(data)
//         })
//     } else if (priceMin && !type && !priceMax) {
//         connection.query(priceLowToHigh, [priceMin], function(err, data) {
//             if(err) throw err;
//             res.send(data)
//         })
//     }
//     }
//     )


 
const baseQuery = 'SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id WHERE 1 ';

router.get('/productFilter', (req, res) => {
    let type = req.query.type //returns type as mens or womens
    let priceMax = req.query.priceMax //returns highest price
    let priceMin = req.query.priceMin //returns lowest price
    let dbQuery = baseQuery
    let dbParams = []
    if(type) {
        dbQuery += 'AND products.product_type = ? '
        dbParams.push(type)
       
    } 
    if (priceMax) {
        dbQuery += 'ORDER BY price.price DESC'
        
    } else if (priceMin) {
        dbQuery += 'ORDER BY price.price ASC'
    }
    connection.query(dbQuery,dbParams, function (err, data) {
        if(err) throw err;
        res.send(data)
    })
    }
    )

    

module.exports=router;
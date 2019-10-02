const router = require('express').Router()
const connection = require('../connectionDb')

//fetch all contacts
router.get('/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts', function(err,data) {
        res.json(data)
    })
})


module.exports = router;
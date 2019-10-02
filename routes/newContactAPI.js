const router = require('express').Router()
const connection = require('../connectionDb')


//post new comment
router.post('/newContact', (req, res) => {
    const { contact_fname, contact_lname, contact_email, contact_comment} = req.body
    console.log("test-----",req.body)
    if (!contact_fname) {
        return res.status(400).send({
            error: true,
            message: 'Please provide contact'
        });
    }
    connection.query(`INSERT INTO contacts(contact_fname, contact_lname, contact_email, contact_comment) VALUES(?,?,?,?)`,
    [contact_fname, contact_lname,contact_email, contact_comment], function(err,results) {
       if(err) throw err;
       console.log(results)
       res.send(results)
    });
})

module.exports = router;


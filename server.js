require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000;
const url = require('url')
const helmet = require('helmet')
const morgan = require('morgan')

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(helmet())
app.use(morgan())


const productsAPI = require("./routes/productsAPI")
const contactsAPI = require('./routes/contactsAPI')
const products_idAPI = require('./routes/product_idAPI')
const productFilterAPI = require('./routes/productFilterAPI')
const contactInfoAPI = require('./routes/contactInfoAPI')
const newContactAPI = require('./routes/newContactAPI')


//Use once in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


app.use('/api', productsAPI)
app.use('/api', contactsAPI)
app.use('/api', products_idAPI)
app.use('/api', productFilterAPI)
app.use('/api', contactInfoAPI)
app.use('/api', newContactAPI)

//live connection react server and node server
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})

module.exports = app;
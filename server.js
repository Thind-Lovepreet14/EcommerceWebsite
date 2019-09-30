require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000;


const productsAPI = require("./routes/productsAPI")
const contactsAPI = require('./routes/contactsAPI')
const products_idAPI = require('./routes/product_idAPI')
const productFilterAPI = require('./routes/productFilterAPI')

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use('/api', productsAPI)
app.use('/api', contactsAPI)
app.use('/api', products_idAPI)
app.use('/api', productFilterAPI)

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
});

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})
//Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000;
const url = require('url')
const helmet = require('helmet')
const morgan = require('morgan')

//Ensures website is read in UTF-8
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(helmet()) //security
app.use(morgan()) //logs every request

//Pulling in APIs from the routes directory
const productsAPI = require("./routes/productsAPI")
const contactsAPI = require('./routes/contactsAPI')
const products_idAPI = require('./routes/product_idAPI')
const productFilterAPI = require('./routes/productFilterAPI')
const contactInfoAPI = require('./routes/contactInfoAPI')
const newContactAPI = require('./routes/newContactAPI')


//Use once in production to create a static build
//static simply serves files (static resources) from disk. You give it a path (sometimes called the mount point), 
//and it serves the files in that folder.
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

//is a method to configure the middleware used by the routes of the Express HTTP server object
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

//Binds and listens for connections on the specified host and port.
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})

//exporting for use in testing
module.exports = app;
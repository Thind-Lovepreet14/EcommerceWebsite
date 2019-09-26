require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const cors = require('cors')

const productsAPI = require("./routes/productsAPI")
const contactsAPI = require('./routes/contactsAPI')
const products_idAPI = require('./routes/product_idAPI')


app.use(cors())
app.use("/api", productsAPI)
app.use('/api', contactsAPI)
app.use('/api', products_idAPI)



app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})
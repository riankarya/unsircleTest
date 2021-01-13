const express = require('express')
const app = express()
const Product = require('./routes/route')
const errorHandler = require('./middlewares/errorHandler')
const port = 3003

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', Product)
app.use(errorHandler)

console.log(`App is running at port ${port}`)
module.exports = app
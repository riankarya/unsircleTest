const express = require('express')
const app = express()
const Permission = require('./routes/route')
const errorHandler = require('./middlewares/errorHandler')
const port = 3002

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', Permission)
app.use(errorHandler)

console.log(`App is running at port ${port}`)
module.exports = app
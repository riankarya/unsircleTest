const express = require('express')
const app = express()
const User = require('./routes/route')
const errorHandler = require('./middlewares/errorHandler')
const port = 3001

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', User)
app.use(errorHandler)

console.log(`App is running at port ${port}`)
module.exports = app
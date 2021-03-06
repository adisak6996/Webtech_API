const express = require('express')
const bodyParser = require('body-parser')
const contactsRouter = require('../contacts')
const app = express()

app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json())

app.use('/', contactsRouter)

module.exports = app

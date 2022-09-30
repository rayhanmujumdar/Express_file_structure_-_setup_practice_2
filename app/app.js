const express = require('express')
const app = express()
const path = require('path')
const {notFoundHandler,errorHandler} = require('./error')
//middleware
app.use(require('./middleware'))
const pathDirectory = path.join(__dirname,'../public')
app.use(express.static(pathDirectory))
//router
app.use(require('./router'))

//errorHandle
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3002
mongoose.connect("mongodb://127.0.0.1:27017/nirmaldb1")
const UserRoute = require('./Router/users')
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.listen(PORT, function () {
    console.log('sever is running......')

})
app.use('/', UserRoute)

const Auth = (req, res, next) => {
    const token = req.headers.token
    if (token == undefined) {
        res.send('Unauthorise Token...')
    }
    if (jwt.verify(token, 'web')) {
        next();
    }
}

app.use(Auth)
const express = require('express');
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
app.use(bodyParser.json())
require('dotenv').config()


app.get('/',(req,res) => {
    res.send('Welcome to my hotel...How can i help you ? we have a list of menus')
})

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server is listening on port 3000")
})
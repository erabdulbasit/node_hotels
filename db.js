const mongoose = require('mongoose')
require('dotenv').config()

//const mongodbUrl = 'mongodb://127.0.0.1:27017/hotels'
const mongo_URL= process.env.MONGODB_URL

mongoose.connect(mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to mongodb server.')
})

db.on("error", (err) => {
    console.log('MongoDb connection error',err)
})

db.on('disconnected',() => {
    console.log('MongoDb disconnected')
})

module.exports = db;

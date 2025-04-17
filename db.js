const mongoose = require('mongoose')

const mongodbUrl = 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to mongodb server.')
})

db.on("error", () => {
    console.log('MongoDb connection error',err)
})

db.on('disconnected',() => {
    console.log('MongoDb disconnected')
})

module.exports = db;

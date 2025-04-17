const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const personSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type:String,
    },
    work:{
        type:String,
        emum:['chef','waiter','manager'],
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true,
    }
})

const Person = mongoose.model("Person",personSchema)
module.exports = Person
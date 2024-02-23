/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    timestamp : {
        type : Date,
        default : Date.now
    }


})

const model1 = mongoose.model('user',UserSchema)
module.exports =  model1;
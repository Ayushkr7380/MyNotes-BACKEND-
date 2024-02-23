/* eslint-disable no-undef */
const mongoose = require('mongoose')

const UserNotes = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    tags : {
        type : String,
        required : true
    },
    timestamp : {
        type : Date,
        default : Date.now
    }


})

module.exports = mongoose.model('user',UserNotes) 
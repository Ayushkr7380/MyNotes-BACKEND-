/* eslint-disable no-undef */
const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/MyNotes'


const connecttomongoose = () =>{
    mongoose.connect(mongoURI);
       
    
}

module.exports = connecttomongoose;
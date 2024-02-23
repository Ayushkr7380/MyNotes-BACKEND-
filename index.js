/* eslint-disable no-undef */
const connecttomongoose = require('./db')
const auth = require('./routes/auth')
const notes = require('./routes/notes')
const express = require('express')

connecttomongoose();
 
const app = express();

const LOCALHOST = '127.0.0.1'
const PORT = 3000;

app.use(express.json())


//available routes
app.use('/api/auth',auth)
app.use('/api/notes',notes)


app.listen(PORT,()=>{
    console.log(`Server ${LOCALHOST} is running at Port ${PORT}`)
})

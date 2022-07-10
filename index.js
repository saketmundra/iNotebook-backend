const connecttoMongo=require('./db')

var cors = require('cors')
const express = require('express')
require('dotenv').config();

connecttoMongo();  
const app = express()

app.use(cors())

app.use(express.json())//to get data is json format

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))         


app.listen( process.env.PORT ||5000, () => {
  console.log(`App listening `)
})  


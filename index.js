const connecttoMongo=require('./db')

var cors = require('cors')
const express = require('express')
require('dotenv').config();

connecttoMongo();  
const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))         

app.listen( process.env.PORT ||5000, () => {
  console.log(`App listening to port 5000`)
})  


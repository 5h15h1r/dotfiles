require('dotenv').config()

const express = require('express')
const app = express()

const notFound = require('./middleware/notFound')
const handleError  = require('./middleware/handleError')

//
app.use(express.json())

app.use('/', (req, res)=>{
    res.send
})
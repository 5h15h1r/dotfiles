const express = require('express')

const app = express()


app.use(express.json())

app.get('/', (req, res)=>{
    res.send("<h1>store Api</h1>")
})

app.get('/api/v1/products', bookroute)
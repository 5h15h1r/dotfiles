require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFound = require('./middleware/notFound')
const handleError  = require('./middleware/handleError')

//
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("<h1>store Api</h1>")
})

// Products route
app.use('/api/v1/products', productsRouter)



app.use(notFound)
app.use(handleError)

// env port


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on http://localhost:${port}/`))
    } catch (error) {
        console.log(error)
    }
}

start()
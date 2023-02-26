const express = require('express')

const bookroute = require('./routes/bookroute')

const app = express()


app.use(express.json())

app.get('/', (req, res)=>{
    res.send("<h1>store Api</h1>")
})

app.get('/api/v1/products', bookroute)


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on http://localhost:${port}/`))
    } catch (error) {
        console.log(error)
    }
}
start()
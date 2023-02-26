const express = require('express')

const bookroute = require('./routes/bookroute')
const notFound = require('./middleware/notFound')
const handleError = require('./middleware/handleError')

const app = express()

app.use(express.json())


app.get('/', (req, res)=>{
    res.send("<h1>Book Api</h1>")
})

app.get('/api/v1/books', bookroute)

app.use(notFound)
app.use(handleError)


const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        
        app.listen(port,console.log(`server is listening on http://localhost:${port}/`))
    } catch (error) {
        console.log(error)
    }
}
start()
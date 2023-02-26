const express = require('express')

const bookroute = require('./routes/bookroute')
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound


const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("<h1>Book Api</h1>")
})

app.get('/api/v1/books', bookroute)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        
        app.listen(port,console.log(`server is listening on http://localhost:${port}/`))
    } catch (error) {
        console.log(error)
    }
}
start()
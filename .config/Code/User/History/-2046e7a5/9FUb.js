require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
app.use(express.json())

const connectDB = require('./config/connect')
const userRoutes = require('./routes/userRoutes')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
const chatRoutes = require('./routes/chatRoutes')
const msgRoutes = require('./routes/msgRoutes')
connectDB()
const port = process.env.PORT | 3001

// app.use('/',(req,res)=>{
//     res.json({msg:"hello"})
// })

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/chat', chatRoutes)
app.use('/api/v1/message', msgRoutes)

app.use(notFound)
app.use(errorHandler)

const server = app.listen(port,console.log(`server is listening on http://localhost:${port}/`))

const io = require('socket.io')(server,{
    pingTimrOut: "60000",
    cors:{
        origin: "http://localhost:3000",
    }
});

io.on('connection', (socket) => {
    console.log("connected");
    socket.on( 'setup',(userData)=>{
        
        socket.join(userData._id);
        socket.emit("connected")
        
    })

    socket.on('join chat', (room)=>{
        socket.join(room)
        console.log("user joined room : " + room);
    })

    socket.on("new message", (newMessageRecieved)=>{
        var chat = 
    })
})

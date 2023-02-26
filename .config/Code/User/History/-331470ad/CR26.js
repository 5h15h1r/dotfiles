const colors = require('colors')
const mongoose = require('mongoose')
const {JWT_SECRET,MONGO_URI} = require('./keys')
mongoose.set('strictQuery', false);
const connectDB = async () => {
 
}

const start = async ()=>{
    try {
        const connect = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          
          console.log(connect.connection.host);
    } catch (error) {
        console.log(error)
        process.exit()
    }
}
start()
module.exports = connectDB
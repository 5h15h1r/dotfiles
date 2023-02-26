const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const connectDB = async () => {
 
}

const start = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
    } catch (error) {
        console.log(error)
    }
}
start()
module.exports = connectDB

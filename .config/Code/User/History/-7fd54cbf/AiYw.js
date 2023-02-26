const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on http://localhost:${port}/`))
    } catch (error) {
        console.log(error)
    }
}
start()
module.exports = connectDB

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const connectDB = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

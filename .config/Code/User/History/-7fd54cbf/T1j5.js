const mongoose = require('mongoose')
MongoParseError: options usecreateindex, usefindandmodify are not supported
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

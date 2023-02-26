require('dotenv').config()

const connectDB = require('./db/connect')
const Books = require('./models/books')

const jsonBooks = require('./books.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Books.deleteMany()
    await Books.create(jsonBooks)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()



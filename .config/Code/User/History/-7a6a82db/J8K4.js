const Books = require('../models/books')

const getBookName = async (req, res) => {
    // const {search} = req.query
    // const queryObject = {}
    // if (search){
    //     queryObject.search = { $regex: search, $options: 'i' }
    // }
    const books = await Books.find()
    res.status(200).json({books})
}

module.exports = getBookName; 
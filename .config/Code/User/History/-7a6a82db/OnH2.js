const Books = require('../models/books')

const getBookName = async (req, res) => {
    const {search} = req.query
    const queryObject = {}
    if (search){
        queryObject.search = { $regex: search, $options: 'i' }
    }
    const books = await Books.find({queryObject})
    res.status(200).json({})
}

module.exports = getBookName; 
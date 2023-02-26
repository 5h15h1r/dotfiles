const Books = require('../models/books')

const getBookName = async (req, res) => {
    const {search} = req.query
    const queryObject = {}
    if (search){
        queryObject.search = { $regex: search, $options: 'i' }
    }
    console.log(queryObject.search);
    const books = await Books.find(queryObject)
    res.status(200).json({nhBits:books.length ,books})
}

module.exports = getBookName; 
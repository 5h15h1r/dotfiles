const Books = require('../models/books')

const getBookName = async (req, res) => {
    const {search} = req.query
    const queryObject = {}
    if (search){
        queryObject.search = { $regex: search, $options: 'i' }
    }
    console.log(search);
    const books = await Books.find(queryObject.search)
    res.status(200).json({nhBits:books.length ,books})
}

module.exports = getBookName; 
const Books = require('../models/books')

const getBookName = async (req, res) => {
    const {name} = req.query
    const queryObject = {}
    if (name){
        queryObject.name = { $regex: name, $options: 'i' }
    }
    console.log(queryObject);
    const books = await Books.find(queryObject)
    // console.log(books);
    res.status(200).json({nhBits:books.length ,books})
}

module.exports = getBookName; 
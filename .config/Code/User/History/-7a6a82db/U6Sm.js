const Books = require('../models/books')

const getBookName = async (req, res) => {
    const {name} = req.query
    const queryObject = {}
    if (search){
        queryObject.name = { $regex: name, $options: 'i' }
    }
    console.log(queryObject);
    const books = await Books.find({ name: { '$regex': 'ki', '$options': 'i' } })
    // console.log(books);
    res.status(200).json({nhBits:books.length ,books})
}

module.exports = getBookName; 
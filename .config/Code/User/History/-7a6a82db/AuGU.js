const getBookName = async (req, res) => {
    const {search} = req.query
    const queryObject = {}
    if (search){
        queryObject.search = { $regex: search, $options: 'i' }
    }
    const products = await Product.find({})
    res.status(200).json({})
}

module.exports = getBookName; 
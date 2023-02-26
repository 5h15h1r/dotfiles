const getBookName = async (req, res) => {
    const {search} = req.query
    const queryObject = {}
    if (search){
        queryObject.search = { $regex: search, $options: 'i' }
    }
    const products = await Product.find({})
    return
}

module.exports = getBookName; 
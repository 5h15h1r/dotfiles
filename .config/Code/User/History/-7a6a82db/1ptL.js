const getBookName = async (req, res) => {
    const {search} = req.query
    const queryObject = {}
    if (search){
        queryObject.name = { $regex: name, $options: 'i' }
    }
}

module.exports = getBookName; 
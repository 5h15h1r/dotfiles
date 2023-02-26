const Product = require('../models/product')


const getAllProductsStatic = async (req,res) =>{
    const sort = req.query
    
    const products = await Product.find({}).sort('name')
    
    res.status(200).json({products})
}

const getAllProducts = async (req,res) =>{
    const {company, featured, name, sort} = req.query
    const queryObject = {}
    if (featured){
        queryObject.featured = featured == 'true'? true : false
    }
    if (company){
        queryObject.company = company
    }
    if (name){
        queryObject.name = { $regex: name, $options: 'i' }
        console.log(queryObject)
    }
    let result = Product.find(queryObject)

    if (sort){
        const sortlist = sort.split(',').join(' ')
        result = result.sort(sortlist)
    }
    else{
        result = result.sort("createdAt")
    }

    const products = await Product.find(queryObject)
    res.status(200).json({nhBits:products.length ,products})
}

module.exports = {getAllProducts, getAllProductsStatic}
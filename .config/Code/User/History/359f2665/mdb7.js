const Product = require('../models/product')


const getAllProductsStatic = async (req,res) =>{
    const sort = req.query
    
    const products = await Product.find({}).sort('name').select('name price').limit(1)
    
    res.status(200).json({products})
}

const getAllProducts = async (req,res) =>{
    const {company, featured, name, sort, fields, limit} = req.query
    const queryObject = {}
    if (featured){
        queryObject.featured = featured == 'true'? true : false
    }
    if (company){
        queryObject.company = company
    }
    if (name){
        queryObject.name = { $regex: name, $options: 'i' }
    }
    let result = Product.find(queryObject)

    if (sort){
        const sortlist = sort.split(',').join(' ')
        result = result.sort(sortlist)
    }
    else{
        result = result.sort("createdAt")
    }
    if (fields){
        const fieldlist = fields.split(',').join(' ')
        result = result.select(fieldlist)
    }
    if (limit){
        result = result.limit(limit)
    }

    const products = await result
    res.status(200).json({nhBits:products.length ,products})
}

module.exports = {getAllProducts, getAllProductsStatic}
const Product = require('../models/product')


const getAllProductsStatic = async (req,res) =>{
    const products = await Product.find({})
    res.status(200).json({products})
}

const getAllProducts = async (req,res) =>{
    const {company, featured} = req.query
    const queryObject = {}
    if (featured){
        queryObject.featured = featured == 'true'? true : false
    }
    if (company){
        queryObject.c = company
    }
    const products = await Product.find(req.query)
    res.status(200).json({products})
}

module.exports = {getAllProducts, getAllProductsStatic}
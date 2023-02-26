const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'prouduct name must be provided']
    },
    price:{
        type:Number,
        required:[true,'prouduct price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum: {
            values:['ikea','liddy','marcos','caressa'],
            msg:"{Value not supported}"
        }
    }
})

module.exports = mongoose.model('Product',productSchema)
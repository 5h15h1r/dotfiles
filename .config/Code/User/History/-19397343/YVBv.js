const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'book name must be provided']
    },
    category:{
        type: String,
        required:[true,'category name must be provided']
    },
    rentpday:{
        type:Number,
        default: 2
    }
})

module.exports = mongoose.model('Books',bookSchema)
import mongoose from 'mongoose';

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
        type:String,
        required:[true,'prouduct name must be provided']
    },
    name:{
        type:String,
        required:[true,'prouduct name must be provided']
    }
})
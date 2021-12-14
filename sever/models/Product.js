const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameProduct:{
        type:String,
        required:true,
    },
    imageProduct:{
        type:String,
        required:true,
    },
    descriptionProduct:{
        type:String,
    },
    sizeProduct:{
        type:String,
    },
    priceProduct:{
        type:String,
    }
})
module.exports = mongoose.model('product' , ProductSchema)
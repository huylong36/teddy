const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameProduct:{
        type:String,
    },
    imageProduct:{
        type:String,
    },
    statusProduct:{
        type:String,
    },
    priceProduct:{
        type:String,
    }
})
module.exports = mongoose.model('product' , ProductSchema)


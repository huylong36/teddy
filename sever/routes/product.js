const express = require('express')
const router = express.Router()
const Product = require('../models/Product')



// tao
router.post('/' , async (req,res)=>{
    const {nameProduct,imageProduct,descriptionProduct,sizeProduct ,priceProduct} = req.body
    try {
        const newProduct = new Product({
            nameProduct,
            imageProduct,
            descriptionProduct,
            sizeProduct,
            priceProduct:priceProduct || 0, 
        })
        await newProduct.save();
        res.json({success:true , message:"create success" ,newProduct}) 
    } catch (error) {
        console.log(error)
    }
})
//lay
router.get('/' , async (req,res) =>{
    try {
         const products = await Product.find()
         res.json({success:true,message:"okeee" , products}) 
    } catch (error) {
        console.log(error);
    }
})
//chi tiet 
router.get('/:id')
module.exports = router
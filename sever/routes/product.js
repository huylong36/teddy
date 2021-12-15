const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// tao
router.post("/", async (req, res) => {
  const { nameProduct, imageProduct, statusProduct, priceProduct } = req.body;
  try {
    const newProduct = new Product({
      nameProduct,
      imageProduct,
      statusProduct,
      priceProduct: priceProduct || 0,
    });
    await newProduct.save();
    res.json({ success: true, message: "create success", newProduct });
  } catch (error) {
    console.log(error);
  }
});
//lay
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, message: "okeee", products });
  } catch (error) {
    console.log(error);
  }
});
//chi tiet
router.post("/product-detail", async (req, res) => {
  const productDetailId = { _id: req.body.id };
  const details = await Product.findOne(productDetailId);
  return res.json({
    success: true,
    message: "details product success",
    details,
  });
});
module.exports = router;

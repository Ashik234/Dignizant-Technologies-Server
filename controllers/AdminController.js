const productModel = require("../models/productModel");

const productAdd = async (req, res) => {
  try {
    const { productname, quantity, price, description, image } = req.body;

    const newProduct = new productModel({
      productname,
      quantity,
      price,
      description,
      image,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProducts = async (req, res) => {
    try {
      const products = await productModel.find();
  
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {
  productAdd,
  getProducts
};

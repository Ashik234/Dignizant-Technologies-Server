const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description:{
    type:String,
    required:true
  },
  image: {
    type: String, 
    required: true,
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;

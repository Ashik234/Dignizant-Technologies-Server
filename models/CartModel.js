const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    quantity: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
  });

const CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;

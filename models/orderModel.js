const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    }],
    quantity: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
  });

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel;

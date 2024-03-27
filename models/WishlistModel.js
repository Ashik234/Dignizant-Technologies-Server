const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
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
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const wishlistModel = mongoose.model("wishlist", wishlistSchema);
module.exports = wishlistModel;

const wishlistModel = require("../models/WishlistModel");
const cartModel = require("../models/CartModel");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const OrderModel = require("../models/orderModel");

const getCart = async (req, res) => {
  try {
    const carts = await cartModel.find().populate("productId");

    res.status(200).json(carts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const addCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const product = await productModel.findById(productId);

    const user = await userModel.findById(userId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newCartItem = new cartModel({
      userId: userId,
      productId: productId,
    });

    await newCartItem.save();

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeCart = async (req, res) => {
  try {
    const { cartItemId, userId } = req.body;
    const cartItem = await cartModel.find(cartItemId).populate("productId");

    const user = await userModel.findById(userId);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await cartModel.delete(cartItemId).populate("productId");

    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWishlist = async (req, res) => {
  try {
    const wishlist = await wishlistModel.find().populate("productId");

    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addWishlist = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const product = await productModel.findById(productId);

    const user = await userModel.findById(userId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newWishListItem = new wishlistModel({
      userId: userId,
      productId: productId,
    });

    await newWishListItem.save();

    res
      .status(200)
      .json({ message: "Product added to Wishlist    successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeWishlist = async (req, res) => {
  try {
    const { wishlistId, userId } = req.body;

    const wishlistItem = await wishlistModel.findById(wishlistId);

    const user = await userModel.findById(userId);

    if (!wishlistId) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await wishlistModel.findByIdAndRemove(wishlistId);

    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const order = async (req, res) => {
  try {
    const { userId, productId, quantity, totalPrice } = req.body;
    const newOrder = new OrderModel({
      userId,
      productId,
      quantity,
      totalPrice,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("productId");
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCart,
  addCart,
  removeCart,
  getWishlist,
  addWishlist,
  removeWishlist,
  order,
  getOrders,
};

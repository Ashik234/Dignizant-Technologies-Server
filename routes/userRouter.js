const express = require("express");
const { userRegister, userLogin} = require("../controllers/userController");
const { productAdd, getProducts } = require("../controllers/AdminController");
const { addCart, addWishlist, removeWishlist, removeCart, getCart, getWishlist, order, getOrders } = require("../controllers/E-CommerceController");
const router = express.Router();

router.post("/register",userRegister)
router.post("/login",userLogin)
router.post("/productadd",productAdd)
router.get("/products",getProducts)
router.get("/cart",getCart)
router.post("/addcart",addCart)
router.get("/wishlist",getWishlist)
router.post("/addwishlist",addWishlist)
router.post("/removecart",removeCart)
router.post("/removewishlist",removeWishlist)
router.post("/order",order)
router.get("/orders",getOrders)


module.exports = router
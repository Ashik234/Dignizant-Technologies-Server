const express = require("express");
const { userRegister, userLogin} = require("../controllers/userController");
const { productAdd, getProducts } = require("../controllers/AdminController");
const router = express.Router();

router.post("/register",userRegister)
router.post("/login",userLogin)
router.post("/productadd",productAdd)
router.get("/products",getProducts)


module.exports = router
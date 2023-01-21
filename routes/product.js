const express = require("express");
const router = express.Router();
const { getAllProducts, PostProducts } = require("../controllers/product");
router.get("/products", getAllProducts);
router.post("/createproduct", PostProducts);

module.exports = router;

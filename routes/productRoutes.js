const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route pour l'afichage des produits
router.get("/", productController.index);

module.exports = router;
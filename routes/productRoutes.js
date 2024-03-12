const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route pour l'afichage des produits
router.get("/", productController.index);
router.get("/add", productController.add);
router.post("/create", productController.create);
router.get("/edit/:id", productController.edit);
router.post("/update", productController.update);
router.delete("/delete/:id", productController.delete);

module.exports = router;
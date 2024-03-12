const productModel = require("../models/productModel");


const productController = {

    index: (req, res) => {
        productModel.getAll((error, products) => {
            if (error) {
                console.error(error);
                return;
            }
            res.render("product/index", { products: products })
        })
        console.log("product controller, index action");

    }
}
module.exports = productController;
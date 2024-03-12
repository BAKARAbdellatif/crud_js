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

    },
    add: (req, res) => {
        res.render("product/add");
    },
    create: (req, res) => {
        const { title, description, price, expiration_date } = req.body;
        const result = productModel.create({ title, description, price, expiration_date }, (error, result) => {
            if (error) {
                console.error(error);
                return;
            }
            return result;
        });
        console.log(result);
        res.redirect('/products/');
    },
    update: (req, res) => {
        const { title, description, price, expiration_date, id } = req.body;
        productModel.update({ title, description, price, expiration_date, id }, (error, product) => {
            if (error) {
                console.error(error);
                return;
            }
            res.redirect('/products/');
        });
    },
    edit: (req, res) => {
        const id = req.params.id
        console.log(id);
        productModel.getById(id, (error, product) => {
            if (error) {
                console.error(error);
                return;
            }
            res.render("product/edit", { product: product });
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        productModel.delete(id, (error) => {
            if (error) {
                console.error(error);
            }
            res.send({ status: "OK" });
        });
    }
}
module.exports = productController;
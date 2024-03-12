const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "projet"
});

const productModel = {
    getAll: (callback) => {
        const sql = "SELECT * FROM products";
        connection.query(sql, (error, products) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, products);
        });
    },
    create: (product, callback) => {
        const { title, description, price, expiration_date } = product;
        const sql = "INSERT INTO `products`(`title`, `description`, `price`, `expiration_date`) VALUES (?, ?, ?, ?)";
        connection.query(sql, [title, description, price, expiration_date], (error, result) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, result.insertId);
        })
    },
    getById: (id, callback) => {
        const sql = "SELECT * FROM products WHERE id = ?";
        connection.query(sql, id, (error, product) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, product[0]);
        });
    },
    update: (product, callback) => {
        const { title, description, price, expiration_date, id } = product;
        const sql = "UPDATE `products` SET `title`=?,`description`=?,`price`=?,`expiration_date`=? WHERE `id`=?";
        connection.query(sql, [title, description, price, expiration_date, id], (error, product) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, product);
        });
    },
    delete: (id, callback) => {
        const sql = "DELETE FROM `products` WHERE id=?";
        connection.query(sql, id, (error) => {
            if (error) {
                callback(error);
            }
            callback(null);
        });
    }
}

module.exports = productModel;
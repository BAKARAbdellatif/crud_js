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
    }
}

module.exports = productModel;
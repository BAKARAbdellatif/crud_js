const express = require("express");
const app = express();
const path = require("path");
const $ = require("jquery");

const productRoutes = require("./routes/productRoutes");

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use('/products', productRoutes);


app.listen(8080, () => {
    console.log("Server is running");
});
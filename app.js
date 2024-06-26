const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require("./src/routes/users.routes");
const productRoutes = require("./src/routes/products.routes");
const orderRoutes = require("./src/routes/order.routes");
const adminRoutes = require("./src/routes/admin.routes");
const staffRoutes = require("./src/routes/staff.routes");
const {
  errorHandlingMiddleware,
} = require("./src/middlewares/error.middleware");
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//api user
app.use("/user", userRoutes);

//api show product
app.use("/product", productRoutes);

// api show order
app.use("/order", orderRoutes);

//api to use admin
app.use("/admin", adminRoutes);

//api to use staff
app.use("/staff", staffRoutes);

app.use(errorHandlingMiddleware);

app.listen(4000, () => {
  console.log(`Server running at http://localhost:4000/`);
  console.log("Server is running on port 4000");
});

module.exports = app;

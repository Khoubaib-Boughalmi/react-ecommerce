const express = require("express");
const app = express();
///////// dotenv /////////
const dotenv = require("dotenv");
dotenv.config();
///////// mongodb /////////
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {})
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => console.log(error));
///////// Middlewares /////////
const cors = require("cors");
app.use(cors());
app.use(express.json());
///////// Routes /////////
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
///////// firing server/////////
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

const express = require("express");
const app = express();
// ///////// dotenv /////////
// const dotenv = require("dotenv");
// dotenv.config();

///////// Configure Cors /////////
// const cors = require("cors");
// app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

///////// mongodb /////////
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI, {})
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => console.log(error));

///////// Setting Production /////////
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./client/build")));
///////// Middlewares /////////
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
///////// Production Only/////////
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
///////// firing server/////////
app.listen(process.env.PORT || 80, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

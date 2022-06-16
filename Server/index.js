const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const cartRouter = require("./routers/cart");
const userRouter = require("./routers/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use("/order", orderRouter);
app.use("/cart", cartRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).json("Not Found!!!");
});

app.listen(3001);

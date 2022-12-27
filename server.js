const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute=require("./Server/Routes/user");
const productRouter=require("./Server/Routes/product");
const cartRouter=require("./Server/Routes/cart");
  const passport = require('passport');
  const furnitureRouter=require("./Server/Routes/furniture")
// const authRoute=require("./Server/Routes/auth")
app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successfull"))
  .catch((err) => console.log(err));

  app.use(express.json());
const passportMiddleware = require('./Server/Config/passport');

// passportMiddleware(passport);
// app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
 app.use("/product", productRouter);
 app.use("/cart", cartRouter);
 app.use("/furniture",furnitureRouter);
app.listen(process.env.PORT ||5000, () => {
  console.log("Backend server running!");
});

const mongoose = require("mongoose");
const schama = mongoose.Schema;
const Furniture = new schama(
  {
    company: { type: String },
   desc : { type: String, required: true },
    img: { type: Array, required: true },
    categories: { type: String, required: true },
    size: { type: String },
    type: { type: String },
    amount: { type: Number },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Furniture", Furniture);

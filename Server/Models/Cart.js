const mongoose = require("mongoose");
const schama = mongoose.Schema;
const Cart = new schama(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", Cart);

import React from "react";
import "./category.css"

export default function Men() {
  return (
    <div className="cardCategory">
      <img
        src="https://gamelagan.co.il/wp-content/uploads/2021/04/1741-1.jpg"
        alt="imgMenProduct"
      />
      <p>Adidas</p>
      <p>White Nike hoodie</p>
      <p>₪ 50</p>
      <button>Buy</button>
      {/* חברה של המוצר
תיאור
ומחיר */}
      {/* company: { type: String, required: true , unique:true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true }, */}
    </div>
  );
}

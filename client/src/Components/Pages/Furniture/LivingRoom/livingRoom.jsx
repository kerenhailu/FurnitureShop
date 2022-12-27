import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/Cart/cart-context";
import { ClothingContext } from "../../../Context/Clothing/clothing-context";
import { FurnitureContext } from "../../../Context/Furniture/furniture-context";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { GetAllFurniture } from "../../../Service/furniture-service";
import "./livingRoom.css";

export default function LivingRoom() {
  let { furniture, setFurniture } = useContext(FurnitureContext);
  let { loading, setLoading } = useContext(LoadingContext);
  let { cart, setCart } = useContext(CartContext);
  let { oneProduct, setOneProduct } = useContext(ClothingContext);
  useEffect(() => {
    setLoading(true);
    GetAllFurniture()
      .then((data) => {
        setFurniture(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    let newCart=[...cart];
    let itemInCart=newCart.find(
      (item)=>product.desc===item.desc&&product.company===item.company
    );
    if(itemInCart){
      itemInCart.amount++;
    }else{
      itemInCart={
        ...product,
        amount:1
      }
      newCart.push(itemInCart);
    }
    setCart(newCart);
    console.log(newCart);
    alert("add to card");
  };

  console.log(furniture);
  console.log("cart:", cart);

  const OneProductToCart=(product)=>{
    let SpecificFurniture=furniture.find((item)=>product.desc===item.desc&&product.company===item.company)
    console.log(SpecificFurniture);
    oneProduct.push(SpecificFurniture);
    // setOneProduct(...SpecificFurniture)
    console.log(oneProduct);
  }
  return (
    <div className="categoryPage"> 
      {loading ? (
        <img
          className="gifLoading"
          src="https://www.haus-gitschberg.com/img/img-loader.gif"
          alt="gifLoading"
          width="500px"
          height="500px"
        />
      ) : (
        <div className="cardCategory">
          {furniture
            // .filter((furniture) => furniture.categories === "Living room")
            .map((LivingRoom, index) => (
              <div className="cardProduct" key={index}>
              <Link to="/OneProduct" onClick={() => OneProductToCart(LivingRoom)}>OneProduct</Link>
                <img src={LivingRoom.img[0]} alt="imgLivingRoom" className="ImgProduct"/>
                <img src={LivingRoom.img[1]} alt="imgLivingRoom" className="imgTop"/>
                <h4>{LivingRoom.company}</h4>
                <p>{LivingRoom.desc}</p>
                <p>{LivingRoom.size}</p>
                 {/* <label for="size">Size</label>
  <select name="size" id="size" onChange={(e)=>oneProduct.size=e.target.value}>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>  */}
                <p>₪{LivingRoom.price}</p>
                <button className="ButtonProduct" onClick={() => addToCart(LivingRoom)}>Buy</button><br/>
    
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cart/cart-context";
import { ClothingContext } from "../../Context/Clothing/clothing-context";
import { LoadingContext } from "../../Context/loading/loading-context";
import { GetAllClothing } from "../../Service/product-service";
import OneProduct from "./oneProduct";

const PAGE_PRODUCT = "products";
const PAGE_CART = "cart";

export default function Women() {
  let { clothing, setClothing } = useContext(ClothingContext);
  let { oneProduct, setOneProduct } = useContext(ClothingContext);
  let { loading, setLoading } = useContext(LoadingContext);
  let { cart, setCart } = useContext(CartContext);
  let [category,setCategory]=useState();

  useEffect(() => {
    setLoading(true);
    GetAllClothing()
      .then((data) => {
        setClothing(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

const OneProductToCart=(product)=>{
  let P=clothing.find((item)=>product.desc===item.desc&&product.company===item.company)
  console.log(P);
  oneProduct.push(P);
  // setOneProduct(...P)
  console.log(oneProduct);
}

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

  // const OneProductCart=(product)=>{
  //   let newCart=[...oneProduct];
  //   let itemInP=newCart.find(
  //     (item)=>product.desc===item.desc&&product.company===item.company
  //   );
  //   // console.log(newCart);
  //   // newCart.push(itemInCart);
  //   setCart(itemInP);
  //   console.log(newCart);
  //   console.log(itemInP);
  // }
  // const onAdd = (product) => {
  //   const exist = cart.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCart(
  //       cart.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cart.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCart(cart.filter((x) => x.id !== product.id));
  //   } else {
  //     setCart(
  //       cart.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  console.log(clothing);
  console.log("cart:", cart);
// const selectCategory=()=>{
//   return clothing.filter(
//     (clothing)=>clothing.category===category
//   )
// }

  return (
    <div className="categoryPage">
       {/* <label for="cars">Choose a category:</label>

<select onChange={(e)=>e.target.value} name="cars" id="cars">
  <option value="company">company</option>
  <option value="desc">desc</option>
  <option value="color">color</option>
  <option value="audi">Audi</option>
</select> */}
         
      {loading ? (
        <img
          className="gifLoading"
          src="https://cdn.dribbble.com/users/46511/screenshots/1756041/loader-spinning.gif"
          alt="gifLoading"
        />
      ) : (
        <div className="cardCategory">
          {clothing
            .filter((clothing) => clothing.categories === "Women")
            .map((womenClothing, index) => (
              <div className="cardClothing" key={index}>
                <img src={womenClothing.img[0]} alt="imgwomenClothing" className="ImgProduct"/>
                <img src={womenClothing.img[1]} alt="imgwomenClothing" className="imgTop"/>
                <p>{womenClothing.company}</p>
                <p>{womenClothing.desc}</p>
                <label for="size">Size</label>
  <select name="size" id="size" onChange={(e)=>oneProduct.size=e.target.value}>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
                <p>₪{womenClothing.price}</p>
                <button className="ButtonBuy" onClick={() => addToCart(womenClothing)}>Buy</button><br/>
    {/* <button onClick={() => PPP(womenClothing)}>OneProduct</button>   */}
    <button onClick={() => OneProductToCart(womenClothing)}><Link to="/OneProduct">OneProduct</Link></button>  
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

import React, { useContext } from "react";
import { CartContext } from "../../Context/Cart/cart-context";
// import { LoadingContext } from "../../Context/loading/loading-context";
import "./cart.css";

export default function Cart() {
  let { cart, setCart } = useContext(CartContext);
  // let { loading, setLoading } = useContext(LoadingContext);
const TotalPrice=()=>{
return cart.reduce(
  (sum,{price,amount})=>sum+price*amount,0);
};
  const RemoveFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const ClearCart=()=>{
    setCart([])
  }
const PlusProduct = (product) => {
  let newCart=[...cart];
  let itemInCart=newCart.find(
    (item)=>product.desc===item.desc&&product.company===item.company
  );
  if(itemInCart){
    itemInCart.amount++;
   setCart(newCart)
  }
console.log(itemInCart,itemInCart.amount);}
const MinusProduct = (product) => {
  let newCart=[...cart];
  let itemInCart=newCart.find(
    (item)=>product.desc===item.desc&&product.company===item.company
  );
  if(itemInCart&&itemInCart.amount>0){
    itemInCart.amount--;
   setCart(newCart)
  }
console.log(itemInCart,itemInCart.amount);}

  return (
    <>
     <h1>Shopping Cart</h1>             
      <table class="rwd-table">
         <tr>
<th>img</th>
           <th>company</th>
           <th>desc</th>
           <th>price</th>
           <th>amount</th>
           <th>size</th>
           {/* <th>delete</th> */}
           {/* <th>size</th>
           <th>color</th>
           <th>price</th>
           <th>amount</th>
           <th>img</th> */}
         </tr>
         {console.log(cart)}
      {cart.map((ClothingCart, index) => (
        <tr key={index}>
         <td> <img src={ClothingCart.img} alt="imgClothing" /></td>
         <td> <p>{ClothingCart.company}</p></td>
         <td> <p>{ClothingCart.desc}</p></td>
         <td> <p>₪{ClothingCart.price}</p></td>
         <td>
          
          <p><button onClick={()=>PlusProduct(ClothingCart)} className="btnNone">
            +
             {/* <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" alt="+"/> */}
              </button>
           {ClothingCart.amount} 
          <button onClick={()=>MinusProduct(ClothingCart)} className="btnNone">
            -
          {/* <img src="https://cdn-icons-png.flaticon.com/512/1828/1828901.png" alt="-"/> */}
           </button>
          </p></td>
          <td><p>{ClothingCart.size}</p></td>
         {/* <p>{ClothingCart.qty?ClothingCart.qty:""}</p> */}
         
         <button onClick={() => RemoveFromCart(ClothingCart)} className="deleteButton">
          <img src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/erase_delete_remove_wipe_out-512.png" alt="deleteIcon" />
          </button>
        </tr>
        
      ))}
      </table>
      {cart.length>0 &&(<button onClick={ClearCart}>clear cart</button>)}
      <h1>סהכ : ₪{TotalPrice()}</h1>
      <button>מעבר לתשלום</button>
    </>
  );
}



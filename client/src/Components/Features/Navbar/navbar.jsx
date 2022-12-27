import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Cart/cart-context';
import "./navbar.css"
export default function Navbar() {
  let {cart,setCart}=useContext(CartContext);
  const TotalLengthCart=()=>{
    return cart.reduce(
      (sum,{amount})=>sum+amount,0
    );
  };
  return (
    <div className='Navbar'>
      <Link to="/LogIn">Log in</Link>
      <Link to="/">Home</Link>
      <Link to="/Women">Women</Link>
      {/* <Link to="/Men">Men</Link>
      <Link to="/Kids">Kids</Link>
      <Link to="/Beauty">Beauty</Link> */}
      <Link to="/LivingRoom">LivingRoom</Link>
      {/* <Link to="/Category">Category</Link> */}
      <Link to="/Cart" style={{color: "#c7940a"}}><img className='imgNav' src='https://www.shareicon.net/data/512x512/2017/06/21/887399_card_512x512.png'  alt='cartShopping'/>
        {TotalLengthCart()}
        </Link>
      {/* <Link to="/AddProduct">AddProduct</Link> */}
      <Link to="/AdminPages">AdminPages</Link>
      {/* <Link to="/Register">Register</Link> */}

    </div>
  )
}


// import React from 'react'
// import "./navbar.css"
// export default function Navbar() {
//   return (
//     <div>

// {/* <html> */}
//   {/* <head> */}
//     <link href="https://fonts.googleapis.com/css?family=Arima+Madurai" rel="stylesheet"/>
//     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"/>
//   {/* <head/> */}
//   {/* <body> */}
//     <nav>
//       <div class="brand">
//         <h3>MyBrand</h3>
//       </div>
//       <div class="navigation">
//         <ul class="menu">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Team</a></li>
//           <li><a href="#">Pricing</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//         <div class="search">
//           <div class="search-content">
//             <button class="search-button"><i class="fa fa-search"></i></button>
//             <input type="text" class="search-input" placeholder="Search here..."/>
//           </div>
//         </div>
//       </div>
//     </nav>
//   {/* </body> */}
// {/* </html> */}
//     </div>
//   )
// }

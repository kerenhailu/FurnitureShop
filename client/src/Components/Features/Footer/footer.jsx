// import React from "react";
// import { Link } from "react-router-dom";
// import "./footer.css";
// export default function Footer() {
//   return (
//     <footer>
//       <div class="row primary">
//         <div class="column about">
//           <h3>About Us</h3>
//           <p>
//             We are a clothing store at the beginning of our journey,
//             <br />
//             With the best quality at affordable prices,
//             <br />
//             Let's get impressed.
//           </p>
//         </div>
//         <div class="column links">
//           <h3>Category</h3>
//           <ul>
//             <li>
//               <Link to="/Women">Women</Link>
//             </li>
//             <li>
//               <Link to="/Men">Men</Link>
//             </li>
//             <li>
//               <Link to="/Kids">Kids</Link>
//             </li>
//             <li>
//               <Link to="/Beauty">Beauty</Link>
//             </li>
//           </ul>
//         </div>

//         <div class="column subscribe">
//           <h3>Newsletter</h3>
//           <div>
//             <input type="email" placeholder="Your email id here" />
//             {/* <button >Subscribe</button> */}
//             <div class="box">
//               <a className="ButtonEmail" href="#popup1">
//                 Subscribe
//               </a>
//             </div>

//             <div id="popup1" class="overlay">
//               <div class="popup">
//                 <a class="close" href="#">
//                   &times;
//                 </a>
//                 <div class="content">Thanks, we'll be in touch (:</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="row copyright">
//         <div class="footer-menu">
//           <Link to="/">Home</Link>
//           <Link to="/Cart">Cart</Link>
//           <a href="https://www.linkedin.com/in/keren-hailu/" target="_blank">
//             Linkedin
//           </a>
//           <a href="https://github.com/kerenhailu" target="_blank">
//             GitHub
//           </a>
//           <Link to="/LogIn">Log in</Link>
//         </div>
//         <p>Copyright &copy; Keren Hailu</p>
//       </div>
//     </footer>
//   );
// }


import React from 'react'

export default function Footer() {
  return (
    <p>Copyright &copy; Keren Hailu</p>
  )
}

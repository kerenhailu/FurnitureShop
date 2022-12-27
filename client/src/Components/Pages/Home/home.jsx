// import React from 'react'
// import { Link } from 'react-router-dom'

// import "./home.css"

// export default function Home() {

//   return (
//     <div className='Home'>
//       <img className='imgCenter' src='https://media.terminalx.com/pub/media/banners/2022December1500/HOME_DESK_011222_S1.jpg' alt='imgCenter'/>
//       <img className='imgCloth' src='https://media.terminalx.com/pub/media/banners/2022November30500/HOME_DESK_301122_A1.jpg' alt='imgCloth'/>
//     <section className='imgCategory'>
//     <Link to="/Women">    <img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B3.jpg' alt='imgWomen'/>
//     </Link>
//       <Link to="/Men"><img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B4.jpg' alt='imgMen'/>
//       </Link>
//       <Link to="/Kids"><img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B5.jpg' alt='imgKids'/>
//       </Link>
//       <Link to="/Beauty"><img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B7.jpg' alt='imgBeauty'/>
//       </Link>
//     </section>
//     </div>
//   )
// }

import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="bgBrown">משלוחים חינם מעל 400 שח</div>
      <section class="container-boxes">
        <div class="box">
          <div class="icon">
            <a href="">
              <i class="fas fa-fire"></i>
            </a>
          </div>
          <div class="text">
            <a href="">
              <h3>Living Room</h3>
              <p>
              The best and highest quality furniture for your living room design.
              </p>
            </a>
          </div>
        </div>

        <div class="box">
          <div class="icon">
            <a href="">
              <i class="fas fa-seedling"></i>
            </a>
          </div>

          <div class="text">
            <a href="">
              <h3>Dining Room</h3>
              <p>
              The best chair and sideboard sets for your design.
              </p>
            </a>
          </div>
        </div>

        <div class="box">
          <div class="icon">
            <a href="">
              <i class="fas fa-address-card"></i>
            </a>
          </div>

          <div class="text">
            <a href="">
              <h3>Bedroom</h3>
              <p>The most beautiful comfortable beds to decorate your room.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <img className='imgCenter' src='https://d3m9l0v76dty0.cloudfront.net/system/photos/567260/large/3e7bb70a75a259e44923d94e712c5638.jpg?1618310311' alt='imgCenter'/> */
}
{
  /* <img className='imgCloth' src='https://media.terminalx.com/pub/media/banners/2022November30500/HOME_DESK_301122_A1.jpg' alt='imgCloth'/> */
}
{
  /* <section className='imgCategory'>
    <Link to="/Women">    <img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B3.jpg' alt='imgWomen'/>
    </Link>
      <Link to="/Men"><img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B4.jpg' alt='imgMen'/>
      </Link>
      <Link to="/Kids"><img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B5.jpg' alt='imgKids'/>
      </Link>
      <Link to="/Beauty"><img src='https://media.terminalx.com/pub/media/banners/2022November29500/home_desk_291122_B7.jpg' alt='imgBeauty'/>
      </Link>
    </section> */
}

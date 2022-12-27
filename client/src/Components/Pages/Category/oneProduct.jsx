import React, { useContext } from 'react'
import { ClothingContext } from '../../Context/Clothing/clothing-context';
import "./category.css";
export default function OneProduct() {
  let { oneProduct, setOneProduct } = useContext(ClothingContext);
  console.log(oneProduct);
  return (
    <div >
{oneProduct.map((oneProduct, index) => (
              <div  key={index} className="oneProduct">
                <img src={oneProduct.img} alt="imgoneProduct" className='imgProduct' />
                <div className='textProduct'>
                <p>{oneProduct.company}</p>
                <p>{oneProduct.desc}</p>
                <label for="size">Size </label>
  <select name="size" id="size" onChange={(e)=>oneProduct.size=e.target.value}>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select><p style={{background: oneProduct.color}} className="colorProduct"></p>
                {/* <p style={{color: "red"}}>{oneProduct.color}</p> */}
                <p>₪{oneProduct.price}</p>
                </div> 
              </div>
            ))}

    </div>
  )
}

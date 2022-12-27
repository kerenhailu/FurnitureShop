import React, { useContext, useEffect, useState } from 'react'
// import { ClothingContext } from '../../../Context/Clothing/clothing-context';
import { FurnitureContext } from '../../../Context/Furniture/furniture-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { DeleteFurniture, GetAllFurniture } from '../../../Service/furniture-service';
// import { GetAllClothing } from '../../../Service/product-service';
import "./tableProduct.css"
export default function TableProduct() {
  let { furniture, setFurniture } = useContext(FurnitureContext);
  // let { clothing, setClothing } = useContext(ClothingContext);
    let { loading, setLoading } = useContext(LoadingContext);
    let [furnitureToUpdate, setFurnitureToUpdate] = useState({});
      let [furnituresData, setFurnituresData] = useState([]);
  let [newFurniture, setNewFurniture] = useState({});

  
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
    const updateValue = (e) => {
      newFurniture[e.target.name] = e.target.value;
    };
    const deletefurnitureFunction = (furnitureDelete) => {
      setLoading(true);
      DeleteFurniture(furnitureDelete)
        .then((res) => res.json())
        .then((data) => setFurniture(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    // const deleteUserGrade = (user) => {
    //   setLoading(true);
    //   DeleteGrade(user)
    //     .then((res) => res.json())
    //     .then((data) => setUsersData(data))
    //     .catch((err) => console.log(err))
    //     .finally(() => setLoading(false));
    // };
    return (
        <>
         <h3>Inventory</h3> 
          <table>
             <tr>
    <th>img</th>
               <th>company</th>
               <th>desc</th>
               <th>type</th>
               <th>amount</th>
               {/* <th>delete</th> */}
               <th>size</th>
               <th>color</th>
               <th>categories</th>
               <th>price</th>
             </tr>

          {furniture.map((product, index) => (
            <tr className="" key={index}>
             <td> <img src={product.img} alt="imgClothing" /></td>
             <td> <p>{product.company}</p></td>
             <td> <p>{product.desc}</p></td>
             <td> <p>{product.type}</p></td>
             <td>
              <p>{product.amount}</p>
              </td>
             <td>
             {/* <p>{product.qty?product.qty:""}</p> */}
             <p>{product.size}</p>
             </td>
             <td>
             <p>{product.color}</p>
             </td>
             <td>
             <p>{product.categories}</p>
             </td>
             <td>
             <p>₪{product.price}</p>
             </td>
             <td>
             <p>delete</p>
             </td>
             <td>
             <button type="submit" onClick={() => deletefurnitureFunction(product)}>
          Delete
        </button>
             </td>
             {/* <td> </td> */}
            </tr>
          ))}
          </table>
          <div class="box">
	<a class="buttonPopUp" href="#popup1">Let me Pop up</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Are you sure you want to delete?</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
			{/* You sour you delete */}
      <br/>
      <button>yes</button>
      <button>no</button>
		</div>
	</div>
</div>
        </>
      );
    }

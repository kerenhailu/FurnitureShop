import React, { useContext, useEffect, useState } from 'react'
import { FurnitureContext } from '../../../Context/Furniture/furniture-context';
import { LoadingContext } from '../../../Context/loading/loading-context';
import { GetAllFurniture, PutFurniture } from '../../../Service/furniture-service';

export default function EditProduct() {
    let [furnitureToUpdate, setFurnitureToUpdate] = useState({});
  let { furniture, setFurniture } = useContext(FurnitureContext);
  let { loading, setLoading } = useContext(LoadingContext);
    let [furnituresData, setFurnituresData] = useState([]);

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
        furnitureToUpdate[e.target.name] = e.target.value;
      };

    const updateFurniture = (requestedFurniture, newFurniture) => {
        setLoading(true);
        setFurnitureToUpdate({ ...furnitureToUpdate });
        console.log({ requestedFurniture, newFurniture });
        PutFurniture({ requestedFurniture, newFurniture })
          .then((res) => res.json())
          .then((data) => setFurnituresData(data))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      };
      
  return (
    <div>EditProduct

<label>Company</label>
        <br />
        <input
          type="string"
          name="company"
          placeholder="Enter the company"
          onChange={updateValue}
          required
        />
        <br />
        <label>Desc</label>
        <br />
        <input
          type="string"
          name="desc"
          placeholder="Enter the desc"
          onChange={updateValue}
          required
        />
        <br />
        <label>Categories</label>
        <br />
        <input
          type="string"
          name="categories"
          placeholder="Enter the categories"
          onChange={updateValue}
          required
        />
        <br />
        <label>Size</label>
        <br />
        <input
          type="boolean"
          name="size"
          placeholder="Enter size"
          onChange={updateValue}
          required
        />
        <br />
        <label>Color</label>
        <br />
        <input
          type="string"
          name="color"
          placeholder="Enter the color"
          onChange={updateValue}
          required
        />
        <br />
        <label>Amount</label>
        <br />
        <input
          type="number"
          name="Amount"
          placeholder="Enter the amount"
          onChange={updateValue}
          required
        />
        <br />
        <label>Price</label>
        <br />
        <input
          type="number"
          name="price"
          placeholder="Enter the price"
          onChange={updateValue}
          required
        />
        <br />
        <label>Img</label>
        <br />
        <input
          type="string"
          name="img"
          placeholder="Enter the img"
          onChange={updateValue}
          required
        />
        <br />
        <button type="submit" onClick={() => updateFurniture(furniture, furnitureToUpdate)}>
          Add{" "}
        </button>
      </div>
    
  )
}

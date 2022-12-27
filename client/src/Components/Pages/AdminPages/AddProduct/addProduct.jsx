import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FurnitureContext } from "../../../Context/Furniture/furniture-context";
import { LoadingContext } from "../../../Context/loading/loading-context";
import { PostFurniture, PutFurniture } from "../../../Service/furniture-service";
import TableProduct from "../TableProduct/tableProduct";

export default function AddProduct() {
  let [newFurniture, setNewFurniture] = useState({});
  const [open, setOpen] = useState(false);
  // let [furnitureToUpdate, setFurnitureToUpdate] = useState({});
  // let { furniture, setFurniture } = useContext(FurnitureContext);
  // let { loading, setLoading } = useContext(LoadingContext);
  //   let [furnituresData, setFurnituresData] = useState([]);
  const addFurniture = (e) => {
    e.preventDefault();
    setNewFurniture({ ...newFurniture });
    PostFurniture(newFurniture);
    console.log(newFurniture);
    setOpen(!open);
    alert("add");
  };
  const updateValue = (e) => {
    newFurniture[e.target.name] = e.target.value;
  };

  // const updateFurniture = (requestedFurniture, newFurniture) => {
  //   setLoading(true);
  //   setFurnitureToUpdate({ ...furnitureToUpdate });
  //   console.log({ requestedFurniture, newFurniture });
  //   PutFurniture({ requestedFurniture, newFurniture })
  //     .then((res) => res.json())
  //     .then((data) => setFurnituresData(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // };
  return (
    <div>
      <Link to="/AdminPages">Table Product</Link>
      <div className="addProduct">
        <h1>Add</h1>
        {/* company desc img categories size color price amount*/}
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
        <button type="submit" onClick={addFurniture}>
          Add{" "}
        </button>
        {/* <button type="submit" onClick={() => updateFurniture(furniture, furnitureToUpdate)}>
          edit
        </button> */}
      </div>
    </div>
  );
}

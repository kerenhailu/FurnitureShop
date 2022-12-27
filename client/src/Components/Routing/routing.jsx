import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../Pages/Category/category";
import Home from "../Pages/Home/home";
import Navbar from "../Features/Navbar/navbar";
import Footer from "../Features/Footer/footer";
import Cart from "../Pages/Cart/cart";
import LogIn from "../Pages/LogIn/logIn";
import Register from "../Pages/Register/register";
import Women from "../Pages/Category/women";
import Men from "../Pages/Category/men";
import Kids from "../Pages/Category/kids";
import Beauty from "../Pages/Category/beauty";
import AddProduct from "../Pages/AdminPages/AddProduct/addProduct";
import MainAdminPage from "../Pages/AdminPages/MainAdminPage/mainAdminPage";
import TableProduct from "../Pages/AdminPages/TableProduct/tableProduct";
import OneProduct from "../Pages/Category/oneProduct";
import LivingRoom from "../Pages/Furniture/LivingRoom/livingRoom";


const PageRouting = () => {
  
  return (
    <div> 
      <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Category" element={<Category />}/>
          <Route exact path="/Women" element={<Women />}/>
          <Route exact path="/Men" element={<Men />}/>
          <Route exact path="/Kids" element={<Kids />}/>
          <Route exact path="/Beauty" element={<Beauty />}/>
          <Route exact path="/Cart" element={<Cart />}/> 
          <Route exact path="/LogIn" element={<LogIn />}/> 
          <Route exact path="/Register" element={<Register />}/> 
          <Route exact path="/AddProduct" element={<AddProduct />}/> 
          <Route exact path="/TableProduct" element={<TableProduct />}/> 
          <Route exact path="/AdminPages" element={<MainAdminPage />}/> 
          <Route exact path="/OneProduct" element={<OneProduct />}/> 
          <Route exact path="/LivingRoom" element={<LivingRoom />}/> 
          
        </Routes>
        <Footer/>
      </BrowserRouter>
     </div> 
  );
};
export default PageRouting;

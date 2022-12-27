import React from 'react'
import { Link } from 'react-router-dom'
import AddProduct from '../AddProduct/addProduct'
import TableProduct from '../TableProduct/tableProduct'

export default function MainAdminPage() {
  return (
    <div>
        {/* <h1>Add Products: <AddProduct/></h1> */}
      <Link to="/AddProduct">Add more Product</Link>
        <p><TableProduct/></p>
    </div>
  )
}

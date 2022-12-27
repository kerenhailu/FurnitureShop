import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css";
export default function LogIn() {
  return (
    <div>
        {/* <h3>logIn / <Link to="/Register">Register</Link></h3> */}
        <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" autoComplete="off" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" autoComplete="off" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't you have an account?<Link to="/Register">Signup</Link></p>
  
</div>
    </div>
    
  )
}

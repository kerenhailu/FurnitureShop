import React from 'react'
import { Link } from 'react-router-dom';
import "../LogIn/login.css";

export default function Register() {
  return (
    <div>
        <div class="login-box">
      <h2>register</h2>
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
      register
    </a>
  </form>
  <p>You have an account?<Link to="/LogIn">Log in</Link></p>
    </div>
    </div>
  )
}

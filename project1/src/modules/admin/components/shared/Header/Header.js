import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {

  let [isAdminLoggedIn, setIsAdminLoggedIn] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("_admin_token")){
      setIsAdminLoggedIn(true);
    }else{
      setIsAdminLoggedIn(false);
    }
  })


  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
        <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>

        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        { isAdminLoggedIn==true ? 
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/dashboard">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/setting">Settings</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown">Product</NavLink>
              <div className='dropdown-menu'>
              <NavLink className="dropdown-item" to="/admin/products">Add</NavLink>
              <NavLink className="dropdown-item" to="/admin/products/list">List</NavLink>

              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown">Category</NavLink>
              <div className='dropdown-menu'>
              <NavLink className="dropdown-item" to="/admin/category">Add</NavLink>
              <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>

              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/logout">Logout</NavLink>
            </li>
            
          </ul>
        </div>
        : '' }


      </nav>
    </>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
        <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>

        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/setting">Settings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/products">Products</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown">Category</NavLink>
              <div className='dropdown-menu'>
              <NavLink className="dropdown-item" to="/admin/category">Add</NavLink>
              <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>

              </div>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
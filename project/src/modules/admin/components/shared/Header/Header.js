import React, {useEffect, useState} from 'react'
import { NavLink, useFetcher } from 'react-router-dom'
import './Header.css';
import { createToken } from '../../../../../redux/AdminAuthReducer'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  let dispatch = useDispatch();
  useEffect(()=>{
    console.log("#############");
    if(localStorage.getItem("_admin_token")){
        console.log("XXXXXXXXXXXXXXXXX");
        let token = localStorage.getItem("_admin_token");
        dispatch(createToken(token))
      }
  }, [])

  let token = useSelector(state=>state.AdminAuthReducer);


  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
        <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>

        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          { token ? (
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
          ) : '' }
        </div>
        


      </nav>
    </>
  )
}

export default Header
import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../redux/AuthSlice'
const Header = () => {
  let disp = useDispatch();
  // let [isLoggedIn, setIsLoggedIn] =useState(false);
  useEffect(()=>{
    if(localStorage.getItem("token")){
      let token = localStorage.getItem("token");
      
      disp(setToken(token));

    }
  }, [])

  let token = useSelector(state => state.AuthReducer);
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">TSS</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                {
                  token ? (
                  <>
                  <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">Logout</NavLink>
                  </li>
                  </>
                  
                  ) : (<li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>)
                }
                
                
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header
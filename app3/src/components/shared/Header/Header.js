import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  <NavLink className="navbar-brand" href="#">The Stepping Stone</NavLink>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header

// the JSX code could not allowed there are 3 html code
// 1. class should be className
// 2. html comments
// 3. for should be HTMLfor

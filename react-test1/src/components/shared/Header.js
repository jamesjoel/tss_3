import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  <NavLink className="navbar-brand" to="#">My Test</NavLink>


  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add">Add</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/list">List</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
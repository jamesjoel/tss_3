import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm bg-dark'>
        <ul className='nav navbar-nav'>
            <li className='nav-item'>
                <NavLink className='nav-link' to="">Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to="user">User</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className='nav-link' to="user">Demo</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header
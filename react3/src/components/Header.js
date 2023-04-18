import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  // let data = useSelector(state=>state.StudentSlice);
  // let teacher = useSelector(state=>state.TeacherSlice);
  let cart = useSelector(data=>data.CartReducer);
  console.log(cart);
  return (
    <>
    <nav className='navbar navbar-dark navbar-expand-sm bg-dark'>
      <button className='navbar-toggler' data-toggle='collapse' data-target="#menu">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div id='menu' className='collapse navbar-collapse'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to=''>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='student'>Student</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='product'>Product</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='teacher'>Teacher</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='mycart'>My Cart ({cart.length})</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header
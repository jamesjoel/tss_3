import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  let data = useSelector(state=>state);
  return (
    <>
    <nav>
        <NavLink to=''>Home</NavLink>
        <NavLink to='profile'>Profile</NavLink>
        <b>({data.length})</b>
      </nav>
    </>
  )
}

export default Header
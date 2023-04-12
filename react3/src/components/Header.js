import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  let data = useSelector(state=>state.StudentSlice);
  let teacher = useSelector(state=>state.TeacherSlice);
  return (
    <>
    <nav>
        <NavLink to=''>Home</NavLink>
        <NavLink to='profile'>Profile</NavLink>
        <NavLink to='teacher'>Teacher</NavLink>
        <b>({ data.length })</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Total Teacher : {teacher.length}
      </nav>
    </>
  )
}

export default Header
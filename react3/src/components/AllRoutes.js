import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Teacher from './Teacher'
import Product from './Product'
import MyCart from './MyCart'
import Student from './Student'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='teacher' element={<Teacher />} />
        <Route path='product' element={<Product />} />
        <Route path='mycart' element={<MyCart />} />
        <Route path='student' element={<Student />} />
    </Routes>
    </>
  )
}

export default AllRoutes
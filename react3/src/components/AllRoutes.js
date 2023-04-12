import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Teacher from './Teacher'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='teacher' element={<Teacher />} />
    </Routes>
    </>
  )
}

export default AllRoutes
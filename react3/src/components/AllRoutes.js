import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='profile' element={<Profile />} />
    </Routes>
    </>
  )
}

export default AllRoutes
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import User from '../components/pages/User'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='user' element={<User />} />
        </Routes>
    </>
  )
}

export default AllRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route pah="profile" element={<Profile />} />
        </Routes>
    </>
  )
}

export default AllRoutes
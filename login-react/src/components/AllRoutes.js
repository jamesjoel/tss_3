import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Logout from './Logout'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    </>
  )
}

export default AllRoutes
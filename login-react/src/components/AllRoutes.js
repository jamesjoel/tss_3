import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Logout from './Logout'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  )
}

export default AllRoutes
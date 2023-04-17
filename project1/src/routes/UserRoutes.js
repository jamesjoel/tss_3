import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../modules/user/component/pages/Home/Home';
import About from '../modules/user/component/pages/About/About';
import Contact from '../modules/user/component/pages/Contact/Contact';
import UserLayout from '../modules/layout/UserLayout';
import NotFound from '../modules/user/component/pages/NotFound/NotFound'
import Signup from '../modules/user/component/pages/Signup/Signup';
import Login from '../modules/user/component/pages/Login/Login';
import Profile from '../modules/user/component/pages/Profile/Profile';
import { Logout } from '../modules/user/component/pages/Logout/Logout';

let UserRoutes = ()=>{
    return(
        <Routes>
			<Route path='' element={<UserLayout />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="logout" element={<Logout />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Route>
        </Routes>
    )
}

export default UserRoutes;
import React from 'react';
import Navbar from '../user/component/shared/Navbar/Navbar';
import Footer from '../user/component/shared/Footer/Footer';
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
    
  )
}

export default UserLayout
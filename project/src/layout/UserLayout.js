import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
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
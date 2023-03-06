import React from 'react'
import Header from '../components/shared/admin/Header/Header'
import Footer from '../components/shared/admin/Footer/Footer'
import { Outlet } from 'react-router-dom'

let AdminLayout = () => {
  return (
    <>
        <Header />
        <div className="container my-4" style={{minHeight : '700px'}}>

            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default AdminLayout;
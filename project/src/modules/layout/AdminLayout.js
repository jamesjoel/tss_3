import React from 'react'
import Header from '../admin/components/shared/Header/Header'
import Footer from '../admin/components/shared/Footer/Footer'
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
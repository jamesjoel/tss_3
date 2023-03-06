import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import Contact from '../components/pages/contact/Contact';
import UserLayout from '../layout/UserLayout';
import AdminLayout from '../layout/AdminLayout';
import Dashboard from '../components/pages/admin/Dashboard/Dashboard'
import Setting from '../components/pages/admin/Setting/Setting'
import Products  from '../components/pages/admin/Products/Products'
import NotFound from '../components/pages/NotFound/NotFound'
const AllRoutes = () => {
  return (
    <>
    <Routes>
			<Route path='' element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    {/* all admin routes here */}

      <Route path='admin' element={<AdminLayout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='setting' element={<Setting />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Route>

		</Routes>
    </>
  )
}

export default AllRoutes
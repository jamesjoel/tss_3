import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../modules/user/component/pages/Home/Home';
import About from '../modules/user/component/pages/About/About';
import Contact from '../modules/user/component/pages/Contact/Contact';
import UserLayout from '../modules/layout/UserLayout';
import AdminLayout from '../modules/layout/AdminLayout';
import Dashboard from '../modules/admin/components/pages/Dashboard/Dashboard'
import Setting from '../modules/admin/components/pages/Setting/Setting'
import Products  from '../modules/admin/components/pages/Products/Products'
import NotFound from '../modules/user/component/pages/NotFound/NotFound'
import Category from '../modules/admin/components/pages/Category/Category';
import List from '../modules/admin/components/pages/Category/List';
import PList from '../modules/admin/components/pages/Products/List';
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
        <Route path='products/list' element={<PList />} />
        <Route path='category' element={<Category />} />
        <Route path='category/list' element={<List />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Route>

		</Routes>
    </>
  )
}

export default AllRoutes
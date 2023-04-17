import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../modules/layout/AdminLayout';
import Dashboard from '../modules/admin/components/pages/Dashboard/Dashboard'
import Setting from '../modules/admin/components/pages/Setting/Setting'
import Products  from '../modules/admin/components/pages/Products/Products'

import Category from '../modules/admin/components/pages/Category/Category';
import List from '../modules/admin/components/pages/Category/List';
import PList from '../modules/admin/components/pages/Products/List';
import Login from '../modules/admin/components/pages/Login/Login';
import Logout from '../modules/admin/components/pages/Logout/Logout';


let AdminRoutes = ()=>{
    return(
        <Routes>
            <Route path='admin' element={<AdminLayout />}>
                <Route path='' element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='setting' element={<Setting />} />
                <Route path='products' element={<Products />} />
                <Route path='products/list' element={<PList />} />
                <Route path='category' element={<Category />} />
                <Route path='category/:id' element={<Category />} />
                <Route path='category/list' element={<List />} />
                <Route path='logout' element={<Logout />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Route>
        </Routes>

        // /admin/category
        // admin/category/123
    )
}

export default AdminRoutes;
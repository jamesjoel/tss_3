import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../modules/layout/AdminLayout';
import Dashboard from '../modules/admin/components/pages/Dashboard/Dashboard'
import Setting from '../modules/admin/components/pages/Setting/Setting'
import Products  from '../modules/admin/components/pages/Products/Products'

import Category from '../modules/admin/components/pages/Category/Category';
import List from '../modules/admin/components/pages/Category/List';
import PList from '../modules/admin/components/pages/Products/List';


let AdminRoutes = ()=>{
    return(
        <Routes>
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
    )
}

export default AdminRoutes;
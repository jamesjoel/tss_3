import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Add from '../components/pages/Add'
import List from '../components/pages/List'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='add' element={<Add />} />
            <Route path='list' element={<List />} />
        </Routes>
    </>
  )
}

export default AllRoutes
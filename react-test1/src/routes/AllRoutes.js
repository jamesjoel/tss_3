import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Add from '../components/pages/Add'
import List from '../components/pages/List'
import About from '../components/pages/About'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='add' element={<Add />} />
            <Route path='about' element={<About />} />
            <Route path='edit/:id' element={<Add />} />
            <Route path='list' element={<List />} />
        </Routes>
    </>
  )
}

export default AllRoutes
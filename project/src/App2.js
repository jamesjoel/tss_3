import React from 'react'
import { Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom'
const App2 = () => {

  return (
    <>
      <Routes>
        <Route path='' element={<UserLayout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          <Route path='' element={<Dashborad />} />
          <Route path='product' element={<Product />} />
          <Route path='setting' element={<Setting />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>

        
      </Routes>
    </>
  )
}
let UserLayout = ()=>{
  return(
    <>
      <h1>User Navbar</h1>
        <Outlet />
      <h1>User Footer</h1>
    </>
  )
}
let AdminLayout = ()=>{
  return(
    <>
      <h1>Admin Navbar</h1>
        <Outlet />
      <h1>Admin Footer</h1>
    </>
  )
}




let Home = ()=>{
  return(
    <h1>Home</h1>
  )
}
let NotFound = ()=>{
  return(
    <h1>This page not found</h1>
  )
}
let About = ()=>{
  return(
    <h1>About</h1>
  )
}
let Contact = ()=>{
  return(
    <h1>Contact</h1>
  )
}
let Dashborad = ()=>{
  return(
    <h1>Dashboard</h1>
  )
}
let Product = ()=>{
  return(
    <h1>Product</h1>
  )
}
let Setting = ()=>{
  return(
    <h1>Setting</h1>
  )
}




export default App2
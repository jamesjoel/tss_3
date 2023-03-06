import React from 'react'
import { Routes, Route, Outlet, NavLink, Navigate} from 'react-router-dom'

const App5 = () => {
  return (
    <>
    <UserRoutes />
    </>
  )
}

let UserRoutes = ()=>{
    return(
        <Routes>
            <Route path='' element={<UserLayout />}>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route path='' element={<Dash />}/>
                <Route path='setting' element={<Setting />}/>
                <Route path='*' element={<Navigate to='/' />} />
            </Route>

        </Routes>
    )
}

let UserLayout = ()=>{
    return(
        <>
            <h1>Header</h1>
            <Outlet />
            <h1>Footer</h1>
        </>
    )
}
let AdminLayout = ()=>{
    return(
        <>
            <h1>Admin Header</h1>
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
        <h1>NotFolund</h1>
    )
}
let Dash = ()=>{
    return(
        <h1>Dash</h1>
    )
}
let Setting = ()=>{
    return(
        <h1>setting</h1>
    )
}
let About = ()=>{
    return(
        <h1>About</h1>
    )
}








export default App5
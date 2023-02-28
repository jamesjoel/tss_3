import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

const App2 = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
        </Routes>
    </>
  )
}

let Header = ()=>{
    return(
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </>
    )
}


let Home = ()=>{
    return(
        <h1>Home Page</h1>
    )
}
let About = ()=>{
    return(
        <h1>About Page</h1>
    )
}
let Contact = ()=>{
    return(
        <h1>Contact Page</h1>
    )
}



export default App2
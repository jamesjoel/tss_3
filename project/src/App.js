import React from 'react'
import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/Footer/Footer'

import { Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/contact/Contact';

const App = () => {
  return (
    <>
    <Navbar />
		<Routes>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
		</Routes>
	<Footer />
    </>
  )
}

export default App
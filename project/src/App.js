import React from 'react'
import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/Footer/Footer'

import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
    <Navbar />
		<AllRoutes />
	<Footer />

    </>
  )
}

export default App
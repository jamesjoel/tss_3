import { Routes, Route } from 'react-router-dom'
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About';
import Login from './components/pages/Login/Login'


let App = ()=>{
  return(
    <>
    <Header />
    <div className="container my-3" style={{minHeight : '700px'}}>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;
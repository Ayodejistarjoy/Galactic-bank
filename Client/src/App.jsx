
import './App.css'
import {BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Homepage from './Component/Homepage'
import Feature from './Component/Feature'
import AboutUs from './Component/AboutUs'
import Navy from './Component/Navy'
import Signin from './Component/Signin'
import Register from './Component/Register'
import { Toaster } from 'react-hot-toast'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Dashboard from './Component/Dashboard'
import Navend from './Component/Navend'
import Profile from './Component/Profile'
import Upload from './Component/Upload'
import Transfer from './Component/Transfer'





function App() {
   const token = localStorage.getItem('token')

  

  return (
    <>
    <Toaster/>
     <Router>
     <Navy />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Signin />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={ token ? <Dashboard/>: <Navigate to='/login'/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/upload'element={<Upload/>}/>
          <Route path="/transfer"element={<Transfer/>}/>
      </Routes>
      <Footer/>
      <Navend/>
     </Router>

    </>
  )
}

export default App

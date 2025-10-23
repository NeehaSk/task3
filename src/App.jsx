
// import TodoApp from './TodoApp.jsx'
// import {useState} from "react"
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import DocHomepage from './DocHomepage'
import Register from './Register'
import Login from './Login.jsx';
import Home from './Home.jsx'
import DoctorsPage from './DoctorsPage.jsx';
import DocNavbar   from './DocNavbar.jsx'
import Navbar from './DocNavbar.jsx';
import Patients from './Patients.jsx';
function App() {
  

  return (
  
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Doctorspage" element={<DoctorsPage/>}/>
                <Route path="/Patients" element={<Patients/>}/>

    </Routes>
    </BrowserRouter>
    
        
      </div>

  )
}

export default App

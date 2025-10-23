import React from 'react'
import {Link} from 'react-router-dom'
import './DocNavbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/Register'>Register</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/DoctorsPage'>DoctorsPage</Link>
        <Link to='/Patients'>Patients</Link>


      
    </div>
  )
}

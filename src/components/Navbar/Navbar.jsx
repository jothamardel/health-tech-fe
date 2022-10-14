import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className='navbar__logo'>Unify</div>
        <div className='navbar__menu'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/signup">Patient SignIn</Link></li>
            <li><Link to="/doctor-hospital">Doctor/Hospital</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
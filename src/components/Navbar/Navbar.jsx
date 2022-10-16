import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  const [user, setuser] = useState(null)

  const navigate = useNavigate();

  function logout(params) {
    localStorage.removeItem("user");
    navigate('/signin');
    window.location.reload();
  }

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if(userDetails ===undefined){
      return
    }
    setuser(JSON.parse(userDetails));
  }, []);
  return (
    <div className='navbar'>
      <nav>
        <div className='navbar__logo' style={{cursor:'pointer'}}><Link to="/">Unify</Link></div>
        <div className='navbar__menu'>
          <ul>
            <li><Link to="/">Home</Link></li>
            {user && <li><Link to="/dashboard">Dashboard</Link></li>}
            <li><Link to="/doctor-hospital">Doctor/Hospital</Link></li>
            {!user && <li><Link to="/signup">Patient SignIn</Link></li>}
            {user && <li onClick={logout}><Link to="#">Logout</Link></li>}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
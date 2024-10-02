import React from 'react'
import navLogo from '../assets/wg_horizontal_web.png'
import { Link } from "react-router-dom";
import './Header.css'




function Header() {
  return (
    <header>
      <nav className='container'>
        <Link to='/'> <img className='header-logo' src={navLogo} alt="cafe logo" /></Link>
        <ul className='header-list'>
          <li><Link to="/ContactPage">Contact</Link></li>
          <li><Link to="/AboutPage"> About Us </Link></li>
          <li><Link to="/Blog"> Blog </Link></li>
          <li><Link to="/Asigment-3"> Asigment-3 </Link></li>
          <li>Reservations</li>
        </ul>
        <Link className='profile-link' to="/profile">profile</Link>
      </nav>
    </header>
  )
}

export default Header
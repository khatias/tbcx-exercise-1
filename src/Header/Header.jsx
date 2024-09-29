import React from 'react'
import navLogo from '../assets/wg_horizontal_web.png'
import { Link } from "react-router-dom";

import './Header.css'
import ContactPage from '../pages/Contact/ContactPage';



function Header() {
  return (
    <div className='header'>
      <Link to='/'> <img className='header-logo' src={navLogo} alt="cafe logo" /></Link>
      
        <ul className='header-list'>
        <li><Link to="/ContactPage">Contact</Link></li>
        <li><Link to="/AboutPage"> About Us </Link></li>
        <li>order online</li>
        <li>Reservations</li>
        <li>About</li>
        </ul>
    </div>
  )
}

export default Header
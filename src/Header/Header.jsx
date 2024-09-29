import React from 'react'
import navLogo from '../assets/wg_horizontal_web.png'
import { Link } from "react-router-dom";
import './Header.css'




function Header() {
  return (
    <header className='header'>
      <nav>
        <Link to='/'> <img className='header-logo' src={navLogo} alt="cafe logo" /></Link>
        <ul className='header-list'>
        <li><Link to="/ContactPage">Contact</Link></li>
        <li><Link to="/AboutPage"> About Us </Link></li>
        <li><Link to="/AboutPage"> About Us </Link></li>
        <li><Link to="/Asigment-3"> Asigment-3 </Link></li>
        <li>Reservations</li>
     
        </ul>
      </nav>
    </header>
  )
}

export default Header
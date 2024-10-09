import React from 'react'
import navLogo from '../../assets/wg_horizontal_web.png'
import Link from 'next/link'
import './Header.css'





function Header() {
  return (
    <header>
      <nav className='container'>
        <Link href='/'> <img className='header-logo' src={navLogo.src} alt="cafe logo" /></Link>
        <ul className='header-list'>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about"> About Us </Link></li>
          <li><Link href="/blog"> Blog </Link></li>
          <li><Link href="/assignment3"> Asigment3 </Link></li>
          <li>Reservations</li>
        </ul>
        <Link className='profile-link' href="/profile">profile</Link>
    
      </nav>
    </header>
  )
}

export default Header
import React from 'react'
import navLogo from '../assets/wg_horizontal_web.png'

import './Header.css'



function Header() {
  return (
    <div className='header'>
      <img className='header-logo' src={navLogo} alt="cafe logo" />
        <ul className='header-list'>
          <li>order online</li>
          <li>Reservations</li>
          <li>Locations</li>
          <li>Menus</li>
          <li>About</li>
        </ul>
    </div>
  )
}

export default Header
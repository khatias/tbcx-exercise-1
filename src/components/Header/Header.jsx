'use '

import navLogo from '../../assets/wg_horizontal_web.png';
// import LogoutButton from '../LogoutButton/LogoutButton';
import Link from 'next/link';
import './Header.css';

function Header() {
 
  return (
    <header>
      <nav className='container'>
        <Link href='/'>
          <img className='header-logo' src={navLogo.src} alt="cafe logo" />
        </Link>
        <ul className='header-list'>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          {/* <li><Link href="/assignment3">Assignment3</Link></li> */}
          <li><Link href="/products">Products</Link></li>
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
        </ul>
        <Link className='profile-link' href="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;

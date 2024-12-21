"use client";
import HeaderTop from "./HeaderTop";
import Navbar from './Navbar';
function Header() {

  return (
    <header className="bg-white dark:bg-black " >
        <HeaderTop/>
        <Navbar/>
    </header>
  );
}

export default Header;
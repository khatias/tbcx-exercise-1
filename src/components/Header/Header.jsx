"use client";
import HeaderTop from "./HeaderTop";
import Navbar from './Navbar';
function Header() {

  return (
    <header className="bg-gray-100 dark:bg-black " >
        <HeaderTop/>
        <Navbar/>
    </header>
  );
}

export default Header;

"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import Navbar from './Navbar';
function Header() {

  return (
    <header className="bg-re dark:bg-black " >
        <HeaderTop/>
        <Navbar/>
    </header>
  );
}

export default Header;

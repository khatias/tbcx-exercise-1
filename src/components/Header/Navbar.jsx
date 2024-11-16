"use client";
import Link from "next/link";
import { useState } from "react";
import LogoLink from "../Header/LogoLink";
import DesktopNavLinks from "../Header/DesktopNavLinks";
import MobileMenuButton from "../Header/MobileMenuButton";
import MobileDrawer from "../Header/MobileDrawer";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log("cliked")
  };
  return (
    <div className="container mx-auto p-4  flex  w-full 2xl:px-20 ">
      <div className="hidden md:flex w-full justify-between items-center gap-5">
        <LogoLink />
        <DesktopNavLinks />
      </div>

      <div className="flex  w-full flex-col h-full md:hidden ">
        <div className="w-full flex justify-between items-center">
        <LogoLink />
        <MobileMenuButton  isOpen={isDrawerOpen} onClick={handleDrawerToggle} />
        </div>
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />

      </div>
    </div>
  );
}

export default Navbar;

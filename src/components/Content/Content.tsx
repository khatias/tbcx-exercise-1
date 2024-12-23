"use client";
import { useState } from "react";
import vase from "../../assets/ceramic-elkwood-vase-l.jpg";
import artisan from "../../assets/artisan-handcrafted-ceramic-hurricane-candleholder-1-l.jpg";
import square from "../../assets/square-quartz-stone-catchall-l.jpg";
import Image from "next/image";
import HeroSection from "./Hero/HeroSection";
function Content() {
  return (
    // <div className="flex flex-col transition-all duration-500 dark:bg-[#111111] dark:text-white bg-[#F5F5F5] text-[#333333]">
  <div className="flex-grow">
   <HeroSection />
  </div>
   
    


  );
}

export default Content;

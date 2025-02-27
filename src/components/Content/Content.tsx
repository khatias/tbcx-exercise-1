"use client";
import React from "react";
import HeroSection from "./Hero/HeroSection";
import Slider from "./Slider";
function Content() {
  return (
    <div className="flex-grow">
      <HeroSection />
      <Slider />
    </div>
  );
}

export default Content;

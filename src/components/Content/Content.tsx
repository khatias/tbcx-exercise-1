"use client";
import { useState } from "react";
import vase from "../../assets/ceramic-elkwood-vase-l.jpg";
import artisan from "../../assets/artisan-handcrafted-ceramic-hurricane-candleholder-1-l.jpg";
import square from "../../assets/square-quartz-stone-catchall-l.jpg";
import Image from "next/image";

function Content() {
  return (
    <div className="flex flex-col transition-all duration-500 dark:bg-[#111111] dark:text-white bg-[#F5F5F5] text-[#333333]">
      <header className="py-6 px-8 bg-[#242424] flex justify-between items-center">
        {/* <h1 className="text-4xl font-extrabold text-white">Home Decor</h1> */}
      </header>

      <main className="flex-grow p-8 max-w-screen-xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-[#333333] dark:text-white">
            Transform Your Living Space
          </h2>
          <p className="text-xl text-[#666666] dark:text-[#CCCCCC]">
            Explore our curated collection of home decor pieces that will elevate
            your living space. From statement furniture to unique accessories, we
            have something for every taste and style.
          </p>
        </section>

        <section>
          <h3 className="text-4xl font-bold mb-6 text-[#333333] dark:text-white">
            Our Collection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Vase Item */}
            <div className="relative bg-white dark:bg-[#222222] rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-200/50">
              <Image
                src={vase}
                alt="Ceramic Elkwood Vase"
                className="w-full h-[400px] object-cover rounded-t-2xl transition-all duration-300 transform hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-30"></div>
              <div className="p-6 relative z-10">
                <h4 className="font-bold text-2xl text-[#333333] dark:text-white hover:text-white transition duration-200">
                  Ceramic Elkwood Vase
                </h4>
              </div>
            </div>

            {/* Artisan Item */}
            <div className="relative bg-white dark:bg-[#222222] rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-200/50">
              <Image
                src={artisan}
                alt="Artisan Handcrafted Candleholder"
                className="w-full h-[400px] object-cover rounded-t-2xl transition-all duration-300 transform hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-30"></div>
              <div className="p-6 relative z-10">
                <h4 className="font-bold text-2xl text-[#333333] dark:text-white hover:text-white transition duration-200">
                 Ceramic Hurricane Candleholder
                </h4>
              </div>
            </div>

            {/* Square Item */}
            <div className="relative bg-white dark:bg-[#222222] rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-200/50">
              <Image
                src={square}
                alt="Square Quartz Stone Catchall"
                className="w-full h-[400px] object-cover rounded-t-2xl transition-all duration-300 transform hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-30"></div>
              <div className="p-6 relative z-10">
                <h4 className="font-bold text-2xl text-[#333333] dark:text-white hover:white transition duration-200">
                  Square Quartz Stone Catchall
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-4xl font-bold mb-6 text-[#333333] dark:text-white">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-[#EFEFEF] dark:bg-[#333333] p-8 rounded-lg shadow-xl hover:bg-[#d9d9d9] dark:hover:bg-[#444444] transition duration-300">
              <h4 className="font-semibold text-2xl text-[#333333] dark:text-white">
                Quality Craftsmanship
              </h4>
              <p className="text-[#555555] dark:text-[#CCCCCC]">
                We source only the finest materials to ensure every piece stands
                the test of time.
              </p>
            </div>
            <div className="bg-[#EFEFEF] dark:bg-[#333333] p-8 rounded-lg shadow-xl hover:bg-[#d9d9d9] dark:hover:bg-[#444444] transition duration-300">
              <h4 className="font-semibold text-2xl text-[#333333] dark:text-white">
                Sustainable Materials
              </h4>
              <p className="text-[#555555] dark:text-[#CCCCCC]">
                Our decor items are crafted with sustainable materials, promoting
                eco-friendly practices.
              </p>
            </div>
            <div className="bg-[#EFEFEF] dark:bg-[#333333] p-8 rounded-lg shadow-xl hover:bg-[#d9d9d9] dark:hover:bg-[#444444] transition duration-300">
              <h4 className="font-semibold text-2xl text-[#333333] dark:text-white">
                Affordable Luxury
              </h4>
              <p className="text-[#555555] dark:text-[#CCCCCC]">
                Redefine your space with luxurious pieces that fit within your
                budget.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-4xl font-bold mb-6 text-[#333333] dark:text-white">
            Shop Now and Redefine Your Home
          </h3>
          <p className="text-xl mb-4 text-[#666666] dark:text-[#CCCCCC]">
            Dive into our diverse collection of furniture, lighting, and
            decorative pieces to elevate your living space. Start your journey
            with us today!
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-8 rounded-lg text-xl hover:from-teal-500 hover:to-teal-700 transition duration-300 w-full max-w-[300px] mx-auto">
            Browse Our Collection
          </button>
        </section>
      </main>
    </div>
  );
}

export default Content;

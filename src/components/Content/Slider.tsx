import React, { useEffect, useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Product } from "../../types/products";
import Image from "next/image"; // Correct import for next/image

import BuyNow from "../products/buy-now";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Slider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const cardWidth = useRef<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .range(0, 10);

        if (error) {
          throw error;
        }

        setProducts(data || []);
      } catch (err: unknown) {
        setError("Error fetching products: " + (err as Error).message);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (sliderRef.current && products.length > 0) {
      cardWidth.current = sliderRef.current.children[0].clientWidth;
    }
  }, [products]);

  const nextSlide = () => {
    if (products.length === 0) return;

    if (currentIndex < products.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (products.length === 0) return;

    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center text-lg">No products available</div>;
  }

  return (
    <div className="container mx-auto py-8 2xl:px-20 pt-20">
      {products.length > 0 && (
        <div className="relative">
          <div className="overflow-x-hidden" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  products.length > 0
                    ? `translateX(-${currentIndex * cardWidth.current}px)`
                    : "translateX(0)",
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 p-4"
                >
                  <div className="border rounded-lg hover:transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                    <Image
                      src={
                        product.image.startsWith("http")
                          ? product.image
                          : `/${product.image}`
                      } 
                      alt={product.name}
                      width={400}
                      height={300}
                      className="rounded-t-lg bg-gray-100 w-full h-48 object-contain dark:bg-gray-700"
                    />

                    <div className="p-4 flex flex-col justify-between min-h-[160px]">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-md font-bold text-gray-800 dark:text-gray-200">
                          ${(product.price / 100).toFixed(2)}
                        </span>
                        <div className="bg-[#2c1a5c] text-white px-8 py-3 rounded-md dark:bg-[#3e1e76] dark:text-white">
                          <BuyNow
                            stripe_price_id={product.stripe_price_id}
                            product_id={product.id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-200 text-white p-2 rounded-full hover:bg-pink-600 transition duration-200 lg:-top-1 lg:left-[94%] lg:bg-white lg:text-black lg:rounded-none lg:hover:bg-white  ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            } dark:bg-gray-600 dark:hover:bg-gray-500`}
          >
            <ChevronLeftIcon className="h-6 w-6 " />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === products.length - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-200 text-white p-2 rounded-full hover:bg-pink-600 transition duration-200 lg:-top-1 lg:right-0 lg:bg-white lg:text-black lg:rounded-none lg:hover:bg-white ${
              currentIndex === products.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            } dark:bg-gray-600 dark:hover:bg-gray-500`}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

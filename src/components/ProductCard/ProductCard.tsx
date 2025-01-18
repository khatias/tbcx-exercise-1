"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "@/src/i18n/routing";
import { Product } from "@/src/types/products";
import BuyNow from "../products/buy-now";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleViewProduct = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="flex flex-col items-start pb-4 bg-white dark:bg-gray-800 overflow-hidden rounded-lg">
      <div className="relative w-full h-48">
        <Image
          src={
            product.image.startsWith("http")
              ? product.image
              : `/${product.image}`
          }
          alt={product.name}
          width={500}
          height={300}
          className="w-full h-full object-contain py-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col items-start justify-evenly w-full space-y-1 min-h-[140px]">
        <h2 className="font-semibold text-md text-gray-800 dark:text-white">
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-md font-medium">
          Price: ${(product.price / 100).toFixed(2)}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Category: {product.category}
        </p>
      </div>
      <div className="flex gap-4 w-full p-4">
        <div className="flex-1 py-2 bg-transparent text-gray-800 dark:text-white border-2 border-gray-800 dark:border-gray-300 rounded-full font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-gray-600 transition duration-200">
          <BuyNow
            stripe_price_id={product.stripe_price_id}
            product_id={product.id}
          />
        </div>
        <button
          onClick={handleViewProduct}
          className="flex-1 py-2 bg-black text-white rounded-full border-2 border-transparent hover:bg-white hover:text-black hover:border-black dark:hover:bg-gray-600 dark:hover:text-white dark:hover:border-gray-600 transition duration-200"
        >
          View Product
        </button>
      </div>
    </div>
  );
}

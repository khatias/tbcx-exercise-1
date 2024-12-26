"use client";

import React from "react";
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
    <div className="w-[300px] border flex justify-between flex-col pb-4">
      <div className="image h-1/2">
        <img src={product.image} alt={product.name} className="w-full h-full" />
      </div>
      <div className="content h-1/2 p-3 flex flex-col justify-around">
        <h2 className="font-medium text-xl text-center mt-2">{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
      <div className="flex flex-row align-center justify-center gap-6 mt-2">
        <BuyNow stripe_price_id={product.stripe_price_id} />
        <button
          onClick={handleViewProduct}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition duration-200 dark:bg-blue-800 dark:hover:bg-blue-500 max-w-[150px] "
        >
          View Product
        </button>
      </div>
    </div>
  );
}
// bg-blue-500 text-white p-3 rounded-full

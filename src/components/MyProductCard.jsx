"use client";

import React, { useState } from "react";
import Image from "next/image";
import DeleteProduct from "./Buttons/DeleteProductButton";

const MyProductCard = ({ products }) => {
  const [productsList] = useState(products);

  return (
    <div className="container mx-auto py-12 px-6 xl:px-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsList?.map((product) => (
          <div
            key={product.id}
            data-cy="my-product-card"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 transition-shadow duration-300"
          >
            <div className="w-full h-56 mb-4 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
              {product.image ? (
                <Image
                  src={
                    product.image.startsWith("http")
                      ? product.image
                      : "/placeholder.jpg"
                  }
                  alt={product.name || "Product image"}
                  width={300}
                  height={300}
                  className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
                
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors duration-300">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {product.description || "No description available"}
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <DeleteProduct id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProductCard;

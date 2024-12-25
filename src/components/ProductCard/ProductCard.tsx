'use client';

import React from 'react';
import { useRouter } from '@/src/i18n/routing';
import { Product } from '@/src/types/products';

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
      <button onClick={handleViewProduct} className="bg-blue-500 text-white p-3 rounded mt-2 max-w-[150px] m-auto">
        View Product
      </button>

    </div>
  );
}

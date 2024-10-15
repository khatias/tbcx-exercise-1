'use client'; 

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ productList }) {
  const searchParams = useSearchParams(); 
  const searchQuery = searchParams.get('search'); 
  const [filteredProducts, setFilteredProducts] = useState(productList);


  useEffect(() => {
    if (searchQuery) {
      const filtered = productList.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productList); 
    }
  }, [searchQuery, productList]);

  return (
    <div className='container'>
      <div className='products-container'>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;

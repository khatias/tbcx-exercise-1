'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';
import './ProductList.css';
import Sort from '../../components/Sort/Sort';
import Search from '../../components/Search/Search';

function ProductList({ productList }) {
  const searchParams = useSearchParams(); 
  const searchQuery = searchParams.get('search'); 
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [sortOrder, setSortOrder] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState(''); 

  useEffect(() => {

    const filterProducts = () => {
      let products = productList;

      if (searchQuery) {
        products = products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedCategory) {
        products = products.filter((product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      
      return products;
    };

    
    setFilteredProducts(filterProducts());
  }, [searchQuery, productList, selectedCategory]);

  
  const handleSortChange = (sortValue) => {
    let sortedProducts = [...filteredProducts];


    if (sortValue === 'low') {
      sortedProducts.sort((a, b) => a.price - b.price); 
    } else if (sortValue === 'high') {
      sortedProducts.sort((a, b) => b.price - a.price); 
    }

    setFilteredProducts(sortedProducts); 
    setSortOrder(sortValue); 
  };

  
  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory); 
  };


  const uniqueCategories = Array.from(new Set(productList.map(product => product.category)));

  return (
    <div className='container'>
      <div className='filter-wrapper'>
      <Search/>
      <Sort 
          onSortChange={handleSortChange} 
          onCategoryChange={handleCategoryChange} 
          categories={uniqueCategories}
        />
  
      </div>

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

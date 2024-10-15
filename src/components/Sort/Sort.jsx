
'use client'; 

import React from 'react';
import './sort.css'

function Sort({ onSortChange, onCategoryChange, categories }) {
  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    onSortChange(selectedValue); 
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory); 
  };

  return (
    <div className='selects-container'>
      <select onChange={handleSortChange}>
        <option value='' disabled>Select Sorting Type</option>
        <option value='low'>Price Low to High</option>
        <option value='high'>Price High to Low</option>
      </select>

      <select onChange={handleCategoryChange}>
        <option value='' disabled>Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Sort;

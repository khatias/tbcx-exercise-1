'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; 
import './sort.css';

function Sort() {
  const router = useRouter(); 

  const handleChange = (e) => {
    const value = e.target.value;

  
    const params = new URLSearchParams(window.location.search);
    params.set('sort', value); 

    router.push(`${window.location.pathname}?${params.toString()}`); 
  };

  return (
    <div className='selects-container'>
      <select onChange={handleChange} defaultValue="">
        <option value='' disabled>Select Sorting Type</option>
        <option value='asc'>Price Low to High</option>
        <option value='desc'>Price High to Low</option>
      </select>
    </div>
  );
}

export default Sort;

import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'





function ProductList({ productList }) {
    return (
      <div className='container'>
        <div className='products-container'>
          {productList && productList.length > 0 ? (
            productList.map((product) => (
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
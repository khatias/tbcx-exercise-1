'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductList from './ProductList'

const productsUrl= 'https://dummyjson.com/products'

function Products() {
  const [productList, setProductList] = useState([]);

 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(productsUrl);
        const data = await response.json();
        setProductList(data.products);
       
      } catch (error) {
        console.log(error);
        setProductList([]);
      }
    }

    fetchProducts(); 
  }, []);

;

  return (
    <>
      <Header />
      <main>
      <ProductList productList={productList} />
    
      </main>
      <Footer />
    </>
  );
}

export default Products;

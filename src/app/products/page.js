import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductList from './ProductList';
import Search from '../../components/Search/Search';

const productsUrl = 'https://dummyjson.com/products';

async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Products() {
  const productList = await fetchProducts();

  return (
    <>
      <Header />
      <main>
        <div>
          <Search />
        </div>
        <ProductList productList={productList} />
      </main>
      <Footer />
    </>
  );
}



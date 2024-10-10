import React from 'react';
import ProductPage from '../ProductPage';

export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  
    return data.products.map((product) => ({
        slug: product.id.toString(),
    }));
}

export default async function ProductDetails({ params }) {
    const { slug } = params;
    
    const response = await fetch(`https://dummyjson.com/products/${slug}`);
    const product = await response.json();
  
    return (
        <div>
            <ProductPage product={product} />
        </div>
    );
}


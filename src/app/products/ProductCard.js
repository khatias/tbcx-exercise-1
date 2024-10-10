import react from 'react';
import './ProductCard.css'
import Link from 'next/link';
import { FaStar } from 'react-icons/fa'; 



function ProductCard({ product }) {
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <FaStar key={i} color={i <= product.rating ? '#a65e3f' : 'gray'} /> 
        );
      }
      return stars;
    };
  
    return (
      <div className="product-card">
        <img className='product-img' src={product.images[0]} alt={product.title} />
        <h4>{product.title}</h4>
        <p className='product-description'>{product.description.length > 100 ? product.description.substring(0, 70) + '...' :product.description}</p>

        <div className='price-rating-box'>
        <p className='product-price'>Price: $ {product.price}</p>
        <div className="product-rating">
          {renderStars()} <span>{product.rating}</span>
        </div>
        </div>
        <button  className="view-details-button">
        View Details
        </button>
      </div>
    );
  }
  
  export default ProductCard;

import React from 'react';
import malayChickenImage from '../../../assets/malay-chicken.jpg'; 
import fragrantDuck from '../../../assets/fragrant-duck.jpg'; 
import assamPrawn from '../../../assets/assam-prawn.jpg'; 
import './Cards.css'


function Card({product}) {
  return (
    <div className='card' >
        <img
        className='card-image' 
        src={product.imageSrc.src} 
        alt={product.name} 
       
       
      />
      <div className='card-content'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div className='container'>
      
      <div className='cards-container'>
        <Card 
          product={{
            title: 'malay chicken',
            description: '6 skewers marinated in lemongrass, ginger, shallots and spices. Served with a peanut dipping sauce',
            imageSrc: malayChickenImage 
          }}
        />

  <Card 
          product={{
            title: 'Fragrant duck',
            description: 'Twice cooked fresh duck spiced with Sichuan Peppercorn and 5 spice. Served with steamed buns, Sichuan peppercorn salt.',
            imageSrc: fragrantDuck 
          }}
        />

  <Card 
          product={{
            title: 'Assam prawn',
            description: 'When we say assam we mean irresistibly sour. Prawns are wok-fried in a tamarind sauce with shallots, garlic and turmeric.',
            imageSrc: assamPrawn 
          }}
        />
      </div>
    </div>
  );
}

  
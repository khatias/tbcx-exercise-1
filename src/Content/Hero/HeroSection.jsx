import React from 'react'
import './HeroSection.css'
import contentImg from '../../assets/food.jpg'

function HeroSection() {
  return (
    <div className='hero-section'>
    <img className='hero-img' src={contentImg} alt="food image" />
    <div className='hero-content'>
      <h1>We’re looking forward to seeing you again.</h1>
      <p>Take a culinary tour of China and Southeast Asia. Family style service, like in classic Asian restaurants, creates an enriching experience where guests share a range of tastes together.</p>
      <button>MENU</button>
    </div>
 
</div>
  )
}

export default HeroSection
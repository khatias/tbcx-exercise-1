import React from 'react'
import Blog from './Blog'
import ChickenTacos from '../../assets/Favorite-Chicken-Tacos.jpg'; 

function BlogPageContent() {
  return (
    <main>
      <div className='container'>
        <div className='blogs-container'>
          <Blog
            imageSrc={ChickenTacos } 
            title="Ridiculously Good Chicken Tacos with Green Sauce"
            description="Just 20 minutes to get these chicken tacos on the table! Juicy, flavorful, and absolutely mindless in the best way." />

          <Blog
            imageSrc={ChickenTacos } 
            title="Ridiculously Good Chicken Tacos with Green Sauce"
            description="Just 20 minutes to get these chicken tacos on the table! Juicy, flavorful, and absolutely mindless in the best way." />

          <Blog
            imageSrc={ChickenTacos } 
            title="Ridiculously Good Chicken Tacos with Green Sauce"
            description="Just 20 minutes to get these chicken tacos on the table! Juicy, flavorful, and absolutely mindless in the best way." />

          <Blog
            imageSrc={ChickenTacos } 
            title="Ridiculously Good Chicken Tacos with Green Sauce"
            description="Just 20 minutes to get these chicken tacos on the table! Juicy, flavorful, and absolutely mindless in the best way." />
        </div>
      </div>
  </main>
  )
}

export default BlogPageContent
import React from 'react'
import contentImg from './assets/food.jpg'
import './Content.css'

function Content() {
  return (
    <div className='content-container'>
        <img src={contentImg} alt="food image" />
        <div>
        <h1>We’re looking forward to seeing you again.</h1>

        <p>Take a culinary tour of China and Southeast Asia. Family style service, like in classic Asian restaurants, creates an enriching experience where guests share a range of tastes together.</p>
        <a href="?">SEE OUR MENUS</a>
        </div>
    </div>
  )
}

export default Content
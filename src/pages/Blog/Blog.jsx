import React from 'react'


function Blog({title, description,imageSrc }) {
  return (
    <div className='blog-card'>
      <div className='blog-img-container'>
        <img className='blog-image' src={imageSrc} 
        alt={title}
        />

      </div>
      <div className='blog-content'>
        <h2>{title}</h2>
        <p>{description}</p>
        <a className='continue-reading-link' href="/blog">Continue Reading</a>
        </div>
    </div>
  )
}

export default Blog


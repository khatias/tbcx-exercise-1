import React from 'react'
import BlogCard from './BlogCard'
import './BlogList.css'
function BlogList(props) {

  return (
    <div className='container'>
    <div className='blogs-container'>
      
        {props.bloglist.map((blog)=> (
         <BlogCard key={blog.id} blog={blog}/>
         ))}
      </div>
    </div>
  )
}

export default BlogList


import react from 'react';
import './BlogCard.css'
import dislike from '../../assets/dislike.svg'; 
import like from '../../assets/like.svg'; 
import Link from 'next/link';


function BlogCard({ blog }) {
  
  return (
    <>
      <Link href={`/blog/${blog.id}`}>
        <div className="blog-card blog-card-hover">
          <h2>{blog.title}</h2>
          <p>{blog.body.length > 100 ? blog.body.substring(0, 300) + '...' : blog.body}</p>


          <div className='tags-container'>
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
          
          <div className='reactions-box'>
            <span className='reaction'>
              {blog.reactions.likes}
              <img className='reaction-img' src={like.src} alt="dislike-icon" />
            </span>

            <span className='reaction'>
              {blog.reactions.dislikes}
              <img className='reaction-img' src={dislike.src} alt="dislike-icon" />
            </span>

            <span className='reaction'>
              {blog.views}
              <svg className='reaction-img'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z" fill="#2A4157" fill-opacity="0.24"></path> <circle cx="12" cy="12" r="3" fill="#222222"></circle> </g></svg>
            </span> 
          </div>      
        </div> 
    </Link>
    </>

  );
}

export default BlogCard;

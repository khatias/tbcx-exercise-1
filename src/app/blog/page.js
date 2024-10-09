'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BlogList from './blogList'

const blogUrl= 'https://dummyjson.com/posts'

function Blog() {
  const [bloglist, setbloglist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 5; // Number of blogs per page

  useEffect(() => {
    async function fetchBlogs(page) {
      try {
        const response = await fetch(`${blogUrl}?limit=${limit}&skip=${(page - 1) * limit}`);
        const data = await response.json();
        setbloglist(data.posts);
        setTotalPages(Math.ceil(data.total / limit)); // Assuming the API returns total number of posts
      } catch (error) {
        console.log(error);
        setbloglist([]);
      }
    }

    fetchBlogs(currentPage); // Fetch for the current page
  }, [currentPage]);

  const handlePagination = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page); // Update current page
    }
  };

  return (
    <>
      <Header />
      <main>
        <BlogList bloglist={bloglist} />
        <div className="container">
          <div className='pagination'>
            <button 
              onClick={() => handlePagination(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path 
                  fillRule="evenodd" 
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>

            <span>Page {currentPage} of {totalPages}</span>

            <button 
              onClick={() => handlePagination(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path 
                  fillRule="evenodd" 
                  d="M4.646 14.354a.5.5 0 0 1 0-.708L10.293 8 4.646 2.354a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;

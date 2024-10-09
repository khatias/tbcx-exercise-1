import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BlogPageContent from './BlogContent';
import './BlogContent.css'

function BlogPage() {
  return (
    <>
    <Header />
    <BlogPageContent />
    <Footer />
    </>
  )
}

export default BlogPage
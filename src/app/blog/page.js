import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogList from './blogList';


const blogUrl = 'https://dummyjson.com/posts';


export default async function Blog() {
  'use server'
  const res = await fetch(blogUrl);
  const data = await res.json();
  const bloglist = data.posts; 



  return (
    <>
      <Header />
      <main>
        <BlogList bloglist={bloglist} />
      </main>
      <Footer />
    </>
  );
}

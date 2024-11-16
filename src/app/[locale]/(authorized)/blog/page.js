'use server'
import BlogList from './blogList';
// import Header from '../../../components/Header/Header';
// import Footer from '../../../components/Footer/Footer';



const blogUrl = 'https://dummyjson.com/posts';


export default async function Blog() {
  const res = await fetch(blogUrl);
  const data = await res.json();
  const bloglist = data.posts; 



  return (
    <>
      {/* <Header/> */}
      <main className='bg-gray-100 dark:bg-black ' >
        <div className="container mx-auto 2xl:px-20">
        <BlogList bloglist={bloglist} />
        </div>
       
      </main>
      {/* <Footer/> */}
 
    </>
  );
}
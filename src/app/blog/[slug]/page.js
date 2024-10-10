import BlogPostPage from "../BlogPostPage";
export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
  
    return data.posts.map((post) => ({
      slug: post.id.toString(), 
    }));
  }
  
  export default async function BlogPost({ params }) {
    const { slug } = params;
    
    const response = await fetch(`https://dummyjson.com/posts/${slug}`);
    const post = await response.json();
  
    return (
      <div>
        <BlogPostPage post={post} />
      </div>
    );
  }
  
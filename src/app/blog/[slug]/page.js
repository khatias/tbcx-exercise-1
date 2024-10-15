import BlogPostPage from "../BlogPostPage";


async function getPost(slug) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${slug}`);
    if (!res.ok) {
      throw new Error(`Could not find post with id ${slug}`);
    }
    return await res.json();
    
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; 
  }
}

export async function generateStaticParams() {
  const { posts } = await (await fetch("https://dummyjson.com/posts")).json(); 
  return posts.map(({ id }) => ({ slug: id.toString() }));
}

export default async function Post({ params }) {
  const post = await getPost(params.slug);

  return (
    <div>
      {post ? <BlogPostPage post={post} /> : <div>Error loading post.</div>}
    </div>
  );
}

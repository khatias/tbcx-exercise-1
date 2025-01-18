import React from "react";
import BlogPostPage from "../BlogPostPage";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

interface Params {
  id: string;
}

async function getPost(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) {
      throw new Error(`Could not find post with id ${id}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    const posts: Post[] = data.posts;

    return posts.map((post) => ({ id: post.id.toString() }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

interface PageProps {
  params: Params;
}

export default async function Post({ params }: PageProps) {
  const post = await getPost(params.id);

  return (
    <div>
      {post ? <BlogPostPage post={post} /> : <div>Error loading post.</div>}
    </div>
  );
}

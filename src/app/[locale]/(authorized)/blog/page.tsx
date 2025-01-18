import React from "react";
import BlogList from "./BlogList";

const blogUrl = "https://dummyjson.com/posts";

export default async function Blog() {
  const res = await fetch(blogUrl);
  const data = await res.json();
  const bloglist = data.posts;

  return (
    <main className="bg-gray-100 dark:bg-black">
      <div className="container mx-auto 2xl:px-20">
        <BlogList bloglist={bloglist} />
      </div>
    </main>
  );
}

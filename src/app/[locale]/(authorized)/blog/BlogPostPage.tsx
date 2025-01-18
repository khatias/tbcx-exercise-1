import React from "react";

import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/outline";

interface BlogPost {
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <main className="bg-gray-100 dark:bg-black h-[80vh] text-gray-900 dark:text-gray-100">
      <div className="container mx-auto pt-28 2xl:px-20 p-4">
        <div>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-lg mb-6">{post.body}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full px-3 py-1 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center pt-4 gap-4">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              {post.reactions.likes}
              <ThumbUpIcon className="w-6 h-6 text-blue-500" />
            </span>

            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              {post.reactions.dislikes}
              <ThumbDownIcon className="w-6 h-6 text-red-500" />
            </span>

            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              {post.views}
              <EyeIcon className="w-6 h-6 text-gray-500" />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

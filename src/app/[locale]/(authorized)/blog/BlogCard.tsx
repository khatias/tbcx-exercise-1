import React from "react";
import Image from "next/image";
import dislike from "../../../../assets/dislike.svg";
import like from "../../../../assets/like.svg";
import Link from "next/link";
import { useLocale } from "next-intl";

interface Blog {
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

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const locale = useLocale();

  return (
    <Link href={`/${locale}/blog/${blog.id}`}>
      <div className="rounded-lg p-4 bg-white dark:bg-gray-900 h-72 flex flex-col justify-around">
        <h2 className="font-bold text-lg">{blog.title}</h2>
        <p className="text-sm">
          {blog.body.length > 100
            ? blog.body.substring(0, 200) + "..."
            : blog.body}
        </p>

        <div className="flex gap-3">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-[#e11ff1] rounded dark:bg-gray-700 dark:text-white"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center pt-4 gap-2">
          <span className="flex gap-2 items-center">
            {blog.reactions.likes}
            <Image src={like} alt="like-icon" width={24} height={24} />
          </span>

          <span className="flex gap-2 items-center">
            {blog.reactions.dislikes}
            <Image src={dislike} alt="dislike-icon" width={24} height={24} />
          </span>

          <span className="flex gap-2 items-center">
            {blog.views}
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
                fill="#2A4157"
                fillOpacity="0.24"
              ></path>
              <circle cx="12" cy="12" r="3" fill="#222222"></circle>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

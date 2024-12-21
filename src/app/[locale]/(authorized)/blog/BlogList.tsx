import BlogCard from "./BlogCard";

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

interface BlogListProps {
  bloglist: Blog[];
}

export default function BlogList({ bloglist }: BlogListProps) {
  return (
    <div className="flex flex-col gap-6 p-4 md:grid grid-cols-3 pt-12">
      {bloglist.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

import BlogCard from "./BlogCard";

function BlogList(props) {
  return (
    <div className="flex flex-col gap-6 p-4 md:grid grid-cols-3 pt-12">
      {props.bloglist.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;

import dislike from "../../../../assets/dislike.svg";
import like from "../../../../assets/like.svg";

const BlogPostPage = ({ post }) => {
  return (
    <>
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
                <img className="w-6" src={like.src} alt="like-icon" />
              </span>

              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                {post.reactions.dislikes}
                <img className="w-6" src={dislike.src} alt="dislike-icon" />
              </span>

              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                {post.views}
                <svg
                  className="w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
                    className="fill-gray-400 dark:fill-gray-600"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    className="fill-gray-800 dark:fill-gray-200"
                  ></circle>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPostPage;

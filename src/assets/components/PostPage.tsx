import { useParams } from "react-router-dom";
import PostsData from "../data/PostsData";

const PostPage = () => {
  const { id } = useParams();
  const postId = parseInt(id || "-1", 10);
  const post = PostsData.find((p) => p.id === postId);

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <img
        src={post.banner}
        className="w-full h-[300px] object-cover rounded-3xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-5">
        By {post.author} | {post.date}
      </p>
      <p className="text-lg">{post.content}</p>
    </div>
  );
};

export default PostPage;

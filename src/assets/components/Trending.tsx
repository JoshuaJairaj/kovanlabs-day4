import PostsData from "../data/PostsData";
import Post from "./Post";

function Trending(){
    const TempTrendingPosts = PostsData
            .sort((a, b) => b.likeCount - a.likeCount) 
            .slice(0, 3) 
    return(
        <div  className="page-alignment">
        {[...TempTrendingPosts]
            .map((post) => (
              <Post
                id = {post.id}
                key={post.title} 
                author={post.author}
                date={post.date}
                profile={post.profile}
                title={post.title}
                content={post.content}
                banner={post.banner}
                likeCount={post.likeCount}
                comments={post.comments}
              />
            ))}
        </div>
    )
}
export default Trending;
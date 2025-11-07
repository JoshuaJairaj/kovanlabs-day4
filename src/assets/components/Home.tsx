import PostsData from "../data/PostsData";
import Post from "./Post";

function Home(){
    const tempPostsData = PostsData;
    return(
        <div className="page-alignment">
            {tempPostsData.map((post)=>(
                <Post
                    id={post.id}
                    author={post.author}
                    date={post.date}
                    profile={post.profile}
                    title={post.title}
                    content={post.content}
                    banner={post.banner}
                    likeCount={post.likeCount}
                    comments={post.comments}
                ></Post>
            ))}
        </div>
    )
}
export default Home;
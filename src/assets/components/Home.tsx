import PostsData from "../data/PostsData";
import Post from "./Post";
import type { PostsStructure } from "../interfaces/PostsStructure";
import { useEffect, useState } from "react";

function Home(){
    const [posts,setPosts] = useState<PostsStructure[]>(PostsData)
    useEffect(() => {
    const savedPosts = localStorage.getItem("postslist");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts)); 
      console.log("new posts added")
    } else {
      setPosts(PostsData);
    }
  }, []);
    console.log(posts.length)
    return(
        <div className=" lg:w-[60%] mx-auto mb-20 md:w-[90%] sm:w-[100%]">
            {posts.map((post)=>(
                <Post
                    id={post.id}
                    author={post.author}
                    date={post.date}
                    avatar={post.avatar}
                    title={post.title}
                    content={post.content}
                    banner={post.banner}
                    likeCount={post.likeCount}
                    dislikeCount={post.dislikeCount}
                    comments={post.comments}
                    likeStatus={post.likeStatus}
                ></Post>
            ))}
        </div>
    )
}
export default Home;
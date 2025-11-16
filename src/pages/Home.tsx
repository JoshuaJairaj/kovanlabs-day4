import PostsData from "../assets/data/PostsData";
import Post from "../components/Post";
import type { PostsStructure } from "../assets/types/Types";
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
                    PostStructure={post}
                ></Post>
            ))}
        </div>
    )
}
export default Home;
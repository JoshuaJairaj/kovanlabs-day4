import { useState } from "react";
import PostsData from "../data/PostsData";
import type { PostsStructure } from "../interfaces/PostsStructure";
import Post from "./Post";

function Trending(){

    const [posts,setPosts] = useState<PostsStructure[]>(PostsData)
    const savedPosts = localStorage.getItem('posts')
    savedPosts ? setPosts(JSON.parse(savedPosts)) : posts

    return(
        <div  className="page-alignment">
        {[...posts]
        .sort((a, b) => b.likeCount - a.likeCount) 
            .slice(0, 3) 
            .map((post) => (
              <Post
                id = {post.id}
                key={post.title} 
                author={post.author}
                date={post.date}
                avatar={post.avatar}
                title={post.title}
                content={post.content}
                banner={post.banner}
                likeCount={post.likeCount}
                dislikeCount ={post.dislikeCount}
                comments={post.comments}
                likeStatus={post.likeStatus}
              />
            ))}
        </div>
    )
}
export default Trending;
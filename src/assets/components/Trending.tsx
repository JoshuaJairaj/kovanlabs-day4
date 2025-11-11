import { useState } from "react";
import PostsData from "../data/PostsData";
import type { PostsStructure } from "../interfaces/PostsStructure";
import TrendingPost from "./TrendingPost";
import FeaturedPost from "./FeaturedPost";

function Trending(){

    const [posts,setPosts] = useState<PostsStructure[]>(PostsData)
    const savedPosts = localStorage.getItem('posts')
    savedPosts ? setPosts(JSON.parse(savedPosts)) : posts
    const sortedPosts = [...posts].sort((a,b)=> b.likeCount - a.likeCount)
    const featuredPost = sortedPosts[0]

    return(
        <div className="lg:w-[95%] m-auto flex lg:flex-row h-[calc(100vh-3.3rem)] overflow-hidden md:flex-col md:w-[100%]">
          <div className="lg:w-6/11 p-5 md:w-[100%]">
          <div className="p-2 text-center font-medium text-3xl"><p>Featured post</p></div>
            <FeaturedPost
            id={featuredPost.id}
            key={featuredPost.id}
            author={featuredPost.author}
            date={featuredPost.date}
            avatar={featuredPost.avatar}
            title={featuredPost.title}
            content={featuredPost.content}
            banner={featuredPost.banner}
            likeCount={featuredPost.likeCount}
            dislikeCount={featuredPost.dislikeCount}
            comments={featuredPost.comments}
            likeStatus={featuredPost.likeStatus}
          />
          </div>
          <div className="lg:w-5/11 h-full overflow-y-scroll p-3 bg-gray-100 md:w-[100%]">
            {sortedPosts
            .slice(1, 5) 
            .map((post) => (
              <TrendingPost
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
        </div>
    )
}
export default Trending;
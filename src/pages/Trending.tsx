import { useState } from "react";
import PostsData from "../assets/data/PostsData";
import type { PostsStructure } from "../assets/types/Types";
import TrendingPost from "../components/TrendingPost";
import FeaturedPost from "../components/FeaturedPost";

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
            PostStructure={featuredPost}
          />
          </div>
          <div className="lg:w-5/11 h-full overflow-y-scroll p-3 bg-gray-100 md:w-[100%]">
            {sortedPosts
            .slice(1, 5) 
            .map((post) => (
              <TrendingPost
                PostStructure={post}
              />
            ))}
          </div>
        </div>
    )
}
export default Trending;
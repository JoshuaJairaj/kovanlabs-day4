import { Link } from "react-router-dom"
import like from "/like.png"
import liked from "/liked.png"
import { useState } from "react";
import type { PostsStructure } from "../assets/types/Types";

interface PostFormat{
    PostStructure : PostsStructure;
}


const FeaturedPost: React.FC<PostFormat> = ({PostStructure}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(PostStructure.likeCount);

      const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };
    return (
        <div className="mx-4 mt-2 mb-5 pb-1 rounded overflow-hidden shadow md:mx-auto">
            <Link key={PostStructure.id} to={`/post/${PostStructure.id}`}>
            <div className="px-3 py-2 border-gray-200 hover:cursor-pointer">
                <img src={PostStructure.banner} className="aspect-16/6 w-full rounded mb-3 object-cover"/>
                <div className="px-3 py-1 flex flex-row  items-center hover:cursor-default">
                    <img className="h-[30px] aspect-square rounded-full mr-2" src={PostStructure.avatar} alt="avatar" />
                    <div className="flex flex-row w-[35%] justify-between">
                        <p>{PostStructure.author}</p>
                        <p>|</p>
                        <p className="text-gray-500">{PostStructure.date}</p>
                    </div>
                </div>
                <div className="px-2">
                    <h3 className="text-2xl font-medium">{PostStructure.title}</h3>
                    <p className="text-justify">{PostStructure.content.length>320 ? PostStructure.content.substring(0,320).trim()+"..." : PostStructure.content}</p>
                </div>
                <button onClick={handleLike} className="flex flex-row items-center hover:cursor-pointer m-2">
                <img className="h-[20px] aspect-1/1 mr-1" src={isLiked? liked : like} alt="" />
                <p className="text-sm">{likesCount}</p>
                </button>
            </div>
            </Link>
        </div>
    )
}

export default FeaturedPost;
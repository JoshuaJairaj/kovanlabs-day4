import { Link } from "react-router-dom"
import like from "/like.png"
import liked from "/liked.png"
import { useState } from "react";
import type { PostsStructure } from "../assets/types/Types";

interface PostFormat{
    PostStructure: PostsStructure;
}


const TrendingPost: React.FC<PostFormat> = ({PostStructure}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(PostStructure.likeCount);

    const toCamelCase = (str: string) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
    };
    
          const handleLike = () => {
        if (isLiked) {
          setLikesCount((prev) => prev - 1);
        } else {
          setLikesCount((prev) => prev + 1);
        }
        setIsLiked(!isLiked);
      };
    return (
        <div className="flex flex-row mt-5 shadow-lg p-2 rounded-sm bg-white">
            <div className="w-3/5 flex flex-col pl-3">
            <Link key={PostStructure.id} to={`/post/${PostStructure.id}`}>
            <div>
                <div className="flex flex-row mt-2 items-center">
                    <img className="aspect-1/1 h-[1.5rem] rounded-full" src={PostStructure.avatar} alt="avatar"/>
                    <p className="mx-2 text-sm">{PostStructure.author}</p>
                    <p>|</p>
                    <p className="text-gray-400 text-sm px-1 py-1">{PostStructure.date}</p>
                </div>
                <div className="pr-2 hover:cursor-pointer">
                    <p className="text-lg font-semibold">{toCamelCase(PostStructure.title)}</p>
                    <p className="text-justify text-sm leading-snug">{ PostStructure.content.length>120 ? PostStructure.content.substring(0,120)+"..." : PostStructure.content}</p>
                </div>
            </div>
            </Link>
                <button onClick={handleLike} className="mt-1 flex flex-row items-center hover:cursor-pointer">
                    <img className="h-[15px] aspect-1/1 mr-1" src={isLiked? liked : like} alt="" />
                    <p className="text-sm">{likesCount}</p>
                </button>
            </div>
            <div className="w-2/5"><img className="w-auto h-full rounded-xl aspect-4/3 p-2" src={PostStructure.banner}/></div>
        </div>
    )
}

export default TrendingPost;
import { Link } from "react-router-dom"
import like from "/like.png"
import liked from "/liked.png"
import { useState } from "react";

interface PostsStructure{
    id: number
    author: string,
    date: string,
    avatar: string,
    title: string,
    content: string,
    banner: string,
    likeCount: number,
    dislikeCount: number,
    comments: string[],
    likeStatus: number
}


const FeaturedPost: React.FC<PostsStructure> = ({id, author, date, avatar, title, content, banner, likeCount}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likeCount);

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
            <Link key={id} to={`/post/${id}`}>
            <div className="px-3 py-2 border-gray-200 hover:cursor-pointer">
                <img src={banner} className="aspect-16/6 w-full rounded mb-3 object-cover"/>
                <div className="px-3 py-1 flex flex-row  items-center hover:cursor-default">
                    <img className="h-[30px] aspect-square rounded-full mr-2" src={avatar} alt="avatar" />
                    <div className="flex flex-row w-[35%] justify-between">
                        <p>{author}</p>
                        <p>|</p>
                        <p className="text-gray-500">{date}</p>
                    </div>
                </div>
                <div className="px-2">
                    <h3 className="text-2xl font-medium">{title}</h3>
                    <p className="text-justify">{content.length>320 ? content.substring(0,320).trim()+"..." : content}</p>
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
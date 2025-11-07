import { useState } from "react";
import { Link } from "react-router-dom"
import like from "/like.png";
import liked from "/liked.png";
import comment from "/comment.png"

interface PostsStructure{
    id: number
    author: string,
    date: string,
    profile: string,
    title: string,
    content: string,
    banner: string,
    likeCount: number,
    comments: string[]
}


const Post: React.FC<PostsStructure> = ({id, author, date, profile, title, content, banner, likeCount, comments}) => {
    const [likeStatus, setLikeStatus] = useState(false)
    const [currentLikeCount, setCurrentLikeCount] = useState(likeCount)

    const toggleLike = ()=>{
        setLikeStatus(prev => !prev)
        setCurrentLikeCount(prev => likeStatus ? prev-1 : prev+1)
    }

    return (
        <div className="mt-2 mb-5 bg-gray-200 pb-1 rounded-xl overflow-hidden">
            <Link key={id} to={`/post/${id}`}>
            <div className="px-3 py-2 border-gray-200 bg-gray-100 hover:cursor-pointer">
                <img src={banner} className="aspect-5/2 w-full rounded-xl mb-3 object-cover"/>
                <div className="h-[130px] overflow-y-hidden px-2">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="text-base">{content}</p>
                </div>
            </div>
            </Link>
            <div className="py-2 hover:cursor-default">
                <div className="h-15 flex flex-row px-5 mb-1 w-full justify-between">
                    <div className="flex flex-row items-center">
                        <img src={profile} alt="profile" className="h-full p-1"/>
                        <div className= "ml-2">
                            <p className="font-medium text-gray-800">{author}</p>
                            <p className="text-gray-600">{date}</p>
                        </div>
                    </div>
                    <div className="flex flex-row py-2">
                        <button className="flex flex-row items-center mr-3" onClick={toggleLike}><img src={likeStatus? like : liked} alt="like button" className="h-[70%] mr-2 hover:cursor-pointer"/>{likeCount}</button>
                        <button className="flex flex-row items-center mr-3"><img src={comment} alt="comment button" className="h-[70%] mr-2 hover:cursor-pointer"/> {comments.length}</button>
                    </div>
                </div>
                <div className="border-2 border-gray-400 px-2 mx-3 mb-1">
                    <p className="text-xl font-medium">Comments</p>
                    <ul className="list-disc list-inside px-6">
                        {comments.map((comment)=>(
                            <li>{comment}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Post;
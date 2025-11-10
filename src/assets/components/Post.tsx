import { Link } from "react-router-dom"
import likeEmpty from "/like-empty.png";
import likeFull from "/like-full.png";
import dislikeEmpty from "/dislike-empty.png";
import dislikeFull from "/dislike-full.png";
import comment from "/comment.png"

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


const Post: React.FC<PostsStructure> = ({id, author, date, avatar, title, content, banner, likeCount,dislikeCount, comments,likeStatus}) => {

    return (
        <div className="mt-2 mb-5 bg-gray-200 pb-1 rounded-xl overflow-hidden">
            <Link key={id} to={`/post/${id}`}>
            <div className="px-3 py-2 border-gray-200 bg-gray-100 hover:cursor-pointer">
                <img src={banner} className="aspect-5/2 w-full rounded-xl mb-3 object-cover"/>
                <div className="overflow-y-hidden px-2">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="text-base">{content.length>200 ? content.substring(0,200).trim()+"..." : content}</p>
                </div>
            </div>
            </Link>
            <div className="py-2 hover:cursor-default">
                <div className="h-15 flex flex-row px-5 mb-1 w-full justify-between">
                    <div className="flex flex-row items-center">
                        <img src={avatar} alt="profile" className="h-full p-1"/>
                        <div className= "ml-2">
                            <p className="font-medium text-gray-800">{author}</p>
                            <p className="text-gray-600">{date}</p>
                        </div>
                    </div>
                    <div className="flex flex-row py-2">
                        <button className="flex flex-row items-center mr-3" ><img src={likeEmpty} alt="like button" className="h-[70%] mr-2 mb-3 hover:cursor-pointer"/>{likeCount}</button>
                        <button className="flex flex-row items-center mr-3" ><img src={dislikeEmpty} alt="like button" className="h-[70%] mr-2 mt-3 hover:cursor-pointer"/>{dislikeCount}</button>
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
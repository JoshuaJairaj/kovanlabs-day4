import { Link } from "react-router-dom"
import like from "/like.png"
import liked from "/liked.png"
import { useState } from "react"
import star from "/star.png"

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


const Post: React.FC<PostsStructure> = ({id, author, date, avatar, title, content, banner, likeCount}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likeCount);

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
        <div className="flex flex-row mt-5 shadow-lg p-2 rounded-sm">
            <div className="w-3/5 flex flex-col pl-3">
            <Link key={id} to={`/post/${id}`}>
            <div>
                <div className="flex flex-row mt-5 items-center">
                    <img className="aspect-1/1 h-[1.5rem] rounded-full" src={avatar} alt="avatar"/>
                    <p className="mx-2">{author}</p>
                    <p>|</p>
                    <p className="text-gray-400 text-sm px-1 py-1">{date}</p>
                </div>
                <div className="pr-2 mt-3 hover:cursor-pointer">
                    <p className="text-2xl font-semibold pb-1">{toCamelCase(title)}</p>
                    <p className="text-justify">{ content.length>180 ? content.substring(0,180)+"..." : content}</p>
                </div>
            </div>
            </Link>
            <button onClick={handleLike} className="flex flex-row items-center hover:cursor-pointer mt-3">
                <img className="h-[20px] aspect-1/1 mr-1" src={isLiked? liked : like} alt="" />
                <p className="text-sm">{likesCount}</p>
            </button>
            </div>
            <div className="w-2/5"><img className="w-auto h-full aspect-4/3 p-2" src={banner}/></div>
        </div>
    )
}

export default Post;





// <div className="mt-2 mb-5 pb-1 rounded overflow-hidden shadow-lg">
        //     <Link key={id} to={`/post/${id}`}>
        //     <div className="px-3 py-2 border-gray-200 hover:cursor-pointer">
        //         <img src={banner} className="aspect-5/2 w-full rounded mb-3 object-cover"/>
        //         <div className="overflow-y-hidden px-2">
        //             <h3 className="text-2xl font-medium">{title}</h3>
        //             <p className="text-justify">{content.length>200 ? content.substring(0,200).trim()+"..." : content}</p>
        //         </div>
        //     </div>
        //     </Link>
        //     <div className="py-2 hover:cursor-default">
        //         <div className="h-10 flex flex-row px-5 w-full justify-between">
        //             <div className="flex flex-row items-center">
        //                 <img src={avatar} alt="profile" className="h-full p-1 rounded-full"/>
        //                     <p className="text-sm font-medium text-gray-800 leading-none">{author}</p>
        //                     <img className="h-[15px]" src={star} alt="star" />
        //                     <p className="text-gray-500 text-sm">{date}</p>
        //                     <button className="flex flex-row items-center mx-3" onClick={handleLike}>
        //                     <img src={isLiked ? liked : like} alt="like button" className="h-[15px] mr-2 hover:cursor-pointer" />
        //                     <span className="flex items-center text-gray-500">{likesCount}</span>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
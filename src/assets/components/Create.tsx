import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";
import type { PostsStructure } from "../interfaces/PostsStructure";
import PostsData from "../data/PostsData";
import { useNavigate } from "react-router-dom"

interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserResult {
  name: UserName;
  picture: UserPicture;
}


function Create(){
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [banner,setBanner] = useState("")
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    const [posts, setPosts] = useState<PostsStructure[]>(() => {
        const saved = localStorage.getItem('postslist');
        return saved ? JSON.parse(saved) : PostsData;
    });
    useEffect (()=>{
        console.log(posts.length)
    },[])


    const handleSubmit = async (e: FormEvent)=>{
        try{
            e.preventDefault()
            if (title.length >8 || content.length>50 || banner){
                if (banner && !urlPattern.test(banner)) throw new Error("Please enter a valid image URL")
                const duplicate = posts.find(p => p.title === title && p.content === content);
                if (duplicate) throw new Error("A post with the same title and content already exists");
                const userInfo = await axios.get('https://randomuser.me/api/?inc=name,picture')
                if (!userInfo) throw new Error("Failed to fetch user information");
                const user: UserResult = userInfo.data.results[0];
                const username = `${user.name.first}_${user.name.last}`
                const avatar = `${user.picture.thumbnail}`
                const date = new Date()
                const year = date.getFullYear()
                const month = date.getMonth() + 1
                const day = date.getDate()
                const curr_date = `${day}-${month}-${year}`
                const findlength = localStorage.getItem('postslist')
                const newPost: PostsStructure = {id:findlength? JSON.parse(findlength).length+1 : PostsData.length+1, author: username, date: curr_date, avatar:avatar, title:title, content:content, banner: banner, likeCount: 0, dislikeCount:0,  comments: [],likeStatus:0}
                const updatedPosts = [newPost,...posts]
                setPosts(updatedPosts)
                localStorage.setItem('postslist',JSON.stringify(updatedPosts))
                // alert(JSON.stringify(newPost))
                // alert('Posted succesfully')
                navigate("/")
                // const finalList = localStorage.getItem("postslist")
                // console.log(finalList ? JSON.parse(finalList).length : 0)
            }
            else{
                throw new Error("Please check values in all the fields");
            }
        }catch(e:any){
            alert(e.message)
        }        
    }

    return(
        <div className="w-[50%] mx-auto mb-22">
                <form className="p-8 bg-blue-100 mt-10 rounded shadow-xl flex flex-row">
                    <div className="w-1/3">
                        <p className="text-5xl font-lg font-medium leading-none">What is <br />your <br />story <br />today?</p>
                    </div>
                    <div className="w-2/3 p-5 ml-10 bg-white rounded shadow">
                        <p className="text-xl font-lg font-semibold">Title</p>
                        <input type="text" required placeholder="Title goes here" value={title} onChange={async (e)=> await setTitle(e.target.value)} className="border w-full p-1 rounded mt-1 mb-2 border-2 border-gray-300 outline-none focus:border-blue-400 focus:bg-blue-100" /> <br/>
                        <p className="text-xl font-lg font-semibold">Content</p>
                        <textarea required placeholder="Write your thoughts here..." value={content} onChange={async (e)=> await setContent(e.target.value)} className="border w-full p-1 rounded mt-1 mb-2 h-30 border-2 border-gray-300 outline-none focus:border-blue-400 focus:bg-blue-100"/> <br/>
                        <p className="text-xl font-lg font-semibold">Photo url</p>
                        <input type="text" required placeholder="Paste your image address" value={banner} onChange={async (e)=> await setBanner(e.target.value)} className="border w-full p-1 rounded mt-1 mb-2 border-2 border-gray-300 outline-none focus:border-blue-400 focus:bg-blue-100"/> <br />
                        <div className="flex flex-row justify-around">
                            <input type="submit" onClick={handleSubmit} className="text-lg border-2 border-blue-300 bg-blue-300 py-1 mt-3 mb-1 px-10 rounded transition duration-200 hover:cursor-pointer hover:bg-blue-400"/>
                        </div>
                    </div>
                </form> 
        </div>
    )
}
export default Create;
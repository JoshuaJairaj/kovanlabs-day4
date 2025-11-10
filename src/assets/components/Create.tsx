import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";
import type { PostsStructure } from "../interfaces/PostsStructure";
import PostsData from "../data/PostsData";
import Post from "./Post";

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
    
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [banner,setBanner] = useState("")
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
                const userInfo = await axios.get('https://randomuser.me/api/?inc=name,picture')
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
                alert('Posted succesfully')
                const finalList = localStorage.getItem("postslist")
                console.log(finalList ? JSON.parse(finalList).length : 0)
            }
            else{
                throw new Error("title must be more than 8 characters");
            }
        }catch(e:any){
            alert(e.message)
        }        
    }

    return(
        <div className="page-alignment">
                <form className="border border-red p-5 bg-gray-300 mt-10 rounded-xl ">
                    <p className="text-3xl font-lg">Title</p>
                    <input type="text" placeholder="Title goes here" value={title} onChange={async (e)=> await setTitle(e.target.value)} className="border w-full p-1 rounded-lg mt-2 mb-5" /> <br/>
                    <p className="text-3xl font-lg">Content</p>
                    <input type="text"  placeholder="Write your thoughts here..." value={content} onChange={async (e)=> await setContent(e.target.value)} className="border w-full p-1 rounded-lg mt-2 mb-5"/> <br/>
                    <p className="text-3xl font-lg">Photo url</p>
                    <input type="text" placeholder="Paste your image address" value={banner} onChange={async (e)=> await setBanner(e.target.value)} className="border w-full p-1 rounded-lg mt-2 mb-5"/> <br />
                    <div className="flex flex-row justify-around">
                        <a href="/"><input type="submit" onClick={handleSubmit} className="text-lg border hover:cursor-pointer mt-5 bg-blue-300 py-2 px-5 rounded-xl"/></a>
                    </div>
                </form>
        </div>
    )
}
export default Create;
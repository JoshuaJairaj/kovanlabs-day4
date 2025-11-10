export interface PostsStructure{
    id:number
    author: string,
    date: string,
    avatar: string,
    title: string,
    content: string,
    banner: string,
    likeCount: number,
    dislikeCount:number,
    comments: string[],
    likeStatus: -1 | 0 | 1
}


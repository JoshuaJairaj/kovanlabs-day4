export type PostsStructure= {
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

type UserName = {
  title: string;
  first: string;
  last: string;
}

type UserPicture = {
  large: string;
  medium: string;
  thumbnail: string;
}

export type UserResult = {
  name: UserName;
  picture: UserPicture;
}


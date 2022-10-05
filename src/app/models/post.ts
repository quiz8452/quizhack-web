export class Post {
    postId: string;
    title: string;
    content: string;
    author: string;
    createdDate: any;
    updatedDate: any;
    imageUrl:string;
    videoId :string;
    quiz :string;
    constructor() {
        this.title = '';
        this.content = '';
    }
}

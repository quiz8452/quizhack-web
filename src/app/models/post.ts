export class Post {
    postId: string;
    title: string;
    content: string;
    author: string;
    createdDate: any;
    imageUrl:string;
    videoId :string;
    constructor() {
        this.title = '';
        this.content = '';
    }
}

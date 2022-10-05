import { Injectable } from "@angular/core";
import { Post } from "../models/Post";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(private db: AngularFirestore) {}

  createPost(post: Post) {
    
    const postData = JSON.parse(JSON.stringify(post));
    if(post.quiz === 'amazon')
      return this.db.collection("amazonQuiz").add(postData);

      return this.db.collection("flipkartQuiz").add(postData);
  }

  findCollection(quiz:string) {
    return quiz =='amazon' ? "amazonQuiz" : "flipkartQuiz"
  }

  getAllPosts(quiz): Observable<Post[]> {
    const blogs = this.db
      .collection<Post>(this.findCollection(quiz), (ref) => ref.orderBy("createdDate", "desc").orderBy("updatedDate", "desc"))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((c) => ({
            postId: c.payload.doc["id"],
            ...c.payload.doc.data(),
          }));
        })
      );
    return blogs;
  }

  getPostbyId(id: string, quiz:string): Observable<Post> {
    const blogDetails = this.db.doc<Post>(this.findCollection(quiz) + "/" + id).valueChanges();
    return blogDetails;
  }

  updatePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));
    
    return this.db.doc( this.findCollection(post.quiz) + "/" + postId).update(putData);
  }

  deletePost(postId: string, quiz:string) {
    return this.db.doc(this.findCollection(quiz) + "/" + postId).delete();
  }
}

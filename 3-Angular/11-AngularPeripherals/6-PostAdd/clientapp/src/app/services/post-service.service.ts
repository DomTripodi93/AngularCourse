import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/User.model";
import { AuthService } from "./auth-service.service";
import { Post } from "../models/Post.model";

@Injectable({ providedIn: "root" })
export class PostService {
    postsHaveChanged: Subject<boolean> = new Subject<boolean>();
    postList: Post[] = [];
    emptyPost: Post = {
        userId: 0,
        postId: 0,
        postDate: new Date(),
        updateDate: new Date(),
        postContent: "",
    };

    constructor(
        private httpServ: HttpClient
    ) {}

    getPosts(userId: number = 0) {
        if (userId === 0) {
            return this.httpServ.get<Post[]>("post/posts/false")
        } else {
            return this.httpServ.get<Post[]>("post/posts/true/" + userId)
        }
    }

    removePost(postId: number) {
        // this.userList.splice(index, 1);
        if (confirm("Are you sure you want to delete this post?")) {
            this.deletePost(postId).subscribe({
                next: () =>{
                    alert("The delete was successful!");
                    this.postsHaveChanged.next(false);
                },
                error: (err: any) =>{
                    console.log(err);
                    alert("The post delete failed! Please try again later.");
                }
            })
        }
    }

    upsertPost(post: Post) {
        let editType: string = "Adding ";
        if (post.postId !== 0) {
            editType = "Editing "
        }
        this.postPost(post).subscribe({
            next: () =>{
                alert(editType + "a post was successful!");
                this.postsHaveChanged.next(false);
            },
            error: (err: any) =>{
                console.log(err);
                alert(editType + "the post failed! Please try again later.");
            }
        })
    }

    postPost(postForUpsert: Post) {
        return this.httpServ.post("post/upsertPost", postForUpsert)
    }

    deletePost(postId: number) {
        return this.httpServ.delete("post/deletePost/" + postId)
    }
}
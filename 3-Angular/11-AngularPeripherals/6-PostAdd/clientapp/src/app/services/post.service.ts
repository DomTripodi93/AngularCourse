import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "src/app/models/Post";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostService {
    postListHasChanged: Subject<void> = new Subject<void>();
    emptyPost: Post = {
        postId: 0,
        username: "",
        postContent: "",
        postDate: new Date(),
        updateDate: new Date()
    };
    editMode: boolean = false;
    addMode: boolean = false;
    postForEdit: Post = {...this.emptyPost};

    postList: Post[] = [];

    constructor(
        private http: HttpClient
    ) { }

    toggleEdit(post: Post | null = null) {
        if (post) {
            this.postForEdit = { ...post };
        } else {
            this.postForEdit = { ...this.emptyPost };
        }
        this.editMode = !this.editMode;
    }

    getPosts() {
        return this.http.get<Post[]>("post/posts")
    }

    getPostsByUser(username: string) {
        return this.http.get<Post[]>(
            "post/postsByUser/" + username
        )
    }

    editPostInAPI(postForEdit: Post) {
        return this.http.put<Post>("post/postEdit", postForEdit)
    }

    addPostInAPI(postForEdit: Post) {
        return this.http.post<Post>("post/postAdd", postForEdit)
    }

    deletePostInAPI(postId: number) {
        return this.http.delete("post/postDelete/" + postId)
    }
}

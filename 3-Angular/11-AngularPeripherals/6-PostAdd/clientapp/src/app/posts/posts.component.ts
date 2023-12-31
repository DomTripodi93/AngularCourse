import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';
import { Post } from '../models/Post.model';
import { UserService } from '../services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnDestroy {
    @Input() userId: number = 0;
    addMode: boolean = false;
    postsHaveChangedSubscription = new Subscription();

    constructor(
        public postService: PostService,
        public userService: UserService
    ) {}

    ngOnInit() {
        this.postService.postList = [];
        this.getPosts();
        this.subscribePostsHaveChanged();
    }

    subscribePostsHaveChanged(){
        this.postsHaveChangedSubscription = this.postService.postsHaveChanged
            .subscribe((cancelled: boolean) =>{
                this.addMode = false;
                if (!cancelled) {
                    this.getPosts();
                }
            });
    }

    addNewPost() {
        this.addMode = true;
    }

    getPosts() {
        this.postService.getPosts(this.userId).subscribe({
            next: (res: Post[]) => {
                this.postService.postList = res;
                this.postService.postList.sort((first: Post, second: Post) => {
                    return Date.parse((first.postDate as string)) > Date.parse(second.postDate + "") ? -1 : 1;
                })
            }
        })
    }

    ngOnDestroy(): void {
        this.postsHaveChangedSubscription.unsubscribe();
    }
}

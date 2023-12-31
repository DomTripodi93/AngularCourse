import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';
import { Post } from '../models/Post.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
    @Input() userId: number = 0;

    constructor(
        public postService: PostService,
        public userService: UserService
    ) {}

    ngOnInit() {
        this.postService.postList = [];
        this.getPosts();
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
}

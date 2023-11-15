import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    @Input() username: string = "";
    postList: Post[] = [];
    postListSubscription: Subscription = new Subscription();
    routeParamsSubscription: Subscription | null = null;

    constructor(
        public postServ: PostService,
        public activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subscribePostsChanged();
        this.getPosts();
    }

    subscribePostsChanged() {
        this.postListSubscription = this.postServ.postListHasChanged.subscribe(() => {
            this.getPosts();
        })
    }

    getPosts() {
        let httpResponseHandler =  {
            next: (res: Post[]) => {
                this.postList = res.sort((first, second) => {
                    return first.postDate > second.postDate ? -1 : 1;
                });
            },
            error: (err: any) => {
                console.log(err);
                alert("Failed to load posts, please try again later!");
            }
        };
        console.log(this.username);
        if (this.username) {
            this.postServ.getPostsByUser(this.username).subscribe(httpResponseHandler);
        } else {
            this.postServ.getPosts().subscribe(httpResponseHandler);
        }
    }

    ngOnDestroy() {
        this.postListSubscription.unsubscribe();
    }

}

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent {
    @Input() post: Post = {...this.postServ.emptyPost};

    constructor(
        public postServ: PostService,
        public authServ: AuthService
    ) { }

    removePost() {
        if (confirm("Are you sure you want to permanently delete this post?")){
            this.postServ.deletePostInAPI(this.post.postId).subscribe(
                {
                    next: (res: any) => {
                        if (+res["deleted"] === this.post.postId) {
                            this.postServ.postListHasChanged.next();
                        } else {
                            console.log(res);
                        }
                    },
                    error: (err) => {
                        console.log(err);
                        alert("Failed to delete post! Please try again later!");
                    }
                }
            )
        }
    }
}

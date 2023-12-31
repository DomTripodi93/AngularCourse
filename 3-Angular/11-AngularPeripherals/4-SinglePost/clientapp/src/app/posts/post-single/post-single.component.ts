import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { HelperService } from 'src/app/services/helper-service.service';
import { PostService } from 'src/app/services/post-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
    selector: 'app-post-single',
    templateUrl: './post-single.component.html',
    styleUrl: './post-single.component.css'
})
export class PostSingleComponent {
    @Input() post: Post = { ...this.postService.emptyPost };

    constructor(
        public postService: PostService,
        public userService: UserService,
        public helperService: HelperService
    ) { }

}

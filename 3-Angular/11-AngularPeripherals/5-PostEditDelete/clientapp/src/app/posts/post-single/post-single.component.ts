import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { AuthService } from 'src/app/services/auth-service.service';
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
    editMode: boolean = false;
    postForEdit: Post = { ...this.postService.emptyPost };

    constructor(
        public postService: PostService,
        public userService: UserService,
        public helperService: HelperService,
        public authService: AuthService
    ) { }

    toggleEdit(editMode: boolean = false, postForEdit: Post = { ...this.postService.emptyPost }) {
        this.editMode = editMode;
        this.postForEdit = {...postForEdit};
    }

    saveEdit() {
        this.editMode = false;
        this.postService.upsertPost(this.postForEdit);
    }

}

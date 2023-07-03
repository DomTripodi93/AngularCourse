import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {
    constructor(
        public postServ: PostService,
        private authServ: AuthService
    ) { }

    submitEdit() {
        let apiResponseHandler = {
            next: (res: any) => {
                this.postServ.postListHasChanged.next();
                this.postServ.toggleEdit();
            },
            error: (err: any) => {
                console.log(err);
                alert("Failed to add or update post! Please try again later!");
            }
        }
        if (this.postServ.postForEdit.postId === 0) {

            this.postServ.postForEdit.username = this.authServ.username;
            this.postServ.addPostInAPI(this.postServ.postForEdit).subscribe(apiResponseHandler);
        } else {
            this.postServ.editPostInAPI(this.postServ.postForEdit).subscribe(apiResponseHandler);
        }
    }

}

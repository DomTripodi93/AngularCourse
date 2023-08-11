import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
    @Input() singleUser: boolean = false;

    constructor(
        public userServ: UserService
    ) { }

    submitEdit() {
        this.userServ.editUserInAPI(this.userServ.userForEdit).subscribe(
            {
                next: (res) => {
                    this.userServ.userListHasChanged.next();
                },
                error: (err) => {
                    console.log(err);
                    alert("Failed to update user! Please try again later!");
                }
            }
        );
    }

}

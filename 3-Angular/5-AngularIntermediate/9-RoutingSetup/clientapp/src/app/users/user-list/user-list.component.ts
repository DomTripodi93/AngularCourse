import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
    userListSubscription: Subscription = new Subscription();

    constructor(
        public userServ: UserService
    ) { }

    ngOnInit() { 
        this.getUserList();
        this.userListSubscription = this.userServ.userListHasChanged.subscribe(()=>{
            this.getUserList();
        })
    }

    getUserList() {
        this.userServ.getUsers().subscribe(
            {
                next: (res: User[]) => {
                    this.userServ.userList = res;
                },
                error: (err) => {
                    console.log(err);
                    alert("An error has occurred! Please try again later!")
                }
            }
        )
    }

    ngOnDestroy(): void {
        this.userListSubscription.unsubscribe();
    }
}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
    constructor(
        public userServ: UserService
    ) { }

    //ngAfterContentInit - Directives like ngIf ngFor ngStyle prepared in the template (only first ngDoCheck)
    //ngAfterContentChecked - Directives etc. have been checked (every ngDoCheck)
    //ngAfterViewInit - Views and Child views (templates) have been initialized (only first ngDoCheck)
    //ngAfterViewChecked - Views and Child views (templates) have been checked (every ngDoCheck)
    //ngOnChanges - Anything has been checked (every ngDoCheck)
    ngOnInit() { // - Data-bound and Input properties are provided to create the component (only first ngDoCheck)
        console.log("The users component exists");
        //Get a List of users - prepare some piece of data that the component uses etc.
        this.getUserList();
    }

    getUserList() {
        // this.userServ.getUsers().subscribe((res) =>{
        //     console.log(res);
        // }, (err) =>{
        //     console.log(err);
        //     alert("An error has occurred! Please try again later!")
        // })
        this.userServ.getUsers().subscribe(
            {
                // next: (res) => {
                next: (res: User[]) => {
                    // console.log(res);
                    // res.forEach(user =>{
                    // res.forEach((user: User) => {
                    //     console.log(user.username);
                    // })
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
        console.log("The component is being removed");
    }
}

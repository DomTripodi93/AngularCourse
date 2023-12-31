import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth-service.service';

import { UserService } from 'src/app/services/user-service.service';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit, OnDestroy {
    // @Input() user: string = "";
    @Input() addMode: boolean = false;
    @Input() userIndex: number = -1;
    userId: number = -1;
    // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
    editMode: boolean = false;
    displayUser: boolean = false;
    userForEdit: User = { ...this.userService.emptyUser };
    userForDisplay: User = { ...this.userService.emptyUser };
    isSingleUser: boolean = false;

    textColor: any = {
        color: "black"
    }
    colorHasChangedSubscription: Subscription = new Subscription();
    usersHaveChangedSubscription: Subscription = new Subscription();

    constructor(
        public userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        public authService: AuthService
    ) { }

    ngOnInit(): void {
        this.colorHasChangedSubscription = this.userService.colorHasChanged.subscribe((newColor) => {
            console.log(newColor);
            this.textColor.color = newColor;
        })
        this.subscribeParams();
        this.setUserForDisplay();
    }

    goToSingleUser(userId: number) {
        this.router.navigate(["user", userId])
        // this.router.navigate(["user/" + userId])
    }

    goToUserList() {
        this.router.navigate(["user"])
    }

    setUserForDisplay() {
        if (this.userIndex !== -1) {
            this.userForDisplay = this.userService.userList[this.userIndex];
            this.displayUser = true;
        }
    }

    subscribeParams() {
        this.route.params.subscribe(params => {
            console.log(params["userId"]);
            if (params["userId"]){
                this.isSingleUser = true;
                this.userId = +params["userId"];
                this.getUserById();
                this.usersHaveChangedSubscription = this.userService.usersHaveChanged.subscribe(() => {
                    this.getUserById();
                })
            }
        })
    }

    getUserById() {
        if (this.userId > 0) {
            this.userService.getSingleUser(this.userId).subscribe({
                next: (res) =>{
                    if (res) {
                        this.userForDisplay = res;
                        this.displayUser = true;
                    }
                },
                error: (err) =>{ 
                    console.log(err);
                }
            })
        }
    }

    toggleEdit(editMode: boolean, user: User = { ...this.userService.emptyUser }) {
        this.editMode = editMode;
        this.userForEdit = { ...user };
        if (!editMode) {
            this.userService.usersHaveChanged.next(true);
        }
    }

    submitEdit() {
        if (this.addMode) {
            this.userService.addUser(this.userForEdit);
        } else {
            this.editMode = false;
            this.userService.editUser(this.userForEdit);
        }
    }

    ngOnDestroy(): void {
        this.colorHasChangedSubscription.unsubscribe();
        this.usersHaveChangedSubscription.unsubscribe();
    }
}

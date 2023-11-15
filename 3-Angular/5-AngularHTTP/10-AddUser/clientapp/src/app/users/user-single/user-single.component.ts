import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';

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
    // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
    editMode: boolean = false;
    userForEdit: User = { ...this.userService.emptyUser };

    textColor: any = {
        color: "black"
    }
    colorHasChangedSubscription: Subscription = new Subscription();

    constructor(
        public userService: UserService
    ) { }

    ngOnInit(): void {
        this.colorHasChangedSubscription = this.userService.colorHasChanged.subscribe((newColor) => {
            console.log(newColor);
            this.textColor.color = newColor;
        })
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
    }
}

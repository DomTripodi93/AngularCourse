import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/services/user-service.service';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit, OnDestroy{
    // @Input() user: string = "";
    @Input() userIndex: number = -1;
    // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
    editMode: boolean = false;
    userForEdit: string = "";
    textColor: any = {
        color: "white"
    }
    colorHasChangedSubscription: Subscription = new Subscription();
    
    constructor(
        public userService: UserService
    ) {}

    ngOnInit(): void {
        this.colorHasChangedSubscription = this.userService.colorHasChanged.subscribe((newColor) => {
            console.log(newColor);
            this.textColor.color = newColor;
        })
    }

    toggleEdit(editMode: boolean, user: string = "") {
        this.editMode = editMode;
        this.userForEdit = user;
    }

    submitEdit() {
        this.editMode = false;
        this.userService.editUser(this.userForEdit, this.userIndex);
    }

    ngOnDestroy(): void {
        this.colorHasChangedSubscription.unsubscribe();
    }
}

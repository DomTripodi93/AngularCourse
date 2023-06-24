import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit, OnDestroy {
    // @Input() user: User | null = null;
    @Input() user: User = {...this.userServ.emptyUser};
    @Input() index: number = -1;
    editMode: boolean = false;
    userForEdit: User = {...this.userServ.emptyUser};
    customColorLocal: any = {};
    customColorSubscription: Subscription | null = null;
    // @Output() removeUser: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        public userServ: UserService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        // this.customColorLocal = this.userServ.customColor;
        this.updateCustomColorLocal();
        // this.userServ.customColorHasChanged.subscribe(() => {
        this.customColorSubscription = this.userServ.customColorHasChanged.subscribe(() => {
            // this.customColorLocal = this.userServ.customColor;
            this.updateCustomColorLocal();
            console.log("Custom color has changed");
        })
    }

    updateCustomColorLocal() {
        this.customColorLocal = { color: this.userServ.customColor }
    }

    // removeUser(index: number){
    removeUser() {
        this.userServ.userList.splice(this.index, 1)
    }

    // beginEdit() {
    //     this.editMode = true;
    // }

    toggleEdit() {
        this.editMode = !this.editMode;
        // this.userForEdit = this.user ? this.user.fullName : "";
        this.userForEdit = {...this.user};
    }

    submitEdit() {
        // this.userServ.editUser(this.userForEdit, this.index);
        this.userServ.editUserInAPI(this.userForEdit).subscribe(
            {
                next: (res) =>{
                    this.userServ.editUser(res, this.index);
                },
                error: (err) =>{
                    console.log(err);
                    alert("Failed to update user! Please try again later!");
                }
            }
        );
    }

    ngOnDestroy() {
        this.customColorSubscription?.unsubscribe();
    }

}

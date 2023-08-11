import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit, OnDestroy {
    @Input() user: string = "";
    @Input() index: number = -1;
    editMode: boolean = false;
    userForEdit: string = "";
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
        this.userForEdit = this.user;
    }

    submitEdit() {
        this.userServ.editUser(this.userForEdit, this.index);
    }

    ngOnDestroy() {
        this.customColorSubscription?.unsubscribe();
    }

}

import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-user-single',
    templateUrl: './user-single.component.html',
    styleUrls: [
        './user-single.component.css',
        '../users.component.css'
    ]
})
export class UserSingleComponent implements OnInit, OnDestroy {
    // @Input() user: User | null = null;
    @Input() user: User = { ...this.userServ.emptyUser };
    // @Input() index: number = -1;
    editMode: boolean = false;
    userForEdit: User = { ...this.userServ.emptyUser };
    customColorLocal: any = {};
    customColorSubscription: Subscription | null = null;
    routeParamsSubscription: Subscription | null = null;
    // @Output() removeUser: EventEmitter<number> = new EventEmitter<number>();
    singleUser: boolean = false;

    constructor(
        public userServ: UserService,
        private cdRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute,
        public authServ: AuthService
    ) { }

    ngOnInit() {
        this.subscribeColorChange();
        this.subscribeParams();
    }

    subscribeColorChange() {
        // this.customColorLocal = this.userServ.customColor;
        this.updateCustomColorLocal();
        // this.userServ.customColorHasChanged.subscribe(() => {
        this.customColorSubscription = this.userServ.customColorHasChanged.subscribe(() => {
            // this.customColorLocal = this.userServ.customColor;
            this.updateCustomColorLocal();
            console.log("Custom color has changed");
        })
    }

    subscribeParams() {
        this.routeParamsSubscription = this.activatedRoute.params.subscribe({
            next: params => {
                if (params["userId"]) {
                    this.singleUser = true;
                    this.setUser(+params["userId"]);
                }
            }
        })
    }

    setUser(userId: number) {
        this.userServ.getSingleUser(userId).subscribe(res => {
            this.user = res;
        })
    }

    updateCustomColorLocal() {
        this.customColorLocal = { color: this.userServ.customColor }
    }

    // removeUser(index: number){
    removeUser() {
        // this.userServ.userList.splice(this.index, 1);
        if (confirm("Are you sure you want to permanently delete " + this.user.fullName + "?"))
            this.userServ.deleteUserInAPI(this.user.userId).subscribe(
                {
                    next: (res: any) => {
                        if (+res["deleted"] === this.user.userId) {
                            this.userServ.userListHasChanged.next();
                            //logout
                        } else {
                            console.log(res);
                        }
                    },
                    error: (err) => {
                        console.log(err);
                        alert("Failed to delete user! Please try again later!");
                    }
                }
            )
    }

    // beginEdit() {
    //     this.editMode = true;
    // }

    toggleEdit() {
        this.editMode = !this.editMode;
        // this.userForEdit = this.user ? this.user.fullName : "";
        this.userForEdit = { ...this.user };
    }

    submitEdit() {
        // this.userServ.editUser(this.userForEdit, this.index);
        this.userServ.editUserInAPI(this.userForEdit).subscribe(
            {
                next: (res) => {
                    // this.userServ.editUser(res, this.index);
                    this.userServ.userListHasChanged.next();
                },
                error: (err) => {
                    console.log(err);
                    alert("Failed to update user! Please try again later!");
                }
            }
        );
    }

    ngOnDestroy() {
        this.customColorSubscription?.unsubscribe();
        this.routeParamsSubscription?.unsubscribe();
    }

}

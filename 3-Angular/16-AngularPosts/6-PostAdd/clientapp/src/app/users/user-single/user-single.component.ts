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
    @Input() user: User = { ...this.userServ.emptyUser };
    editMode: boolean = false;
    userForEdit: User = { ...this.userServ.emptyUser };
    customColorLocal: any = {};
    customColorSubscription: Subscription | null = null;
    routeParamsSubscription: Subscription | null = null;
    singleUserChangedSubscription: Subscription | null = null;
    singleUser: boolean = false;

    constructor(
        public userServ: UserService,
        private activatedRoute: ActivatedRoute,
        public authServ: AuthService
    ) { }

    ngOnInit() {
        this.subscribeColorChange();
        this.subscribeParams();
        this.subscribeSingleUserChanged();
    }

    subscribeColorChange() {
        this.updateCustomColorLocal();
        this.customColorSubscription = this.userServ.customColorHasChanged.subscribe(() => {
            this.updateCustomColorLocal();
            console.log("Custom color has changed");
        })
    }

    subscribeSingleUserChanged() {
        this.singleUserChangedSubscription = this.userServ.userListHasChanged.subscribe(() => {
            if (this.singleUser) {
                this.setUser(this.user.userId);
            }
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
            this.userServ.editMode = false;
            this.user = res;
        })
    }

    updateCustomColorLocal() {
        this.customColorLocal = { color: this.userServ.customColor }
    }

    removeUser() {
        if (confirm("Are you sure you want to permanently delete " + this.user.fullName + "?")) {
            this.userServ.deleteUserInAPI(this.user.userId).subscribe(
                {
                    next: (res: any) => {
                        if (+res["deleted"] === this.user.userId) {
                            this.authServ.logout();
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
    }

    ngOnDestroy() {
        this.customColorSubscription?.unsubscribe();
        this.routeParamsSubscription?.unsubscribe();
        this.singleUserChangedSubscription?.unsubscribe();
    }

}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy{
    // userList = [
    //     "Tucker Anselm",
    //     "Elmira Keddy",
    //     "Eveline Grandisson",
    //     "Berry Wildes",
    //     "Quintus Hastings",
    //     "Harp Antonignetti",
    //     "Vite Playfair",
    //     "Noelle Dowears",
    //     "Delcine Lubbock",
    //     "Auberta Skerrett",
    //     "Constantin Cosgry",
    //     "Loleta Grenfell",
    //     "Nadeen Matchett",
    //     "Elli Galliver",
    //     "Gayla Hawtin",
    //     "Liam Antwis",
    //     "Merilyn Baumford",
    //     "Lilas Colquyte",
    //     "Roi Kinworthy",
    //     "Patin Flecknoe",
    //     "Etienne Vedeneev",
    //     "Diane Evesque",
    //     "Ashlee Amoore",
    //     "Julissa Bandey",
    //     "Merridie McPartling",
    //     "Nanete Kitlee"        
    // ]
    constructor(
        public userServ: UserService
    ) { }

    //ngAfterContentInit - Directives like ngIf ngFor ngStyle prepared in the template (only first ngDoCheck)
    //ngAfterContentChecked - Directives etc. have been checked (every ngDoCheck)
    //ngAfterViewInit - Views and Child views (templates) have been initialized (only first ngDoCheck)
    //ngAfterViewChecked - Views and Child views (templates) have been checked (every ngDoCheck)
    ngOnInit() { // - Data-bound and Input properties are provided to create the component (only first ngDoCheck)
        console.log("The users component exists");
        //Get a List of users - prepare some piece of data that the component uses etc.
    }

    // removeUser(index: number) {
    //     this.userList.splice(index, 1);
    // }

    ngOnDestroy(): void {
        console.log("The component is being removed");
    }
}

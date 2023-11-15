import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css', '../app.component.css']
})
export class UsersComponent implements OnInit{
    testUser = "Test User";
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
    // ];

    constructor(
        public userService: UserService
    ) {}

    ngOnInit(): void {
        console.log("component has been created");
    }

    // removeUser(index: number) {
    //     this.userService.userList.splice(index, 1);
    // }


}

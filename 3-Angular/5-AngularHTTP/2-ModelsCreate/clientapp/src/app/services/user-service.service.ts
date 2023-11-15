import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class UserService {
    colorHasChanged: Subject<string> = new Subject<string>();

    userList = [
        "Tucker Anselm",
        "Elmira Keddy",
        "Eveline Grandisson",
        "Berry Wildes",
        "Quintus Hastings",
        "Harp Antonignetti",
        "Vite Playfair",
        "Noelle Dowears",
        "Delcine Lubbock",
        "Auberta Skerrett",
        "Constantin Cosgry",
        "Loleta Grenfell",
        "Nadeen Matchett",
        "Elli Galliver",
        "Gayla Hawtin",
        "Liam Antwis",
        "Merilyn Baumford",
        "Lilas Colquyte",
        "Roi Kinworthy",
        "Patin Flecknoe",
        "Etienne Vedeneev",
        "Diane Evesque",
        "Ashlee Amoore",
        "Julissa Bandey",
        "Merridie McPartling",
        "Nanete Kitlee"
    ];

    constructor(
        public httpServ: HttpClient
    ) {}

    getUsers() {
        return this.httpServ.get("http://localhost:3000/user/users")
    }

    removeUser(index: number) {
        this.userList.splice(index, 1);
    }

    editUser(fullName: string, index: number) {
        this.userList[index] = fullName;
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    customColor: string = "black"
    customColorHasChanged: Subject<void> = new Subject<void>();
    // customColorHasChanged: Subject<string> = new Subject<string>();

    userList: string[] = [
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
    ]

    constructor(
        private http: HttpClient
    ) { }

    getUsers() {
        return this.http.get("http://localhost:3000/user/users")
    }

    editUser(fullName: string, index: number) {
        this.userList[index] = fullName;
    }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    customColor: string = "black"
    customColorHasChanged: Subject<void> = new Subject<void>();
    userListHasChanged: Subject<void> = new Subject<void>();
    emptyUser = {
        userId: 0,
        username: "",
        fullName: "",
        city: "",
        gender: "",
        favoriteColor: "",
        favoriteAnimal: ""
    };
    // customColorHasChanged: Subject<string> = new Subject<string>();

    // userList: string[] = [
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

    userList: User[] = [];

    constructor(
        private http: HttpClient
    ) { }

    getUsers() {
        return this.http.get<User[]>("http://localhost:3000/user/users")
    }

    // editUser(fullName: string, index: number) {
    editUser(updatedUser: User, index: number) {
        this.userList[index] = updatedUser;
    }

    editUserInAPI(userForEdit: User) {
        return this.http.put<User>("http://localhost:3000/user/userEdit", userForEdit)
    }

    deleteUserInAPI(userId: number) {
        return this.http.delete("http://localhost:3000/user/userDelete/" + userId)
    }
}

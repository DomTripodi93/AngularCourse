import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { Subject } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class UserService {
    customColor: string = "black"
    customColorHasChanged: Subject<void> = new Subject<void>();
    userListHasChanged: Subject<void> = new Subject<void>();
    emptyUser: User = {
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
        private http: HttpClient,
        private authServ: AuthService
    ) { }

    getUsers() {
        return this.http.get<User[]>(
            "user/users"//, 
            // {
            //     headers: {
            //         authorization: "Bearer " + this.authServ.token
            //     }
            // }
        )
    }

    getSingleUser(userId: number) {
        return this.http.get<User>(
            "user/userSingle/" + userId
        )
    }

    // editUser(fullName: string, index: number) {
    editUser(updatedUser: User, index: number) {
        this.userList[index] = updatedUser;
    }

    editUserInAPI(userForEdit: User) {
        return this.http.put<User>("user/userEdit", userForEdit)
    }

    deleteUserInAPI(userId: number) {
        return this.http.delete("user/userDelete/" + userId)
    }
}

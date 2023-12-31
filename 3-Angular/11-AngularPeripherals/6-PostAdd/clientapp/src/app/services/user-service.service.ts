import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/User.model";
import { AuthService } from "./auth-service.service";

@Injectable({ providedIn: "root" })
export class UserService {
    userMapping: any = {};
    colorHasChanged: Subject<string> = new Subject<string>();
    usersHaveChanged: Subject<boolean> = new Subject<boolean>();
    userList: User[] = [];
    emptyUser: User = {
        userId: 0,
        username: "",
        fullName: "",
        city: "",
        gender: "",
        favoriteColor: "",
        favoriteAnimal: ""
    };

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
        private httpServ: HttpClient,
        private authServ: AuthService
    ) {}

    getUsers(searchText: string = "") {
        if (searchText === "") {
            return this.httpServ.get<User[]>("user/users")
        } else {
            return this.httpServ.get<User[]>("user/userSearch/" + searchText)
        }
    }

    getSingleUser(userId: number) {
        return this.httpServ.get<User>("user/userSingle/" + userId)
    }

    removeUser(userId: number) {
        // this.userList.splice(index, 1);
        if (confirm("Are you sure you want to delete this user?")) {
            this.deleteUser(userId).subscribe({
                next: () =>{
                    alert("The delete was successful!");
                    this.usersHaveChanged.next(false);
                },
                error: (err) =>{
                    console.log(err);
                    alert("The user delete failed! Please try again later.");
                }
            })
        }
    }

    addUser(user: User) {
        this.postUser(user).subscribe({
            next: () =>{
                alert("Adding a user was successful!");
                this.usersHaveChanged.next(false);
            },
            error: (err) =>{
                console.log(err);
                alert("Adding the user failed! Please try again later.");
            }
        })
    }

    editUser(user: User) {
        // this.userList[index] = user;
        this.putUser(user).subscribe({
            next: () =>{
                alert("The edit was successful!");
                this.usersHaveChanged.next(false);
            },
            error: (err) =>{
                console.log(err);
                alert("The user edit failed! Please try again later.");
            }
        })
    }

    postUser(userForAdd: User) {
        return this.httpServ.post("user/addUser", userForAdd)
    }

    putUser(userForEdit: User) {
        return this.httpServ.put("user/editUser", userForEdit)
    }

    deleteUser(userId: number) {
        return this.httpServ.delete("user/deleteUser/" + userId)
    }
}
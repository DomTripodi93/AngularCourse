import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Registration } from "../models/Registration";
import { Auth } from "../models/Auth";
import { UserService } from "./user.service";
import { TokenResponse } from "../models/TokenResponse";
import jwt_decode from 'jwt-decode';
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
    emptyAuth: Auth = {
        username: "",
        password: "",
        passwordConfirm: "",
    }
    isAuthenticated: boolean = false;
    fullName: string = "";
    username: string = "";
    userId: number = 0;
    token: string = "";

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    postRegistration(registration: Registration) {
        return this.http.post("auth/register", registration)
    }

    postLogin(userForLogin: Auth) {
        return this.http.post<TokenResponse>("auth/login", userForLogin)
    }

    storeTokenInfo(token: string) {
        this.token = token;
        let tokenInfo: any = jwt_decode(token);
        // console.log(tokenInfo);
        this.isAuthenticated = true;
        this.fullName = tokenInfo["fullName"] ?? "";
        this.username = tokenInfo["username"] ?? "";
        this.userId = tokenInfo["userId"] ?? 0;
        localStorage.setItem("token", token);
    }

    authCanActivate() {
        if (this.isAuthenticated) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }

    logout() {
        localStorage.setItem("token", "");

        this.isAuthenticated = false;
        this.username = "";
        this.userId = 0;

        this.router.navigate(["login"])
    }

    updateToken() {
        this.http.get<TokenResponse>("auth/updateToken").subscribe(
            {
                next: res => {
                    this.storeTokenInfo(res.token)
                },
                error: err =>{
                    console.log(err);
                    alert("Your token has expired, please log back in to access the site!");
                    this.logout();
                }
            }
        )
    }
}

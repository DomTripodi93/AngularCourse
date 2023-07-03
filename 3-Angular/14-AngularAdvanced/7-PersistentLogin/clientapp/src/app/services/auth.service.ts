import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Registration } from "../models/Registration";
import { Auth } from "../models/Auth";
import { TokenResponse } from "../models/TokenResponse";
import jwt_decode  from 'jwt-decode';
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
    userId: string = "";
    token: string = "";

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    postRegistration(registration: Registration) {
        return this.http.post("http://localhost:3000/auth/register", registration)
    }

    postLogin(userForLogin: Auth) {
        return this.http.post<TokenResponse>("http://localhost:3000/auth/login", userForLogin)
    }

    storeTokenInfo(token: string) {
        this.token = token;
        let tokenInfo: any = jwt_decode(token);
        // console.log(tokenInfo);
        this.isAuthenticated = true;
        this.fullName = tokenInfo["fullName"] ?? "";
        this.username = tokenInfo["username"] ?? "";
        this.userId = tokenInfo["userId"] ?? "";
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
}

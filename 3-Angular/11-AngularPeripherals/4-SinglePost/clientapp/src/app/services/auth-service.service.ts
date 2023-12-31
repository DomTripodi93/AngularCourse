import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Registration } from "../models/Registration.model";
import { Login } from "../models/Login.model";
import { TokenResponse } from "../models/TokenResponse.model";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
    authHasChanged: Subject<void> = new Subject<void>();
    emptyLogin: Login = {
        username: "",
        password: ""
    }
    emptyRegistration: Registration = {
        username: "",
        password: "",
        passwordConfirm: "",
        fullName: "",
        city: "",
        gender: "",
        favoriteColor: "",
        favoriteAnimal: "",
    }
    
    favoriteColor: string = "";
    fullName: string = "";
    userId: number = 0;
    username: string = "";
    isAuthenticated: boolean = false;
    token: string = "";
    
    constructor(
        public httpServ: HttpClient,
        private router: Router
    ) {}

    handleLogin(token: string) {
        return new Promise<void>(resolve=>{
            localStorage.setItem("token", token);
            let tokenInfo: any = jwtDecode(token);
            // console.log(tokenInfo);
            this.favoriteColor = tokenInfo["favoriteColor"];
            this.fullName = tokenInfo["fullName"];
            this.userId = tokenInfo["userId"];
            this.username = tokenInfo["username"];
            this.token = token;
            this.isAuthenticated = true;
            this.authHasChanged.next();
            resolve();
        })
    }

    logout() {
        localStorage.setItem("token", "");
        
        this.isAuthenticated = false;
        this.favoriteColor = "";
        this.fullName = "";
        this.userId = 0;
        this.username = "";
        this.token = "";
        this.router.navigate(["/login"]);
        // this.router.navigate(["/"]);
    }

    postRegistration(userForRegister: Registration) {
        return this.httpServ.post("auth/register", userForRegister)
    }

    postLogin(userForLogin: Login) {
        return this.httpServ.post<TokenResponse>("auth/login", userForLogin)
    }

    getRefreshToken() {
        return this.httpServ.get<TokenResponse>("auth/refreshToken")
    }
}
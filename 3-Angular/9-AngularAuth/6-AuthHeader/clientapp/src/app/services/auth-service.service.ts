import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Registration } from "../models/Registration.model";
import { Login } from "../models/Login.model";
import { TokenResponse } from "../models/TokenResponse.model";
import { jwtDecode } from "jwt-decode";

@Injectable({ providedIn: "root" })
export class AuthService {
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
        public httpServ: HttpClient
    ) {}

    handleLogin(token: string) {
        return new Promise<void>(resolve=>{
            let tokenInfo: any = jwtDecode(token);
            // console.log(tokenInfo);
            this.favoriteColor = tokenInfo["favoriteColor"];
            this.fullName = tokenInfo["fullName"];
            this.userId = tokenInfo["userId"];
            this.username = tokenInfo["username"];
            this.token = token;
            this.isAuthenticated = true;

            resolve();
        })
    }

    postRegistration(userForRegister: Registration) {
        return this.httpServ.post("http://localhost:3000/auth/register", userForRegister)
    }

    postLogin(userForLogin: Login) {
        return this.httpServ.post<TokenResponse>("http://localhost:3000/auth/login", userForLogin)
    }

    getRefreshToken() {
        return this.httpServ.get<TokenResponse>("http://localhost:3000/auth/refreshToken")
    }
}
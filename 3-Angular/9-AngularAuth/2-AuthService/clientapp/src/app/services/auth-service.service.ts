import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Registration } from "../models/Registration.model";
import { Login } from "../models/Login.model";
import { TokenResponse } from "../models/TokenResponse.model";

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
    
    constructor(
        public httpServ: HttpClient
    ) {}

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
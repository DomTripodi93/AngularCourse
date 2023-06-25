import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Registration } from "../models/Registration";
import { Auth } from "../models/Auth";
import { UserService } from "./user.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
    emptyAuth: Auth = {
        username: "",
        password: "",
        passwordConfirm: "",
    }
    emptyRegistration: Registration = {
        auth: { ...this.emptyAuth },
        user: { ...this.userService.emptyUser }
    }

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    postRegistration(registration: Registration) {
        return this.http.post("http://localhost:8080/auth/registration", registration)
    }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Registration } from "../models/Registration";
import { Auth } from "../models/Auth";

@Injectable({ providedIn: 'root' })
export class AuthService {
    emptyAuth: Auth = {
        username: "",
        password: "",
        passwordConfirm: "",
    }

    constructor(
        private http: HttpClient
    ) { }

    postRegistration(registration: Registration) {
        return this.http.post("http://localhost:3000/auth/register", registration)
    }
}

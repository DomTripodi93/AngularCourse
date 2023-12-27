import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login.model';
import { TokenResponse } from 'src/app/models/TokenResponse.model';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    login: Login = { ...this.authServ.emptyLogin }

    constructor(
        public router: Router,
        public authServ: AuthService
    ) { }

    goToRegistration(event: Event) {
        event.preventDefault();
        this.router.navigate(["register"])
    }

    submitLogin() {
        this.authServ.postLogin(this.login).subscribe({
            next: (res: TokenResponse) => {
                // console.log(res);
                this.authServ.handleLogin(res.token).then(() => {
                    this.router.navigate(["user"]);
                });
            },
            error: (err: any) => {
                console.log(err);
            }
        })
    }

}

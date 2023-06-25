import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { TokenResponse } from 'src/app/models/TokenResponse';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userForLogin: Auth = { ...this.authServ.emptyAuth }

    constructor(
        private authServ: AuthService,
        private router: Router
    ) { }

    submitLogin() {
        this.authServ.postLogin(this.userForLogin).subscribe(
            {
                next: (res: TokenResponse) => {
                    console.log(res)
                    console.log("Login Successful!")
                    this.authServ.isAuthenticated = true;
                    this.authServ.storeTokenInfo(res.token)
                    // this.router.navigate(["list"])
                },
                error: (err) =>{
                    console.log(err);
                    alert("Invalid credentials!")
                }
            }
        )
    }

    goToRegister() {
        this.router.navigate(["register"])
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/Registration';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registration: Registration  = {
        auth: { ...this.authServ.emptyAuth },
        user: { ...this.userService.emptyUser }
    }

    constructor(
        public authServ: AuthService,
        private userService: UserService,
        private router: Router
    ) { }

    submitRegistration() {
        console.log(this.registration)
        this.authServ.postRegistration(this.registration).subscribe(
            {
                next: () =>{
                    console.log("Registration Successful!");
                    //navigate to login
                    this.router.navigate(["login"])
                },
                error: (err) =>{
                    console.log(err);
                    alert("Failed to register user! Please try again later!")
                }
            }
        )
    }
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Registration } from 'src/app/models/Registration.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    registration: Registration = { ...this.authServ.emptyRegistration };

    constructor(
        public authServ: AuthService
    ) { }

    submitRegistration() {
        console.log(this.registration);
        this.authServ.postRegistration(this.registration).subscribe({
            next: (res) =>{
                alert("Registration was successful!")
            },
            error: (err) =>{
                console.log(err);
                if (err?.error?.message === "User with username already exists!") {
                    alert(err.error.message);
                } else {
                    alert("There was an error processing your registration!")
                }
            }
        })

    }

}

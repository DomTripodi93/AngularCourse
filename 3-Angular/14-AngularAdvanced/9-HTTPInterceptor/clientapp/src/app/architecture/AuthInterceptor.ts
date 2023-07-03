import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authServ: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (
            req.url != "http://localhost:3000/auth/register" &&
            req.url != "http://localhost:3000/auth/login" &&
            this.authServ.token
        ) {
            // const authenticatedRequest: HttpRequest<any> = {
            //     ...req,
            //     headers: req.headers.append("Authorization", 'Bearer ' + this.authServ.token)
            // };
            const authenticatedRequest = req.clone({
                headers: req.headers.append("Authorization", 'Bearer ' + this.authServ.token)
            });
            return next.handle(authenticatedRequest);
        } else if (
            req.url == "http://localhost:3000/auth/register" ||
            req.url == "http://localhost:3000/auth/login"
        ) {
            return next.handle(req);
        } else {
            return EMPTY;
        }
    }
}

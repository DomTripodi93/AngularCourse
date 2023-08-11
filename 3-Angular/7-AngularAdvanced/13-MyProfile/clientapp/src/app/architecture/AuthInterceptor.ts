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
        let frontendUrl = document.getElementsByTagName('base')[0].href;
        console.log(frontendUrl);
        let apiUrl: string = "https://ProductionUrl.com/"
        if (frontendUrl.toLowerCase().includes("localhost:4200")) {
            apiUrl = "http://localhost:3000/";
        }
        console.log(apiUrl);

        const apiRouteReq = req.clone({ url: apiUrl + req.url });
        
        if (
            req.url != "auth/register" &&
            req.url != "auth/login" &&
            this.authServ.token
        ) {
            // req.headers.append("Authorization", 'Bearer ' + this.authServ.token)
            // console.log(req);

            // const authenticatedRequest: HttpRequest<any> = {
            //     ...req,
            //     headers: req.headers.append("Authorization", 'Bearer ' + this.authServ.token)
            // };
            const authenticatedRequest = apiRouteReq.clone({
                headers: req.headers.append("Authorization", 'Bearer ' + this.authServ.token)
            });
            return next.handle(authenticatedRequest);
        } else if (
            req.url == "auth/register" ||
            req.url == "auth/login"
        ) {
            return next.handle(apiRouteReq);
        } else {
            return EMPTY;
        }
    }
}

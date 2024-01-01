import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { AuthService } from "../services/auth-service.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private authServ: AuthService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const windowLocation: string = window.location.href;

        let rootUrl = "http://localhost:3000/";

        if (!windowLocation.toLowerCase().includes("localhost")) {
            rootUrl = "https://MyProductionAPI.com/";
        }

        const apiRootRequest = req.clone({
            url: rootUrl + req.url
        })
        if (this.authServ.token !== "") {
            const authenticatedRequest = apiRootRequest.clone({
                headers: apiRootRequest.headers.append("Authorization", "Bearer " + this.authServ.token)
            })
            return next.handle(authenticatedRequest);
        } else if(
            req.url.toLowerCase().includes("login") ||
            req.url.toLowerCase().includes("register")
        ) {
            return next.handle(apiRootRequest);
        } else {
            return EMPTY;
        }
    }
}
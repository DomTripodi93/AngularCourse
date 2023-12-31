import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { UsersComponent } from "./users/users.component";
import { UserSingleComponent } from "./users/user-single/user-single.component";
import { RegisterComponent } from "./auth/register/register.component";
import { authGuard } from "./architecture/auth-guard.gaurd";
import { PostsComponent } from "./posts/posts.component";


//Routes are evaluated from top to bottom
// When there is a match on more than 1 route, we will go to the one higher on the list
const routes: Routes = [
    {path: "", redirectTo: "user", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "", canActivate: [authGuard], children:[
        {path: "user", children: [
            {path: "", component: UsersComponent, pathMatch: "full"},
            {path: ":userId", component: UserSingleComponent},
        ]},
        {path: "posts", component: PostsComponent},
        {path: "**", redirectTo: "user"}
    ]},
    {path: "**", redirectTo: "login"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
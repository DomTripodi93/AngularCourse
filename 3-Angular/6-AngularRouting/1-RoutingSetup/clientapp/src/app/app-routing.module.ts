import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { UsersComponent } from "./users/users.component";


//Routes are evaluated from top to bottom
// When there is a match on more than 1 route, we will go to the one higher on the list
const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "users", component: UsersComponent},
    {path: "**", redirectTo: "login"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
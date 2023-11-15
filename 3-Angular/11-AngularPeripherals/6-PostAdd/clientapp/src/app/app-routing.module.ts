import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { authCanActivate } from './architecture/AuthCanActivate';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';

const appRoutes: Routes = [
    // { path: '', component: UserSingleComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: "", canActivate: [authCanActivate], children: [
        { path: '', component: UsersComponent, pathMatch: 'full' },
        { path: 'list', component: UserListComponent, pathMatch: 'full' },
        { path: 'list/:userId', component: UserSingleComponent, pathMatch: 'full' },
        { path: 'posts', component: PostListComponent, pathMatch: 'full' },
        { path: '**', redirectTo: '' }
    ]},
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        scrollPositionRestoration: 'enabled'
      })],
    exports: [RouterModule]
})

export class AppRouteModule {

}


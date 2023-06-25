import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [
    { path: '', component: UsersComponent, pathMatch: 'full' },
    // { path: '', component: UserSingleComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'list', component: UserListComponent, pathMatch: 'full' },
    { path: 'list/:userId', component: UserSingleComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        scrollPositionRestoration: 'enabled'
      })],
    exports: [RouterModule]
})

export class AppRouteModule {

}


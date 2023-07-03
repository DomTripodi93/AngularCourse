import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRouteModule } from './app-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './architecture/AuthInterceptor';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserSingleComponent,
        UserListComponent,
        RegisterComponent,
        LoginComponent,
        PostListComponent,
        PostSingleComponent,
        PostEditComponent,
        UserEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRouteModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

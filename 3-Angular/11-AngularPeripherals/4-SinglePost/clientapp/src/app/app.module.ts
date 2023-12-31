import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { AuthInterceptor } from './architecture/AuthInterceptor.interceptor';
import { PostsComponent } from './posts/posts.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserSingleComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent,
    PostSingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
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

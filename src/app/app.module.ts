import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { AuthGuard } from './auth/auth-guard';
import { ApiAccessService } from './shared/api.access.service';
import { ListTweetComponent } from './list-tweet/list-tweet.component';
import { ListItemComponent } from './list-tweet/list-item/list-item.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: AuthComponent },
  { path: 'posttweet', component: AddTweetComponent, canActivate:[AuthGuard] },
  { path: 'mytweet', component: ListTweetComponent, canActivate:[AuthGuard] },
  { path:'forgetPassword', component:ForgetPasswordComponent},
  { path:'allTweets', component:AllTweetsComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthComponent,
    AddTweetComponent,
    ListTweetComponent,
    ListItemComponent,
    ForgetPasswordComponent,
    AllTweetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

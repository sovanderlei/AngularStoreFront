import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { rounting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { Dashboard01Component } from './page/dashboard01/dashboard01.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { IndexComponent } from './page/index/index.component';
import { LogincreatComponent } from './logincreat/logincreat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    Dashboard01Component,
    LoginComponent,
    LogoutComponent,
    IndexComponent,
    LogincreatComponent
  ],
  imports: [
    BrowserModule,
    rounting,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

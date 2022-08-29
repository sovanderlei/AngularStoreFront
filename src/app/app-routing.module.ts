import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { IndexComponent } from './page/index/index.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { Dashboard01Component } from './page/dashboard01/dashboard01.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { ReportdinamicyComponent } from './page/reportdinamicy/reportdinamicy.component';
import { ChatComponent } from './page/chat/chat.component';
import { ChatServerComponent } from './page/chat-server/chat-server.component';


const routes: Routes = [
  {path: '',
  component: HomeComponent,
  children:[
      {path: '', component: IndexComponent},
      {path: 'index', component: IndexComponent},
      {path: 'users', component: UsersComponent},
      {path: 'dashboard01', component: Dashboard01Component},
      {path: 'dynamicreport', component: ReportdinamicyComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'chatserver', component: ChatServerComponent},
       // {path: 'Cursoparametro/:id/:nome', component: CursoparametroComponent},
      // {path: 'database', component: DatabaseComponent},

      // {path: 'home', component: HomeComponent}
    ],
    canActivate: [AuthGuard]

  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  },
  { path: '**', redirectTo: '' }



];

export const rounting: ModuleWithProviders = RouterModule.forRoot(routes);

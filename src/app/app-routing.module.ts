import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { IndexComponent } from './page/index/index.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { Dashboard01Component } from './page/dashboard01/dashboard01.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent,
  children:[
      {path: 'index', component: IndexComponent},
      {path: 'users', component: UsersComponent},
      {path: 'dashboard01', component: Dashboard01Component},
       //{path: 'Cursoparametro/:id/:nome', component: CursoparametroComponent},
      //{path: 'database', component: DatabaseComponent},

      //{path: 'home', component: HomeComponent}
    ]

  }



];

 export const rounting: ModuleWithProviders = RouterModule.forRoot(routes);

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { rounting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UsersComponent } from './page/users/users.component';
import { Dashboard01Component } from './page/dashboard01/dashboard01.component';
import { IndexComponent } from './page/index/index.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LineChartComponent } from './page/dashboard01/line-chart/line-chart.component';
import { BarChartComponent } from './page/dashboard01/bar-chart/bar-chart.component';
import { UserListsComponent } from './page/dashboard01/user-lists/user-lists.component';
import { ProgCicleComponent } from './page/dashboard01/prog-cicle/prog-cicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportdinamicyComponent } from './page/reportdinamicy/reportdinamicy.component';
import { ChatComponent } from './page/chat/chat.component';
import { TreeviewComponent } from './component/treeview/treeview.component';
import { ChatClientComponent } from './page/chat-client/chat-client.component';
import { ChatServerComponent } from './page/chat-server/chat-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    Dashboard01Component,
    IndexComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    LineChartComponent,
    BarChartComponent,
    UserListsComponent,
    ProgCicleComponent,
    ReportdinamicyComponent,
    ChatComponent,
    TreeviewComponent,
    ChatClientComponent,
    ChatServerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    rounting,
    HttpClientModule,
    ChartsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

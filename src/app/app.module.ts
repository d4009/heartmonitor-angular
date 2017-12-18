import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { LoginComponent } from './modules/auth/login.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginModule} from "./modules/auth/login.module";
import { MainComponent } from './modules/main/main.component';
import {MainModule} from "./modules/main/main.module";
import { MonitorComponent } from './modules/monitor/monitor.component';
import {MonitorModule} from "./modules/monitor/monitor.module";
import {APP_CONFIG} from "./token";
import {SERVER_CONFIG} from "./config";
import {Http, HttpModule} from "@angular/http";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
      LoginModule,
      MainModule,
      MonitorModule,
      HttpModule,
  ],
  providers: [
      {provide: APP_CONFIG, useValue: SERVER_CONFIG},
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

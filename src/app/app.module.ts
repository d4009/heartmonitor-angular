import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { LoginComponent } from './modules/auth/login.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./modules/auth/auth.module";
import { MainComponent } from './modules/main/main.component';
import {MainModule} from "./modules/main/main.module";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
      AuthModule,
      MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

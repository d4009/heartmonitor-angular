import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {CoreModule} from "../core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      CoreModule
  ],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {AppModule} from "../../app.module";
import {CoreModule} from "../core/core.module";
import {AuthGuard} from "../../auth.guard";

const routes: Routes = [
    {path: 'main', component: MainComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
      CoreModule
  ],
  exports: [RouterModule],
  declarations: [MainComponent]
})
export class MainModule { }

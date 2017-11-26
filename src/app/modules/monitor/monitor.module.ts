import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "../main/main.component";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {MonitorComponent} from "./monitor.component";

const routes: Routes = [
    {path: 'monitor', component: MonitorComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      CoreModule
  ],
    exports:[RouterModule],
  declarations: [MonitorComponent]
})
export class MonitorModule { }

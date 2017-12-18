import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "../main/main.component";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {MonitorComponent} from "./monitor.component";
import {AuthGuard} from "../../auth.guard";
import { ChartComponent } from './chart/chart.component';
import {ChartsModule} from "ng2-charts";
import {MonitorService} from "./monitor.service";

const routes: Routes = [
    {path: 'monitor/:username', component: MonitorComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      CoreModule,
      ChartsModule
  ],
    exports:[RouterModule],
  declarations: [MonitorComponent, ChartComponent],
    providers:[MonitorService]
})
export class MonitorModule { }

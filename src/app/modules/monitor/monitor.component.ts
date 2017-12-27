import { Component, OnInit } from '@angular/core';
import {MonitorService} from "./monitor.service";
import {MonitorData} from "./monitor-data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  constructor(private monitorService: MonitorService,
              private route: ActivatedRoute
              ) { }

  rawData: MonitorData = new MonitorData();
  lineChartRawData: Array<any> = [{data: [], label:'raw'}];
  lineChartRawLabels: Array<any> = new Array(200);
  bpmData: MonitorData = new MonitorData();
  lineChartBpmData: Array<any> = [{data:[],label:'bpm'}];
  lineChartBpmLabels: Array<any> = new Array(50);

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.monitorService.getRaw(params['username']).subscribe(res => {
          this.rawData = res;
          this.lineChartRawData = this.rawData.toLineChartData();
          this.lineChartRawLabels = this.rawData.getLineChartLabels();
          console.log(this.lineChartRawData);
          console.log(this.lineChartRawLabels);
        });
        this.monitorService.getBpm(params['username']).subscribe(res => {
          this.bpmData = res;
          this.lineChartBpmData = this.bpmData.toLineChartData();
          this.lineChartBpmLabels = this.bpmData.getLineChartLabels();
          console.log(this.lineChartBpmData);
          console.log(this.lineChartBpmLabels);
        })
    });
 }
}

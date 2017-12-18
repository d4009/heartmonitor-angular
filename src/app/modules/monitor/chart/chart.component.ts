import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

    constructor() { }

    // lineChart
    @Input() lineChartData:Array<any> = [
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series'}
    ];
    @Input() lineChartLabels?:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    @Input() lineChartOptions?:any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    @Input() lineChartColors?:Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend?:boolean = true;
    public lineChartType?:string = 'line';

    public randomize():void {
        // this.lineChartData[0].data.push(Math.floor((Math.random() * 100) + 1));
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
            _lineChartData[i] = this.lineChartData[i];
            for (let j = 0; j < this.lineChartData[i].data.length-1; j++) {
                // _lineChartData[0].data[j] = this.lineChartData[0].data[j+1];
                _lineChartData[i].data[j] = this.lineChartData[i].data[j];
            }
            // _lineChartData[0].data[this.lineChartData[0].data.length-1] = Math.floor((Math.random() * 100) + 1);
            _lineChartData[i].data.push(Math.floor((Math.random() * 100) + 1));
            this.lineChartLabels.push('');
            this.lineChartLabels.splice(0,1);
            _lineChartData[i].data.splice(0,1);
        }
        this.lineChartData = _lineChartData;
    }

    public insertNewData(newData: number): void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
            _lineChartData[i] = this.lineChartData[i];
            for (let j = 0; j < this.lineChartData[i].data.length-1; j++) {
                // _lineChartData[0].data[j] = this.lineChartData[0].data[j+1];
                _lineChartData[i].data[j] = this.lineChartData[i].data[j];
            }
            // _lineChartData[0].data[this.lineChartData[0].data.length-1] = Math.floor((Math.random() * 100) + 1);
            _lineChartData[i].data.push(newData);
            this.lineChartLabels.push('');
            this.lineChartLabels.splice(0,1);
            _lineChartData[i].data.splice(0,1);
        }
        this.lineChartData = _lineChartData;
    }
}

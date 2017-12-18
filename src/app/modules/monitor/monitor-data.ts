export class MonitorData {
    username: string = '';
    type: string = 'bpm';
    startTime: Date = new Date(0);
    data: Array<number> = [];

    public toLineChartData(): Array<any>{
        let arr: Array<any> = [
            {data:[],
            label:this.type}
        ];
        for (let d of this.data) {
          arr[0].data.push(d);
        }
        return arr;
    }

    public getLineChartLabels(): Array<any>{
        let arr: Array<any> = [];
        for (let i = 0; i < this.data.length; i++) {
            arr.push((this.startTime.getTime() + (this.type === 'bpm' ? (i * 1000) : (i * 20))) + 'haha');
        }
        return arr;
    }
}

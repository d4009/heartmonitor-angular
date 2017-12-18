import {Inject, Injectable} from '@angular/core';
import {AppConfig} from "../../app-config.interface";
import {APP_CONFIG} from "../../token";
import {Http, Headers} from "@angular/http";
import {MonitorData} from "./monitor-data";

@Injectable()
export class MonitorService {

  constructor(
      @Inject(APP_CONFIG) private config: AppConfig,
      private http: Http
      ) { }

  getBpm(username: string, from: Date = new Date(0), to: Date = new Date(Date.now())) {
      let headers = new Headers();
      headers.append("Authorization", this.config.influxdbToken);
      let url = this.config.influxdbApiEndpoint + '/query';
      let body = new String('?')
          .concat('q=' + encodeURI('SELECT * FROM bpm WHERE username=\'' + username + '\' AND time>=' + from.getTime()*1000 + ' AND time<\'' + to.toISOString() + '\''))
          .concat('&db=' + this.config.influxdbName);
      url = url.concat(body);
      return this.http.get(url,{headers:headers}).map(res => {
          return this.parseData(res.json());
      });
  }

  getRaw(username: string, from: Date = new Date(0), to: Date = new Date(Date.now())) {
      let headers = new Headers();
      headers.append("Authorization", this.config.influxdbToken);
      let url = this.config.influxdbApiEndpoint + '/query';
      let body = new String('?')
          .concat('q=' + encodeURI('SELECT * FROM raw WHERE username=\'' + username + '\' AND time>=' + from.getTime()*1000 + ' AND time<\'' + to.toISOString() + '\''))
          .concat('&db=' + this.config.influxdbName);
      url = url.concat(body);
      return this.http.get(url,{headers:headers}).map(res => {
          return this.parseData(res.json());
      });
  }
  getIbi(username: string, from: Date = new Date(0), to: Date = new Date(Date.now())) {
      let headers = new Headers();
      headers.append("Authorization", this.config.influxdbToken);
      let url = this.config.influxdbApiEndpoint + '/query';
      let body = new String('?')
          .concat('q=' + encodeURI('SELECT * FROM ibi WHERE username=\'' + username + '\' AND time>=' + from.getTime()*1000 + ' AND time<\'' + to.toISOString() + '\''))
          .concat('&db=' + this.config.influxdbName);
      url = url.concat(body);
      return this.http.get(url,{headers:headers}).map(res => {
          return this.parseData(res.json());
      });
  }
  private parseData(data: any): MonitorData{
      let response: MonitorData = new MonitorData();
      if (data.results[0].series){
          const timeIndex = data.results[0]
              .series[0]
              .columns
              .indexOf('time');
          const valueIndex = data.results[0].series[0].columns.indexOf('value');
          const usernameIndex = data.results[0].series[0].columns.indexOf('username');
          response.username = data.results[0].series[0].values[0][usernameIndex];
          response.startTime = new Date(data.results[0].series[0].values[0][timeIndex]);
          response.type = data.results[0].series[0].name;
          for (let values of data.results[0].series[0].values){
              response.data.push(values[valueIndex]);
          }
      }

      return response;
    }
}

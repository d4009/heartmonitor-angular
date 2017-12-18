import {Inject, Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {APP_CONFIG} from "../../token";
import {AppConfig} from "../../app-config.interface";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {LoginModel} from "../auth/login.model";

@Injectable()
export class AuthService {

  constructor(
      @Inject(APP_CONFIG) private config: AppConfig,
      private http: Http
  ) { }

  getCurrent(): Observable<boolean> {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      if (username && password) {
          const url = this.config.jaxwsApiEndpoint + '/heartmonitorbackend/api/user/login';
          let headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');
          const body = `username=${username}&password=${password}`;
          return this.http.post(url, body, {headers: headers})
              .map(res => (res.status === 200));
      }
      return null;
      // const body = `username=${username}&password=${password}`;
  }

  signIn(loginModel: LoginModel): Observable<boolean>{
      const url = this.config.jaxwsApiEndpoint + '/heartmonitorbackend/api/user/login';
      // const body = {username: loginModel.username, password: loginModel.password};
      const body = `username=${loginModel.username}&password=${loginModel.password}`;
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      localStorage.setItem("url", url);
      return this.http.post(url, body, {headers: headers})
          .map(res => {
              return res.status === 200;
          });
  }
}

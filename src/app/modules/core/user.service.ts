import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UserProfile} from "./user-profile";
import {Http, RequestOptions} from "@angular/http";
import {AuthService} from "./auth.service";
import {APP_CONFIG} from "../../token";
import {AppConfig} from "../../app-config.interface";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(@Inject(APP_CONFIG) private config:AppConfig,
              private authService: AuthService,
              private http: Http) { }

  getListPatients(): Observable<Array<UserProfile>>{
    let url = `${this.config.jaxwsApiEndpoint}/heartmonitorbackend/api/admin/getPatients`;
    if (this.authService.getCurrent()) {
        return this.http.get(url)
            .map(res => {
                return this._parseUserProfiles(res);
            });
    }
    return null;
  }

  private _parseUserProfiles(res: any): Array<UserProfile> {
      let userArr: Array<UserProfile> = new Array();
      const json = res.json();
      for (let eachUser of json) {
          let userProfile: UserProfile = new UserProfile();
          userProfile.username = eachUser.username;
          userProfile.password = eachUser.password;
          userProfile.name = eachUser.name;
          userProfile.gender = eachUser.gender;
          userProfile.dob = new Date(eachUser.dob);
          userProfile.height = eachUser.height;
          userProfile.weight = eachUser.weight;
          userProfile.emergency_number = eachUser.emergency_phone;
          userArr.push(userProfile);
      }
      return userArr;
  }
}

import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./modules/core/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
      private _router: Router,
      private authService: AuthService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let loggedIn = this.authService.getCurrent();
      if (!loggedIn) {
        this._router.navigate(['/login']);
      }
      return loggedIn;
  }

}

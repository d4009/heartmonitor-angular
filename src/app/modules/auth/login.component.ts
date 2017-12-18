import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../core/header/header.component"
import {AuthService} from "../core/auth.service";
import {LoginModel} from "./login.model";
import {LoginForm} from "./login.form";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = new LoginForm(new LoginModel());

  constructor(
      private authService: AuthService,
      private _router: Router
  ) {}

  ngOnInit() {
  }

  login() {
      if (this.form.valid){
        let loginModel = this.form.getObject();
        this.authService.signIn(loginModel).subscribe((res: boolean) => {
            if (res){
                localStorage.setItem('username', loginModel.username);
                localStorage.setItem('password', loginModel.password);
                this._router.navigate(['/main']);
            }
        });
      }
  }
}

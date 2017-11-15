import { Component, OnInit } from '@angular/core';
import {LoginForm} from "./login.form";
import {LoginModel} from "./login.model";
import {Router} from "@angular/router";
import {HeaderComponent} from "../core/header/header.component"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = new LoginForm(new LoginModel());

  constructor(
      private _router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this._router.navigate(['/main']);
  }
}

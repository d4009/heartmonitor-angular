import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {UserProfile} from "./user-profile";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  providers: [AuthService, UserService],
  declarations: [HeaderComponent],
})
export class CoreModule { }

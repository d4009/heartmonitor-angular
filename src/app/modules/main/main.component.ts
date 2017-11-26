import { Component, OnInit } from '@angular/core';
import {UserProfile} from "../core/user-profile";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  users: UserProfile[];
  selectedUser: UserProfile;

  ngOnInit() {
    this.users = [];
    let user = new UserProfile();
    user.name = "Dat Huynh";
    user.username = "dathd";
    user.height = 155;
    user.weight = 50;
    user.dob = new Date("1995-03-05");
    user.emergencynumber = "0987785395";
    user.gender = true;
    this.users.push(user);
    this.selectedUser = user;
    console.log("test");
  }

}

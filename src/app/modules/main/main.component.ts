import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserProfile} from "../core/user-profile";
import {UserService} from "../core/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: Array<UserProfile>;
  selectedUser: UserProfile;

  ngOnInit() {
    this.userService.getListPatients().subscribe(userArr => {
      this.users = userArr;
    });
 }
}

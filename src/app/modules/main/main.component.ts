import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserProfile} from "../core/user-profile";
import {UserService} from "../core/user.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }
  users: Array<UserProfile>;
  selectedUser: UserProfile;

  ngOnInit() {
    this.userService.getListPatients().subscribe(userArr => {
      this.users = userArr;
    });
  }

  logout(event) {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }
}

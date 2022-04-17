import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CurrentUser } from 'src/app/models/currentUser';
import { HttpService } from 'src/app/services/http/http.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [UserService, HttpService]
})
export class MenuComponent implements OnInit {

  currentUser: CurrentUser;
  currentUserName: string;

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.currentUserName = (this.currentUser.firstName ?? "" + this.currentUser.secondName ?? "") ?? "Profile";
  }

  constructor(private jwtHelper: JwtHelperService, private router: Router, private userService: UserService) {
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt")!;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
 }

}

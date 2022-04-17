import { HttpService } from '../../services/http/http.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService, HttpService]
})
export class LoginComponent {
  invalidLogin: boolean = true;

  constructor(private router: Router, private userService: UserService) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);

    this.invalidLogin = !this.userService.login(credentials);

    if(!this.invalidLogin){
      this.router.navigate(["home"]);
    }
  }
}

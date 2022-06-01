import { HttpService } from '../../services/http/http.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, HttpService]
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  public login = (form: NgForm) => {
    // const credentials = JSON.stringify(form.value);
    // this.invalidLogin = !this.userService.login(credentials);

    // if(!this.invalidLogin){
    //   this.router.navigate(["home"]);
    // }
    this.userService.login(form.value.Username, form.value.Password).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.router.navigate(["home"]);
    }, err => {
      this.invalidLogin = true;
      this.invalidLogin = err.error.Exception.Message;
    });
  }
}

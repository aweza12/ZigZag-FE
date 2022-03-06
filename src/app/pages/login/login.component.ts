import { HttpService } from '../../http/http.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [HttpService]
})
export class LoginComponent {
  invalidLogin: boolean = true;

  constructor(private router: Router, private httpService: HttpService) { }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);

    this.invalidLogin = !this.httpService.login(credentials);

    if(!this.invalidLogin){
      this.router.navigate(["home"]);
    }
  }
}

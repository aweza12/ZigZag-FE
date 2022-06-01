import { NgForm } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Role, User } from 'src/app/models';
import { CurrentUser } from 'src/app/models/currentUser';

@Injectable()
export class UserService{

    private currentUser: CurrentUser;

    constructor(private httpService: HttpService, private http: HttpClient){ }

    // public login(credentials: string): boolean{
    //     this.httpService.LoginPost(environment.apiUrl + "login", credentials, {
    //       headers: new HttpHeaders({
    //         "Content-Type": "application/json"
    //       })
    //     }).subscribe(response => {
    //       const token = (<any>response).token;
    //       localStorage.setItem("jwt", token);
    //       return true;
    //     }, err => {
    //       return false;
    //     });
  
    //     return false;
    // }

    public login(login: string, password: string): Observable<any>{
      const credentials = JSON.stringify({
        login: login,
        password: password
      });
      return this.httpService.LoginPost(environment.apiUrl + "login", credentials);
    }

    public getCurrentUser() : CurrentUser {
        if(!this.currentUser){
            this.httpService.Get(environment.apiUrl + "users/current")
            .subscribe(currentUser => localStorage.setItem("currentUser", JSON.stringify(this.currentUser = <any>currentUser)));
        }

        return <CurrentUser>JSON.parse(localStorage.getItem("currentUser") ?? "");
    }
}
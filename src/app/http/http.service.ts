import { NgForm } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../models/lot';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getData(){
        return this.http.get('assets/user.json')
    }

    public login(credentials: string): boolean{
      this.Post(environment.apiUrl + "login", credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        return true;
      }, err => {
        return false;
      });

      return true;
    }

    public getLots(): Observable<Lot[]>{
      return this.Get(environment.apiUrl + "lots", {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });
    }

    public getLotById(id: number): Observable<Lot>{
      return this.Get(environment.apiUrl + "lots/" + id, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });
    }

    private Post(url: string, body: any, options?: any): Observable<any>{
      if(!options){
        options = {};
      }
      options.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
      return this.http.post(url, body, options);
    }

    private Get(url: string, options?: any): Observable<any>{
      if(!options){
        options = {};
      }
      options.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
      return this.http.get(url, options);
    }
}

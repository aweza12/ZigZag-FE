import { NgForm } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../../models/lot';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getData(){
        return this.http.get('assets/user.json')
    }

    public LoginPost(url: string, body: any, options?: any): Observable<any>{
      if(!options){
        options = {};
      }
      options.headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
      return this.http.post(url, body, options);
    }

    public Post(url: string, body: any, options?: any): Observable<any>{
      if(!options){
        options = {};
      }
      options.headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")??"",
      });
      return this.http.post(url, body, options);
    }

    public Get(url: string, options?: any): Observable<any>{
      if(!options){
        options = {};
      }
      options.headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")??"",
      });
      return this.http.get(url, options);
    }
}

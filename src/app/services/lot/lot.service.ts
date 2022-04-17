import { NgForm } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../../models/lot';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable()
export class LotService{

    constructor(private httpService: HttpService, private http: HttpClient){ }

    public getLots(): Observable<Lot[]>{
      return this.httpService.Get(environment.apiUrl + "lots");
    }

    public getLotById(id: number): Observable<Lot>{
      return this.httpService.Get(environment.apiUrl + "lots/" + id);
    }
}

import { NgForm } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../../models/lot';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Bid } from 'src/app/models/bid';

@Injectable()
export class BidService{

    constructor(private httpService: HttpService, private http: HttpClient){ }

    public getBids(): Observable<Bid[]>{
      return this.httpService.Get(environment.apiUrl + "lots");
    }

    public getBidById(id: number): Observable<Bid>{
      return this.httpService.Get(environment.apiUrl + "lots/" + id);
    }

    public createBid(sum: number, lotId: number): Observable<Bid>{
      return this.httpService.Post(environment.apiUrl + "bids/" + lotId + "?bidSum=" + sum, {});
    }
}

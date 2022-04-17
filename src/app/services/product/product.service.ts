import { NgForm } from '@angular/forms';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lot } from '../../models/lot';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Product } from 'src/app/models/product';

@Injectable()
export class ProductService{

    constructor(private httpService: HttpService, private http: HttpClient){ }

    public getProductsForCurrentUser(): Observable<Product[]>{
      return this.httpService.Get(environment.apiUrl + "products");
    }

    public createProduct(product: Product): Observable<Product>{
      return this.httpService.Post(environment.apiUrl + "products", product);
    }

    public getLotById(id: number): Observable<Lot>{
      return this.httpService.Get(environment.apiUrl + "lots/" + id);
    }
}

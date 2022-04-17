import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http/http.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.component.html',
  styleUrls: ['./your-products.component.scss'],
  providers: [ProductService, HttpService]
})
export class YourProductsComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) { }

  //public lots = this.httpService.getLots();

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductsForCurrentUser()
    .subscribe(products => this.products = (<any>products).content);
  }

}

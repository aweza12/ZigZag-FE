import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http/http.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [ProductService, HttpService]
})
export class ProductCreateComponent implements OnInit {

  invalidProduct: boolean = false;
  invalidProductMessage = "";
  returnUrl: string;
  product: Product = {
    description: '',
    id: 0,
    name: ''
  }

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private httpService: HttpService, private http: HttpClient) { }

  ngOnInit() {
  }

  public create = (form: NgForm) => {
    this.product.name = form.value.Name;
    this.product.description = form.value.Description;
    this.productService.createProduct(this.product).subscribe(response => {
      window.location.href = "/home/profile/yourProducts";
    }, err => {
      this.invalidProduct = true;
      this.invalidProductMessage = err.error.Exception.Message;
    });
  }

}

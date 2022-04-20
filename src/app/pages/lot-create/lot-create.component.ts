import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lot } from 'src/app/models/lot';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http/http.service';
import { LotService } from 'src/app/services/lot/lot.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lot-create',
  templateUrl: './lot-create.component.html',
  styleUrls: ['./lot-create.component.scss'],
  providers: [LotService, ProductService, HttpService]
})
export class LotCreateComponent implements OnInit {

  invalidLot: boolean = false;
  invalidLotMessage = "";
  returnUrl: string;
  productId: number;
  products: Product[];
  selectedProduct: Product = {
    description: '',
    id: 0,
    name: ''
  }
  lot: Lot = {
    id: 0,
    creatorId: 0,
    creatorName: '',
    productId: 0,
    productName: '',
    productDescription: '',
    startDate: '',
    endDate: '',
    startPrice: 0,
    highestPrice: 0,
    winnerId: 0,
    winnerName: '',
    bids: [],
    active: false
  }
  //formGroup: Product;

  constructor(private productService: ProductService, private lotService: LotService, private route: ActivatedRoute, private router: Router, private httpService: HttpService, private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
    this.selectedProduct = this.products[1];
    //this.formGroup..patchValue({
    //  preferredBankAccountId:  object_id_to_be_pre_selected
    //});
  }

  getProducts(): void {
    this.productService.getProductsForCurrentUser()
    .subscribe(products => this.products = (<any>products).content);
  }

  public create = (form: NgForm) => {
    //this.selectedProduct = form.value.SelectedProduct;
    this.lotService.createLot(this.selectedProduct.id, form.value.StartPrice).subscribe(response => {
      window.location.href = "/home/profile/yourLots";
    }, err => {
      this.invalidLot = true;
      this.invalidLotMessage = err.error.Exception.Message;
    });
  }

}

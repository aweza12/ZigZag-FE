import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lot } from 'src/app/models/lot';
import { HttpService } from 'src/app/services/http/http.service';
import { LotService } from 'src/app/services/lot/lot.service';

@Component({
  selector: 'app-your-lots',
  templateUrl: './your-lots.component.html',
  styleUrls: ['./your-lots.component.scss'],
  providers: [LotService, HttpService]
})
export class YourLotsComponent implements OnInit {

  lots: Lot[];

  constructor(private router: Router, private lotService: LotService) { }

  //public lots = this.httpService.getLots();

  ngOnInit() {
    this.getLots();
  }

  getLots(): void {
    this.lotService.getLots()
    .subscribe(lots => this.lots = (<any>lots).content);
  }

}

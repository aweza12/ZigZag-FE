import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lot } from '../../models/lot';
import { HttpService } from '../../services/http/http.service';
import { LotService } from 'src/app/services/lot/lot.service';
import { BidService } from 'src/app/services/bid/bid.service';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.scss'],
  providers: [LotService, HttpService]
})
export class LotsComponent implements OnInit {

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

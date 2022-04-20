import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Lot } from 'src/app/models/lot';
import { Bid } from '../../models/bid';
import { LotService } from 'src/app/services/lot/lot.service';
import { NgForm } from '@angular/forms';
import { BidService } from 'src/app/services/bid/bid.service';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss'],
  providers: [BidService, LotService, HttpService]
})
export class LotComponent implements OnInit {

  id: number;
  lot: Lot;
  bid: Bid;

  invalidBid: boolean = false;
  invalidBidMessage = "";

  constructor(private router: Router, private activateRoute: ActivatedRoute, private lotService: LotService, private bidService: BidService){
         
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getLotById(this.id);
  }

  getLotById(id: number): void {
    this.lotService.getLotById(id)
    .subscribe(lot => this.lot = <any>lot);
  }

  public createBid = (form: NgForm) => {
    this.bidService.createBid(form.value.Sum, this.id).subscribe(response => {
      //window.location.href = "/home/profile/yourLots";
    }, err => {
      this.invalidBid = true;
      this.invalidBidMessage = err.error.Exception.Message;
    });
  }
}

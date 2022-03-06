import { LOTS } from '../../mocks/mock-lots';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lot } from '../../models/lot';
import { HttpService } from '../../http/http.service';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.scss'],
  providers: [HttpService]
})
export class LotsComponent implements OnInit {

  //lots = LOTS;
  lots: Lot[];

  constructor(private router: Router, private httpService: HttpService) { }

  //public lots = this.httpService.getLots();

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.httpService.getLots()
    .subscribe(lots => this.lots = (<any>lots).content);
  }

}

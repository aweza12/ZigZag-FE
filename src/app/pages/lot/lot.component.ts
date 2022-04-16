import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpService } from 'src/app/http/http.service';
import { Lot } from 'src/app/models/lot';
import { Bid } from '../../models/bid';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss'],
  providers: [HttpService]
})
export class LotComponent implements OnInit {

  id: number;
  lot: Lot;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private httpService: HttpService){
         
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getLotById(this.id);
  }

  getLotById(id: number): void {
    this.httpService.getLotById(id)
    .subscribe(lot => this.lot = <any>lot);
  }
}

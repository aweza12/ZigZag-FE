import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-create-bid',
  templateUrl: './create-bid.component.html',
  styleUrls: ['./create-bid.component.scss'],
  providers: [HttpService]
})
export class CreateBidComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
  }

}

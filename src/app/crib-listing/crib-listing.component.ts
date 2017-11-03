import { Component, OnInit } from '@angular/core';
import { cribs } from './../data/cribs';
//import{ Http } from '@angular/http';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> = cribs;

  constructor() { }

  ngOnInit() {
    //make an http request.
    /*this.http.get('data/cribs.json')
      .map(res => res.json())
      .subscribe(
        data => this.cribs = data
      );
      */
  }

}

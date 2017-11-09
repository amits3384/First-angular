import { Component, OnInit } from '@angular/core';
//import { cribs } from './../data/cribs';
import{ Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(private http: Http, private cribsService: CribsService) { }

  ngOnInit() {
    //make an http request.
    /*this.http.get('data/cribs.json')
      .map(res => res.json())
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );*/
      this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );
  }

}

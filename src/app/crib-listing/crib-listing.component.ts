import { Component, OnInit } from '@angular/core';
//import { cribs } from './../data/cribs';
import{ Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  constructor(private http: Http, 
    private cribsService: CribsService, 
    private utilService: UtilService) { }

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
      this.cribsService.newCribSubject.subscribe(
        //data => this.cribs.push(data)
        // Now if we want to display our added data on top then below mthdis used:

        data => this.cribs = [data, ...this.cribs]
      )
  }

}

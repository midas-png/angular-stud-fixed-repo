/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  readonly BASE_URL = environment.baseURL;
  readonly API_URL = environment.apiURL;
  houseElements: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.BASE_URL + this.API_URL + '/property/properties')
      .subscribe((response) => {
        this.houseElements = response;
      });
  }
}

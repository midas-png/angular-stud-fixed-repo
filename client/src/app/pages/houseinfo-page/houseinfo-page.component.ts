/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { getExactProperty } from 'src/app/http/propertyAPI';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-houseinfo-page',
  templateUrl: './houseinfo-page.component.html',
  styleUrls: ['./houseinfo-page.component.scss'],
})
export class HouseinfoPageComponent implements OnInit {
  readonly BASE_URL = environment.baseURL;
  constructor() {}

  houseInfo = {
    id: 1,
    bathrooms: 2,
    bedrooms: 3,
    city: 'Dubai',
    description: 'Cozy and luxury housing in the downtown. ',
    exactAddress: 'Burj Khalifa',
    furnished: 1,
    imageURL: [],
    price: 2000000,
    squareMeters: 208,
    title: 'Amazing Housing in Dubai',
    updatedAt: '2022-05-12T14:25:36.522Z',
  };

  getImage(url: string) {
    return 'http://localhost:7000/' + url;
  }

  setMainImage(index: number) {
    [this.houseInfo.imageURL[0], this.houseInfo.imageURL[index]] = [
      this.houseInfo.imageURL[index],
      this.houseInfo.imageURL[0],
    ];
  }

  get imageURL() {
    return this.houseInfo.imageURL[0];
  }

  ngOnInit(): void {
    getExactProperty(1)
      .then((data) => {
        this.houseInfo = data;
        console.log(this.houseInfo);
      })
      .catch((error) => console.error(error));
  }
}

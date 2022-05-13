import { Component } from '@angular/core';
import { UserService } from 'src/app/domain/user.service';
import { addProperty } from '../../http/propertyAPI/index';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent {
  readonly BASE_URL = environment.baseURL;
  addedImages: Array<string> = [];
  responseError: string = '';
  formData = new FormData();
  addedFiles: Array<any> = [];
  values: any = {
    title: '',
    price: 0,
    city: '',
    description: '',
    furnished: 0,
    squareMeters: 0,
    bedrooms: 0,
    bathrooms: 0,
  };
  constructor(private userService: UserService) {}
  get isUserAdmin() {
    return this.userService.userData.role === 'ADMIN';
  }

  addImage(event: any) {
    if (event.target.files.length !== 0) {
      this.formData.append('image', JSON.stringify(event.target.files[0]));
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.addedImages.push(e.target.result);
      };
    }
    console.log(this.addedFiles);
  }

  clearImages() {
    this.addedImages = [];
    this.addedFiles = [];
  }

  changeValue(event: any, value: string) {
    switch (value) {
      case 'title': {
        this.values.title = event.target.value;
        break;
      }
      case 'price': {
        this.values.price = Number(event.target.value);
        break;
      }
      case 'city': {
        this.values.city = event.target.value;
        break;
      }
      case 'description': {
        this.values.description = event.target.value;
        break;
      }
      case 'furnished': {
        this.values.furnished = Number(event.target.value);
        break;
      }
      case 'squareMeters': {
        this.values.squareMeters = Number(event.target.value);
        break;
      }
      case 'bedrooms': {
        this.values.bedrooms = Number(event.target.value);
        break;
      }
      case 'bathrooms': {
        this.values.bathrooms = Number(event.target.value);
        break;
      }
    }
  }

  getImage(url: string) {
    return this.BASE_URL + '/' + url;
  }

  uploadProperty() {
    addProperty(
      this.values.title,
      this.values.price,
      this.values.exactAddress,
      this.values.city,
      this.values.furnished,
      this.values.bedrooms,
      this.values.bathrooms,
      this.values.squareMeters,
      this.values.description,
      this.formData,
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

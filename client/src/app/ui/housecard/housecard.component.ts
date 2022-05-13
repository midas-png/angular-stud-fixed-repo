import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/domain/user.service';
import { AuthService } from 'src/app/domain/auth/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-housecard',
  templateUrl: './housecard.component.html',
  styleUrls: ['./housecard.component.scss'],
})
export class HousecardComponent implements OnInit {
  @Input()
  houseInfo: any;
  favoritePropertiesId: Array<number> = [];
  readonly BASE_URL = environment.baseURL;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  getImage(url: string) {
    return this.BASE_URL + '/' + url;
  }

  get user() {
    return this.userService.userData.favorite;
  }

  get auth() {
    return this.userService.auth;
  }

  addToFavorite(id: number) {
    this.favoritePropertiesId.push(id);
  }

  getClass(id: number) {
    if (this.favoritePropertiesId.includes(id)) {
      return 'fa-solid fa-heart';
    }
    return 'fa-regular fa-heart';
  }

  handleClick(id: number) {
    if (this.favoritePropertiesId.includes(id)) {
      const index = this.favoritePropertiesId.indexOf(id);
      this.favoritePropertiesId.splice(index, 1);
    } else {
      this.addToFavorite(id);
    }
  }

  ngOnInit(): void {
    this.user?.forEach((property: any) => this.addToFavorite(property.id));
  }
}

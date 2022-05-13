import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/domain/user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  totalCost: number = 0;
  constructor(private userService: UserService) {}
  get userCart() {
    return this.userService.userData.cart;
  }

  get totalPrice() {
    return this.userService.userData.cart;
  }

  deleteUnit(id: number) {
    console.log(id);
  }

  sendRequest() {
    console.log(this.userService.userData);
    console.log(this.totalCost);
  }

  ngOnInit(): void {
    this.totalPrice.forEach((unit: any) => {
      this.totalCost += unit.price;
    });
  }
}

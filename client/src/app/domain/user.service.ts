/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(_authService: AuthService) {}
  isAuth: boolean = false;
  user: any = {};

  get auth() {
    return this.isAuth;
  }

  setAuth(authStatus: boolean) {
    this.isAuth = authStatus;
  }

  get userData() {
    return this.user;
  }

  setUser(userData: any) {
    this.user = userData;
  }
}

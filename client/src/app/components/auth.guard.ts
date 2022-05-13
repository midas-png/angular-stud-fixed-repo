import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../domain/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (this._userService.auth) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}

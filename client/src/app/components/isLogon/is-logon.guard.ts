import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/domain/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsLogonGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._userService.auth) {
      this._router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/domain/user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (this._userService.userData.role != 'ADMIN') {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}

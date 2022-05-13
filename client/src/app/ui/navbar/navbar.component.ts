import { Component } from '@angular/core';
import { UserService } from 'src/app/domain/user.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  routeEvent!: any;
  currentRoute!: string;
  isSidebarOpen: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.routeEvent = event;
        this.currentRoute = this.routeEvent.url;
      });
  }

  toggleSidebarOpen() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logOut() {
    this.userService.setAuth(false);
    this.userService.setUser({});
    localStorage.removeItem('token');
  }

  get auth() {
    return this.userService.auth;
  }

  get userFavorite() {
    return this.userService.userData.favorite;
  }

  get userIsAdmin() {
    return this.userService.userData.role === 'ADMIN';
  }
}

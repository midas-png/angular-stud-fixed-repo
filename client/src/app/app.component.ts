import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from './domain/user.service';
import { AuthService } from './domain/auth/auth.service';
import { checkAuth } from './http/userAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly BASE_URL = environment.baseURL;
  readonly API_URL = environment.apiURL;
  title = 'client';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    checkAuth().then((data) => {
      this.userService.setUser(data);
      this.userService.setAuth(true);
    });
  }
}

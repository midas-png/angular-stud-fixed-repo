import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/domain/user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  readonly BASE_URL = environment.baseURL;
  readonly API_URL = environment.apiURL;
  email: string = '';
  password: string = '';
  responseError: string = '';
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
  ) {}

  validationForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  changeEmailValue(event: any) {
    this.email = event.target.value;
  }

  changePasswordValue(event: any) {
    this.password = event.target.value;
  }

  getData() {
    console.log(this.email);
    console.log(this.password);
  }

  logIn() {
    this.http
      .post<any>(this.BASE_URL + this.API_URL + '/user/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          localStorage.setItem('token', data.token);
          console.log(localStorage.getItem('token'));
          this.userService.setUser(jwt_decode(data.token));
          this.userService.setAuth(true);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.responseError = error.error.messaage;
        },
      });
  }
}

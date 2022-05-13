import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/domain/user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  readonly BASE_URL = environment.baseURL;
  readonly API_URL = environment.apiURL;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  responseError: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {}

  validationForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  changeFirstNameValue(event: any) {
    this.firstName = event.target.value;
  }

  changeLastNameValue(event: any) {
    this.lastName = event.target.value;
  }

  changeEmailValue(event: any) {
    this.email = event.target.value;
  }

  changePasswordValue(event: any) {
    this.password = event.target.value;
  }

  signUp() {
    this.http
      .post<any>(this.BASE_URL + this.API_URL + '/user/signup', {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          localStorage.setItem('token', data.token);
          this.userService.setUser(jwt_decode(data.token));
          this.userService.setAuth(true);
          this.router.navigate(['/search']);
        },
        error: (error) => {
          this.responseError = error.error.messaage;
        },
      });
  }
}

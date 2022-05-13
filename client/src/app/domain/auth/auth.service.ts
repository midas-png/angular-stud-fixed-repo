import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly BASE_URL = environment.baseURL;
  readonly API_URL = environment.apiURL;
  data: any;
  constructor(private http: HttpClient) {}
}

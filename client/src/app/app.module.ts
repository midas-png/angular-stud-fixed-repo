import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './components/auth.guard';
import { AuthService } from './domain/auth/auth.service';
import { IsLogonGuard } from './components/isLogon/is-logon.guard';
import { HttpClientModule } from '@angular/common/http';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { LondonPageComponent } from './pages/london-page/london-page.component';
import { DubaiPageComponent } from './pages/dubai-page/dubai-page.component';
import { MoscowPageComponent } from './pages/moscow-page/moscow-page.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ButtonComponent } from './ui/button/button.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HousecardComponent } from './ui/housecard/housecard.component';
import { HouseinfoPageComponent } from './pages/houseinfo-page/houseinfo-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputComponent } from './ui/input/input.component';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { UserService } from './domain/user.service';
import { RoleGuard } from './components/role/role.guard';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    NavbarComponent,
    LondonPageComponent,
    DubaiPageComponent,
    MoscowPageComponent,
    FooterComponent,
    SignupPageComponent,
    ButtonComponent,
    SearchPageComponent,
    HousecardComponent,
    HouseinfoPageComponent,
    InputComponent,
    LoginPageComponent,
    ResetPageComponent,
    AccountPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'london', component: LondonPageComponent },
      { path: 'dubai', component: DubaiPageComponent },
      { path: 'moscow', component: MoscowPageComponent },
      { path: 'search', component: SearchPageComponent },
      {
        path: 'search/:id',
        component: HouseinfoPageComponent,
        canActivate: [IsLogonGuard],
      },
      {
        path: 'signup',
        component: SignupPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'resetpassword',
        component: ResetPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'account',
        component: AccountPageComponent,
        canActivate: [RoleGuard],
      },
      { path: 'cart', component: CartPageComponent },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, UserService, RoleGuard, IsLogonGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

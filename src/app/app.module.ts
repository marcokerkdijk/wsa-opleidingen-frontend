import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AutorisatieInterceptor} from "./interceptor/AutorisatieInterceptor";
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {environment} from "../environments/environment";
import {TokenService} from "./services/token.service";
import {HomeComponent} from './home/home.component';
import {StudentComponent} from './student/student.component';
import {DocentComponent} from './docent/docent.component';
import {AdminComponent} from './admin/admin.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './login-modal/modal.component';
import { TrajectenComponent } from './trajecten/trajecten.component';
import { AdminBeheerTrajectComponent } from './admin/admin-beheer-traject/admin-beheer-traject.component';
import { HomeInformatieComponent } from './home/home-informatie/home-informatie.component';
import { AdminBeheerGebruikersComponent } from './admin/admin-beheer-gebruikers/admin-beheer-gebruikers.component';
import { TrajectModalComponent } from './admin/admin-beheer-traject/traject-modal/traject-modal.component';
import { GebruikersModalComponent } from './admin/admin-beheer-gebruikers/gebruikers-modal/gebruikers-modal.component';
import { GebruikersTabelComponent } from './admin/admin-beheer-gebruikers/gebruikers-tabel/gebruikers-tabel.component';
import { TrajectTabelComponent } from './admin/admin-beheer-traject/traject-tabel/traject-tabel.component';
import { AdminBeheerTrajectfasenComponent } from './admin/admin-beheer-trajectfasen/admin-beheer-trajectfasen.component';
import { SelectiefaseTabelComponent } from './admin/admin-beheer-trajectfasen/selectiefase-tabel/selectiefase-tabel.component';



export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getBearerToken();
    },
    whitelistedDomains: [environment.apiUrl],
    blacklistedRoutes: [environment.apiUrl + '/oauth/token'],
    headerName: 'Authorization',
    authScheme: 'Bearer ',
    throwNoTokenError: true,
    skipWhenExpired: true
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StudentComponent,
    DocentComponent,
    AdminComponent,
    HeaderComponent,
    NavbarComponent,
    PageFooterComponent,
    ModalComponent,
    TrajectenComponent,
    AdminBeheerTrajectComponent,
    HomeInformatieComponent,
    AdminBeheerGebruikersComponent,
    TrajectModalComponent,
    GebruikersModalComponent,
    GebruikersTabelComponent,
    TrajectTabelComponent,
    AdminBeheerTrajectfasenComponent,
    SelectiefaseTabelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService]
      }
    }),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AutorisatieInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getAutorisatieToken();
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
    HomeComponent
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
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AutorisatieInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

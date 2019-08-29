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
import { AdminBeheerGebruikersComponent } from './admin/admin-beheer-gebruikers/admin-beheer-gebruikers.component';
import { TrajectModalComponent } from './admin/admin-beheer-traject/traject-modal/traject-modal.component';
import { GebruikersModalComponent } from './admin/admin-beheer-gebruikers/gebruikers-modal/gebruikers-modal.component';
import { GebruikersTabelComponent } from './admin/admin-beheer-gebruikers/gebruikers-tabel/gebruikers-tabel.component';
import { TrajectTabelComponent } from './admin/admin-beheer-traject/traject-tabel/traject-tabel.component';
import { AdminBeheerTrajectfasenComponent } from './admin/admin-beheer-trajectfasen/admin-beheer-trajectfasen.component';
import { SelectiefaseTabelComponent } from './admin/admin-beheer-trajectfasen/selectiefase-tabel/selectiefase-tabel.component';
import { DocentStudentenlijstComponent } from './docent/docent-studentenlijst/docent-studentenlijst.component';
import { HomeTrajectenComponent } from './home/home-trajecten/home-trajecten.component';
import { HomeTrajectenInformatieComponent } from './home/home-trajecten/home-trajecten-informatie/home-trajecten-informatie.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { OpleidingsFaseTabelComponent } from './admin/admin-beheer-trajectfasen/opleidings-fase-tabel/opleidings-fase-tabel.component';
import { BeheerSelectiefaseComponent } from './admin/admin-beheer-trajectfasen/beheer-selectiefase/beheer-selectiefase.component';
import { BeheerOpleidingsfaseComponent } from './admin/admin-beheer-trajectfasen/beheer-opleidingsfase/beheer-opleidingsfase.component';
import { DocentOpdrachtenComponent } from './docent/docent-opdrachten/docent-opdrachten.component';
import { DocentLesstofComponent } from './docent/docent-lesstof/docent-lesstof.component';
import { DocentTrajectComponent } from './docent/docent-traject/docent-traject.component';
import { DocentHomeComponent } from './docent/docent-home/docent-home.component';
import { NavbarPerrolComponent } from './navbar-perrol/navbar-perrol.component';
import { ProfielComponent } from './profiel/profiel.component';
import { ProfielInfoComponent } from './profiel/profiel-info/profiel-info.component';
import { TrajectFaseModalComponent } from './admin/admin-beheer-trajectfasen/traject-fase-modal/traject-fase-modal.component';
import { OpdrachtenComponent } from './student/opdrachten/opdrachten.component';
import { NotitiesComponent } from './student/notities/notities.component';
import { MijnGegevensComponent } from './student/mijn-gegevens/mijn-gegevens.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruiterHomeComponent } from './recruiter/recruiter-home/recruiter-home.component';
import { OpdrachtAanmaakComponent } from './docent/docent-opdrachten/opdracht-aanmaak/opdracht-aanmaak.component';
import { AdminBeheerTrajectgebruikersComponent } from './admin/admin-beheer-trajectgebruikers/admin-beheer-trajectgebruikers.component';
import { RecruiterBeheerTrajectComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-traject.component';
import { RecruiterBeheerTrajectTabelComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-traject-tabel/recruiter-beheer-traject-tabel.component';
import { RecruiterBeheerTrajectModalComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-traject-modal/recruiter-beheer-traject-modal.component';
import { RecruiterBeheerTrajectfaseComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-trajectfase.component';
import { RecruiterBeheerOpleidingsfaseComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-opleidingsfase/recruiter-beheer-opleidingsfase.component';
import { RecruiterBeheerSelectiefaseComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-selectiefase/recruiter-beheer-selectiefase.component';
import { RecruiterBeheerOpleidingsfaseTabelComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-opleidingsfase-tabel/recruiter-beheer-opleidingsfase-tabel.component';
import { RecruiterBeheerSelectiefaseTabelComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-selectiefase-tabel/recruiter-beheer-selectiefase-tabel.component';
import { RecruiterBeheerTrajectfaseModalComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-trajectfase-modal/recruiter-beheer-trajectfase-modal.component';
import { RecruiterBeheerTrajectgebruikersComponent } from './recruiter/recruiter-beheer-trajectgebruikers/recruiter-beheer-trajectgebruikers.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { VoorbereidingComponent } from './student/voorbereiding/voorbereiding.component';
import { GettingstartedComponent } from './student/gettingstarted/gettingstarted.component';
import { InstallatiehulpComponent } from './student/installatiehulp/installatiehulp.component';
import { OpdrachtComponent } from './student/opdracht/opdracht.component';
import { OpdrachtWijzigComponent } from './docent/docent-opdrachten/opdracht-wijzig/opdracht-wijzig.component';
import { NavbarPerRolComponent } from './navbar-per-rol/navbar-per-rol.component';
import { DocentUitwerkingenComponent } from './docent/docent-uitwerkingen/docent-uitwerkingen.component';
import { BeheerUitwerkingComponent } from './docent/docent-uitwerkingen/beheer-uitwerking/beheer-uitwerking.component';
import { UitwerkingenLijstComponent } from './docent/docent-uitwerkingen/uitwerkingen-lijst/uitwerkingen-lijst.component';

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
    AdminBeheerGebruikersComponent,
    TrajectModalComponent,
    GebruikersModalComponent,
    GebruikersTabelComponent,
    TrajectTabelComponent,
    AdminBeheerTrajectfasenComponent,
    SelectiefaseTabelComponent,
    DocentStudentenlijstComponent,
    HomeTrajectenComponent,
    HomeTrajectenInformatieComponent,
    AdminHomeComponent,
    OpleidingsFaseTabelComponent,
    BeheerSelectiefaseComponent,
    BeheerOpleidingsfaseComponent,
    DocentOpdrachtenComponent,
    DocentLesstofComponent,
    DocentTrajectComponent,
    DocentHomeComponent,
    NavbarPerrolComponent,
    ProfielComponent,
    ProfielInfoComponent,
    TrajectFaseModalComponent,
    OpdrachtenComponent,
    NotitiesComponent,
    MijnGegevensComponent,
    RecruiterComponent,
    RecruiterHomeComponent,
    OpdrachtAanmaakComponent,
    AdminBeheerTrajectgebruikersComponent,
    RecruiterBeheerTrajectComponent,
    RecruiterBeheerTrajectTabelComponent,
    RecruiterBeheerTrajectModalComponent,
    RecruiterBeheerTrajectfaseComponent,
    RecruiterBeheerOpleidingsfaseComponent,
    RecruiterBeheerSelectiefaseComponent,
    RecruiterBeheerOpleidingsfaseTabelComponent,
    RecruiterBeheerSelectiefaseTabelComponent,
    RecruiterBeheerTrajectfaseModalComponent,
    RecruiterBeheerTrajectgebruikersComponent,
    StudentHomeComponent,
    VoorbereidingComponent,
    GettingstartedComponent,
    InstallatiehulpComponent,
    OpdrachtComponent,
    OpdrachtWijzigComponent,
    NavbarPerRolComponent,
    DocentUitwerkingenComponent,
    BeheerUitwerkingComponent,
    UitwerkingenLijstComponent,
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
    {provide: HomeTrajectenComponent},
    {provide: HTTP_INTERCEPTORS, useClass: AutorisatieInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
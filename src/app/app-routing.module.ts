import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminAutorisatieGuard } from "./guards/admin-autorisatie.guard";
import { StudentComponent } from "./student/student.component";
import { DocentComponent } from "./docent/docent.component";
import { DocentAutorisatieGuard } from "./guards/docent-autorisatie.guard";
import { StudentAutorisatieGuard } from "./guards/student-autorisatie.guard";
import { AdminBeheerTrajectComponent } from './admin/admin-beheer-traject/admin-beheer-traject.component';
import { AdminBeheerGebruikersComponent } from './admin/admin-beheer-gebruikers/admin-beheer-gebruikers.component';
import { AdminBeheerTrajectfasenComponent } from './admin/admin-beheer-trajectfasen/admin-beheer-trajectfasen.component';
import { SelectiefaseTabelComponent } from './admin/admin-beheer-trajectfasen/selectiefase-tabel/selectiefase-tabel.component';
import { DocentStudentenlijstComponent} from './docent/docent-studentenlijst/docent-studentenlijst.component';
import { HomeTrajectenInformatieComponent } from './home/home-trajecten/home-trajecten-informatie/home-trajecten-informatie.component';
import { HomeTrajectenComponent } from './home/home-trajecten/home-trajecten.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DocentLesstofComponent } from './docent/docent-lesstof/docent-lesstof.component';
import { DocentOpdrachtenComponent } from './docent/docent-opdrachten/docent-opdrachten.component';
import { DocentTrajectComponent } from './docent/docent-traject/docent-traject.component';
import { DocentHomeComponent } from './docent/docent-home/docent-home.component';
import { RecruiterComponent } from "./recruiter/recruiter.component";
import { RecruiterAutorisatieGuard } from './guards/recruiter-autorisatie.guard';
import { ProfielComponent } from './profiel/profiel.component';
import { ProfielInfoComponent } from './profiel/profiel-info/profiel-info.component';
import { GebruikerAutorisatieGuard } from './guards/gebruiker-autorisatie.guard';
import { OpdrachtenComponent } from './student/opdrachten/opdrachten.component';
import { NotitiesComponent } from './student/notities/notities.component';
import { MijnGegevensComponent } from './student/mijn-gegevens/mijn-gegevens.component';
import { OpdrachtAanmaakComponent } from './docent/docent-opdrachten/opdracht-aanmaak/opdracht-aanmaak.component';
import { AdminBeheerTrajectgebruikersComponent } from './admin/admin-beheer-trajectgebruikers/admin-beheer-trajectgebruikers.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { VoorbereidingComponent } from './student/voorbereiding/voorbereiding.component';
import { GettingstartedComponent } from './student/gettingstarted/gettingstarted.component';
import { InstallatiehulpComponent } from './student/installatiehulp/installatiehulp.component';
import { OpdrachtComponent } from './student/opdracht/opdracht.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'home-trajecten', pathMatch: 'full'},
      {path: "home-trajecten", component:HomeTrajectenComponent},
      {path: '', redirectTo: 'home-trajecten', pathMatch: 'full'},
      {path: "home-trajecten-informatie", component: HomeTrajectenInformatieComponent},
      {path: '', redirectTo: 'home-trajecten', pathMatch: 'full'},
    ]
  },
  {path: 'admin', component: AdminComponent, canActivate: [AdminAutorisatieGuard],
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: '', component: AdminHomeComponent, pathMatch: 'full'},
      { path: "admin-beheer-traject", component: AdminBeheerTrajectComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-gebruikers", component: AdminBeheerGebruikersComponent },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-trajectfasen/:id", component: AdminBeheerTrajectfasenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-trajectgebruikers/:id", component: AdminBeheerTrajectgebruikersComponent},
    ]
  },
  { path: 'student', component: StudentComponent, canActivate: [StudentAutorisatieGuard],
    children: [
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: '', component: StudentHomeComponent, pathMatch: 'full'},
      {path: "opdrachten", component: OpdrachtenComponent},
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "voorbereiding", component: VoorbereidingComponent},
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "gettingstarted", component: GettingstartedComponent},
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "installatiehulp", component: InstallatiehulpComponent},
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "notities", component: NotitiesComponent},
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "mijn-gegevens", component: MijnGegevensComponent},
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "opdracht/:id", component: OpdrachtComponent},
    ]
  },
  
  { path: 'docent', component: DocentComponent, canActivate: [DocentAutorisatieGuard],
    children: [
      { path: '', redirectTo: 'docent', pathMatch: 'full'},
      { path: '', component: DocentHomeComponent, pathMatch: 'full'},
      { path: "docent-traject", component: DocentTrajectComponent,
        children: [
          { path: "docent-studentenlijst/:id", component: DocentStudentenlijstComponent },
          { path: '', redirectTo: 'docent', pathMatch: 'full'},
          { path: "docent-lesstof", component: DocentLesstofComponent },
          { path: '', redirectTo: 'docent', pathMatch: 'full'},
          { path: "docent-opdrachten", component: DocentOpdrachtenComponent,
            children: [
              { path: "opdracht-aanmaak", component: OpdrachtAanmaakComponent },
              { path: '', redirectTo: 'docent-opdrachten', pathMatch: 'full' },
            ] 
          },
        ]
      },
    ]
  },
  { path: 'recruiter', component: RecruiterComponent, canActivate: [RecruiterAutorisatieGuard] },
  { path: 'profiel', component: ProfielComponent, canActivate: [GebruikerAutorisatieGuard],
    children: [
      { path: '', redirectTo: 'profiel-info', pathMatch: 'full' },
      { path: "profiel-info", component: ProfielInfoComponent, pathMatch: 'full' },
    ] 
  },
  {path: '', redirectTo: '/home/home-trajecten', pathMatch: 'full'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
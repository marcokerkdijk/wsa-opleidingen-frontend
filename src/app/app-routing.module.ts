import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminAutorisatieGuard } from "./guards/admin-autorisatie.guard";
import { StudentComponent } from "./student/student.component";
import { DocentComponent } from "./docent/docent.component";
import { DocentAutorisatieGuard } from "./guards/docent-autorisatie.guard";
import { StudentAutorisatieGuard } from "./guards/student-autorisatie.guard";
import { AdminBeheerTrajectComponent } from './admin/admin-beheer-traject/admin-beheer-traject.component';
import { AdminBeheerGebruikersComponent } from './admin/admin-beheer-gebruikers/admin-beheer-gebruikers.component';
import { AdminBeheerResultatenComponent } from './admin/admin-beheer-resultaten/admin-beheer-resultaten.component';
import { DocentStudentenlijstComponent} from './docent/docent-studentenlijst/docent-studentenlijst.component';
import { HomeTrajectenInformatieComponent } from './home/home-trajecten/home-trajecten-informatie/home-trajecten-informatie.component';
import { HomeTrajectenComponent } from './home/home-trajecten/home-trajecten.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DocentOpdrachtenComponent } from './docent/docent-opdrachten/docent-opdrachten.component';
import { DocentTrajectComponent } from './docent/docent-traject/docent-traject.component';
import { DocentHomeComponent } from './docent/docent-home/docent-home.component';
import { RecruiterComponent } from "./recruiter/recruiter.component";
import { RecruiterAutorisatieGuard } from './guards/recruiter-autorisatie.guard';
import { RecruiterHomeComponent } from './recruiter/recruiter-home/recruiter-home.component';
import { RecruiterBeheerTrajectComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-traject.component';
import { RecruiterBeheerTrajectfaseComponent } from './recruiter/recruiter-beheer-traject/recruiter-beheer-trajectfase/recruiter-beheer-trajectfase.component';
import { RecruiterBeheerTrajectgebruikersComponent } from './recruiter/recruiter-beheer-trajectgebruikers/recruiter-beheer-trajectgebruikers.component';
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
import { OpdrachtWijzigComponent } from './docent/docent-opdrachten/opdracht-wijzig/opdracht-wijzig.component';
import { AdminBeheerAssessmentsComponent } from './admin/admin-beheer-assessments/admin-beheer-assessments.component';
import { DocentUitwerkingenComponent } from './docent/docent-uitwerkingen/docent-uitwerkingen.component';
import { UitwerkingenLijstComponent } from './docent/docent-uitwerkingen/uitwerkingen-lijst/uitwerkingen-lijst.component';
import { BeheerUitwerkingComponent } from './docent/docent-uitwerkingen/beheer-uitwerking/beheer-uitwerking.component';
import { TrajectToevoegenComponent } from './admin/admin-beheer-traject/traject-toevoegen/traject-toevoegen.component';
import { TrajectWijzigenComponent } from './admin/admin-beheer-traject/traject-wijzigen/traject-wijzigen.component';
import { DocentAantekeningenComponent } from './docent/docent-aantekeningen/docent-aantekeningen.component';
import { AantekeningAanmaakComponent } from './docent/docent-aantekeningen/aantekening-aanmaak/aantekening-aanmaak.component';
import { AantekeningWijzigComponent } from './docent/docent-aantekeningen/aantekening-wijzig/aantekening-wijzig.component';


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
      { path: "traject-toevoegen", component: TrajectToevoegenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: "traject-wijzigen/:id", component: TrajectWijzigenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: "admin-beheer-gebruikers", component: AdminBeheerGebruikersComponent },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-trajectgebruikers/:id", component: AdminBeheerTrajectgebruikersComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-resultaten/:id", component: AdminBeheerResultatenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-assessments", component: AdminBeheerAssessmentsComponent},
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
          { path: "docent-aantekeningen", component: DocentAantekeningenComponent },
          { path: '', redirectTo: 'docent', pathMatch: 'full'},
          { path: "aantekening-aanmaak/:id", component: AantekeningAanmaakComponent },
          { path: '', redirectTo: 'docent-traject', pathMatch: 'full'},
          { path: "aantekening-wijzig/:id", component: AantekeningWijzigComponent },
          { path: '', redirectTo: 'docent-traject', pathMatch: 'full'},
          { path: "docent-opdrachten", component: DocentOpdrachtenComponent },
          { path: '', redirectTo: 'docent', pathMatch: 'full'},
          { path: "opdracht-aanmaak/:id", component: OpdrachtAanmaakComponent },
          { path: '', redirectTo: 'docent-traject', pathMatch: 'full'},
          { path: "opdracht-wijzig/:id", component: OpdrachtWijzigComponent },
          { path: '', redirectTo: 'docent-traject', pathMatch: 'full'},
          { path: "docent-uitwerkingen/:id", component: DocentUitwerkingenComponent },
          { path: '', redirectTo: 'docent', pathMatch: 'full'},
          { path: "uitwerkingen-lijst/:id", component: UitwerkingenLijstComponent },
          { path: '', redirectTo: 'docent-traject', pathMatch: 'full'},
          { path: "beheer-uitwerking", component: BeheerUitwerkingComponent },
          { path: '', redirectTo: 'docent-traject', pathMatch: 'full'},
        ]
      },
    ]
  },
  { path: 'recruiter', component: RecruiterComponent, canActivate: [RecruiterAutorisatieGuard],
    children: [
      { path: '', redirectTo: 'recruiter', pathMatch: 'full'},
      { path: '', component: RecruiterHomeComponent, pathMatch: 'full'},
      { path: "recruiter-beheer-traject", component: RecruiterBeheerTrajectComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
      { path: "recruiter-beheer-trajectfase/:id", component: RecruiterBeheerTrajectfaseComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
      { path: "recruiter-beheer-trajectgebruikers/:id", component: RecruiterBeheerTrajectgebruikersComponent},
    ]
  },
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
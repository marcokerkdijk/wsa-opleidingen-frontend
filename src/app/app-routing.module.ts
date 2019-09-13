import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminAutorisatieGuard } from "./guards/admin-autorisatie.guard";
import { StudentComponent } from "./student/student.component";
import { DocentComponent } from "./docent/docent.component";
import { DocentAutorisatieGuard } from "./guards/docent-autorisatie.guard";
import { StudentAutorisatieGuard } from "./guards/student-autorisatie.guard";
import { BeheerTrajectComponent } from './admin/admin-beheer-traject/beheer-traject.component';
import { BeheerGebruikersComponent } from './admin/admin-beheer-gebruikers/beheer-gebruikers.component';
import { BeheerResultatenComponent } from './admin/admin-beheer-resultaten/beheer-resultaten.component';
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
import { ProfielComponent } from './profiel/profiel.component';
import { ProfielInfoComponent } from './profiel/profiel-info/profiel-info.component';
import { GebruikerAutorisatieGuard } from './guards/gebruiker-autorisatie.guard';
import { OpdrachtenComponent } from './student/opdrachten/opdrachten.component';
import { NotitiesComponent } from './student/notities/notities.component';
import { MijnGegevensComponent } from './student/mijn-gegevens/mijn-gegevens.component';
import { OpdrachtAanmaakComponent } from './docent/docent-opdrachten/opdracht-aanmaak/opdracht-aanmaak.component';
import { BeheerTrajectgebruikersComponent } from './admin/admin-beheer-trajectgebruikers/beheer-trajectgebruikers.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { VoorbereidingComponent } from './student/voorbereiding/voorbereiding.component';
import { GettingstartedComponent } from './student/gettingstarted/gettingstarted.component';
import { InstallatiehulpComponent } from './student/installatiehulp/installatiehulp.component';
import { OpdrachtComponent } from './student/opdracht/opdracht.component';
import { OpdrachtWijzigComponent } from './docent/docent-opdrachten/opdracht-wijzig/opdracht-wijzig.component';
import { BeheerAssessmentsComponent } from './admin/admin-beheer-assessments/beheer-assessments.component';
import { DocentUitwerkingenComponent } from './docent/docent-uitwerkingen/docent-uitwerkingen.component';
import { UitwerkingenLijstComponent } from './docent/docent-uitwerkingen/uitwerkingen-lijst/uitwerkingen-lijst.component';
import { BeheerUitwerkingComponent } from './docent/docent-uitwerkingen/beheer-uitwerking/beheer-uitwerking.component';
import { TrajectToevoegenComponent } from './admin/admin-beheer-traject/traject-toevoegen/traject-toevoegen.component';
import { TrajectWijzigenComponent } from './admin/admin-beheer-traject/traject-wijzigen/traject-wijzigen.component';
import { DocentAantekeningenComponent } from './docent/docent-aantekeningen/docent-aantekeningen.component';
import { AantekeningAanmaakComponent } from './docent/docent-aantekeningen/aantekening-aanmaak/aantekening-aanmaak.component';
import { AantekeningWijzigComponent } from './docent/docent-aantekeningen/aantekening-wijzig/aantekening-wijzig.component';
import { GebruikerWijzigenComponent } from './admin/admin-beheer-gebruikers/gebruikers-wijzigen/gebruiker-wijzigen.component';
import { NotitiesInformatieComponent } from './student/notities-informatie/notities-informatie.component';


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
      { path: "beheer-traject", component: BeheerTrajectComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "traject-toevoegen", component: TrajectToevoegenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: "traject-wijzigen/:id", component: TrajectWijzigenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: "beheer-gebruikers", component: BeheerGebruikersComponent },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "beheer-trajectgebruikers/:id", component: BeheerTrajectgebruikersComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "gebruiker-wijzigen/:id", component: GebruikerWijzigenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: "admin-beheer-trajectgebruikers/:id", component: BeheerTrajectgebruikersComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "beheer-resultaten/:id", component: BeheerResultatenComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "beheer-assessments", component: BeheerAssessmentsComponent},
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
      {path: '', redirectTo: 'student-home', pathMatch: 'full'},
      {path: "notitie-informatie/:id", component: NotitiesInformatieComponent},
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
          { path: "aantekening-wijzig", component: AantekeningWijzigComponent },
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
      { path: "beheer-traject", component: BeheerTrajectComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
      { path: "beheer-trajectgebruikers/:id", component: BeheerTrajectgebruikersComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
      { path: "traject-toevoegen", component: TrajectToevoegenComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full'},
      { path: "traject-wijzigen/:id", component: TrajectWijzigenComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full'},
      { path: "beheer-resultaten/:id", component: BeheerResultatenComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
      { path: "beheer-gebruikers", component: BeheerGebruikersComponent },
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
      { path: "gebruiker-wijzigen/:id", component: GebruikerWijzigenComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full'},
      { path: "beheer-assessments", component: BeheerAssessmentsComponent},
      { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
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

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

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminAutorisatieGuard],
    children: [
      { path: "admin-beheer-traject", component: AdminBeheerTrajectComponent, canActivate: [AdminAutorisatieGuard] },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-gebruikers", component: AdminBeheerGebruikersComponent },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: "admin-beheer-trajectfasen/:id", component: AdminBeheerTrajectfasenComponent},

    ]
  },
  { path: 'student', component: StudentComponent, canActivate: [StudentAutorisatieGuard] },
  { path: 'docent', component: DocentComponent, canActivate: [DocentAutorisatieGuard] },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

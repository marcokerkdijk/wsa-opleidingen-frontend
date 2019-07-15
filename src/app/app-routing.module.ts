import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminAutorisatieGuard} from "./guards/admin-autorisatie.guard";
import {StudentComponent} from "./student/student.component";
import {DocentComponent} from "./docent/docent.component";
import {DocentAutorisatieGuard} from "./guards/docent-autorisatie.guard";
import {StudentAutorisatieGuard} from "./guards/student-autorisatie.guard";

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminAutorisatieGuard]},
  {path: 'student', component: StudentComponent, canActivate: [StudentAutorisatieGuard]},
  {path: 'docent', component: DocentComponent, canActivate: [DocentAutorisatieGuard]},
  {path: '', pathMatch: 'full', redirectTo: '/login',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

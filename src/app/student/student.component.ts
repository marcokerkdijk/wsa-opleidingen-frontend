import { Component, OnInit, HostListener } from '@angular/core';
import { JwtToken, AutenticatieService } from '../services/autenticatie.service';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'wsa-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  gebruiker:JwtToken;
  count:number;

  constructor(
    private authenticatieService:AutenticatieService,
    private router: Router,
    private userIdleService : UserIdleService
    ) { }

    ngOnInit() {
      this.haalGebruikerOp();
      this.userIdleService.resetTimer();
      this.userIdleService.startWatching()
      this.userIdleService.onTimerStart().subscribe(counter => this.count=counter);
      this.userIdleService.onTimeout().subscribe(() => this.loguit());
    }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  loguit(){
    const redirect = this.authenticatieService.logout();
    this.router.navigateByUrl(redirect);
  }
 
  @HostListener('document:click', ['$event']) 
  @HostListener('document:keydown', ['$event'])
  resetTimer() {
    this.userIdleService.stopTimer();
  }

}

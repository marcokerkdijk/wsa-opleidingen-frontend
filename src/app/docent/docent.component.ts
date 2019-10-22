import { Component, OnInit, HostListener } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';
import { AutenticatieService } from '../services/autenticatie.service';

@Component({
  selector: 'wsa-docent',
  templateUrl: './docent.component.html',
  styleUrls: ['./docent.component.scss']
})
export class DocentComponent implements OnInit {
  count:number;

  constructor(private userIdleService : UserIdleService, private router: Router,
    private authenticatieService : AutenticatieService) { }

  ngOnInit() {
    this.userIdleService.resetTimer();
    this.userIdleService.startWatching()
    this.userIdleService.onTimerStart().subscribe(counter => this.count=counter);
    this.userIdleService.onTimeout().subscribe(() => this.loguit());  }

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

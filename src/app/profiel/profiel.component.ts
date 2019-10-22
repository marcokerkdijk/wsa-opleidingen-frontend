import { Component, OnInit, HostListener } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { AutenticatieService } from '../services/autenticatie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.scss']
})
export class ProfielComponent implements OnInit {

  constructor(private userIdleService : UserIdleService, private authenticatieService : AutenticatieService,
    private router : Router) { }

  ngOnInit() {
    this.userIdleService.resetTimer();
    this.userIdleService.startWatching()
    this.userIdleService.onTimerStart();
    this.userIdleService.onTimeout().subscribe(() => this.loguit());  }

  loguit(){
    const redirect = this.authenticatieService.logout();
    this.router.navigateByUrl(redirect);
  }
 
  @HostListener('click') resetTimer() {
    this.userIdleService.stopTimer();
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticatieService } from '../services/autenticatie.service';
import { UserIdleService } from 'angular-user-idle'


@Component({
  selector: 'wsa-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
count:number;

  constructor(private router: Router, private autenticatieService: AutenticatieService, 
    private userIdleService : UserIdleService) { 

  }


  ngOnInit() {
    this.userIdleService.resetTimer();
    this.userIdleService.startWatching();
    this.userIdleService.onTimerStart().subscribe(counter => this.count=counter);
    this.userIdleService.onTimeout().subscribe(() => this.loguit());
   
  }

  loguit(){
    const redirect = this.autenticatieService.logout();
    this.router.navigateByUrl(redirect);
  }
 
  @HostListener('document:click', ['$event']) 
  @HostListener('document:keydown', ['$event'])
  resetTimer() {
    this.userIdleService.stopTimer();
  }
  }
  
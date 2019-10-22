import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticatieService } from '../services/autenticatie.service';
import { UserIdleService } from 'angular-user-idle';
import { TokenService } from '../services/token.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'wsa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  count:number;
 
  constructor(private router:Router, private authenticatieService: AutenticatieService,
    private userIdleService: UserIdleService, private tokenService : TokenService,
    private navbar : NavbarComponent)   { }
 
  ngOnInit() {
    this.userIdleService.resetTimer();
    this.userIdleService.startWatching();
    this.userIdleService.onTimerStart().subscribe(counter => this.count=counter);
    this.userIdleService.onTimeout().subscribe(response => this.logout());  }

  public logout() {
    this.authenticatieService.logout();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {return false};
    }
 
  @HostListener('document:click', ['$event']) 
  @HostListener('document:keydown', ['$event'])
  resetTimer() {
    this.userIdleService.stopTimer();
  }
}


import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Working Spirit Academy opleidingen';
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}

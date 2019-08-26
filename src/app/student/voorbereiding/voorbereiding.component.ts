import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-voorbereiding',
  templateUrl: './voorbereiding.component.html',
  styleUrls: ['./voorbereiding.component.scss']
})
export class VoorbereidingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

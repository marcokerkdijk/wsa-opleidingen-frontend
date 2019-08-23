import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtenserviceService } from 'src/app/services/opdrachtenservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-opdrachten',
  templateUrl: './opdrachten.component.html',
  styleUrls: ['./opdrachten.component.scss']
})
export class OpdrachtenComponent implements OnInit {
  opdrachten: Opdracht[];

  constructor(
    private opdrachtenService: OpdrachtenserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.haalZichtbareOpdrachtenOp();
  }

  haalZichtbareOpdrachtenOp(){
    this.opdrachtenService.haalZichtbareOpdrachtenOp().subscribe(opdrachten => this.opdrachten = opdrachten);
  }
}

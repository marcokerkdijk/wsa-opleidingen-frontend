import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-opdrachten',
  templateUrl: './opdrachten.component.html',
  styleUrls: ['./opdrachten.component.scss']
})
export class OpdrachtenComponent implements OnInit {
  opdrachten: Opdracht[];

  constructor(
    private opdrachtService: OpdrachtService,
    private router: Router
  ) { }

  ngOnInit() {
    this.haalZichtbareOpdrachtenOp();
  }

  haalZichtbareOpdrachtenOp(){
    this.opdrachtService.haalZichtbareOpdrachtenOp().subscribe(opdrachten => this.opdrachten = opdrachten);
  }
}

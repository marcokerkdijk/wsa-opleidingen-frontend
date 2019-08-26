import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtenserviceService } from 'src/app/services/opdrachtenservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'wsa-opdracht',
  templateUrl: './opdracht.component.html',
  styleUrls: ['./opdracht.component.scss']
})
export class OpdrachtComponent implements OnInit {
  opdracht: Opdracht = new Opdracht();

  constructor(
    private opdrachtenservice: OpdrachtenserviceService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.haalOpdrachtOp(id);
  }

  haalOpdrachtOp(id: number): void{
    this.opdrachtenservice.haalOpdrachtOpId(id).subscribe(opdracht => this.opdracht = opdracht);
  }
/**
 * Onderstaande methode moet nog gemaakt worden ivm gebrek aan uitwerking class in backend
 */
  verstuurOpdracht(){

  }

}

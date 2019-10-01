import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { UitwerkingType } from 'src/app/model/uitwerking-type.enum';

@Component({
  selector: 'wsa-opdracht',
  templateUrl: './opdracht.component.html',
  styleUrls: ['./opdracht.component.scss']
})
export class OpdrachtComponent implements OnInit {
  opdracht: Opdracht = new Opdracht();
  trajectOnderdeel: TrajectOnderdeel = new TrajectOnderdeel();
  uitwerking: Uitwerking = new Uitwerking();
  gebruiker_id: number;

  constructor(private opdrachtservice: OpdrachtService, private route: ActivatedRoute,
              private uitwerkingservice: UitwerkingService, private authenticatieservice: AutenticatieService,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.haalOpdrachtOp(id);
    this.haalGebruikerIdOp();
  }

  haalOpdrachtOp(id: number): void{
    this.opdrachtservice.haalOpdrachtOpId(id).subscribe(opdracht => {
      this.opdracht = opdracht;
      this.trajectOnderdeel = opdracht.trajectOnderdeel;
    });
  }

  haalGebruikerIdOp(): void {
    const gebruiker = this.authenticatieservice.haalTokenOp();
    this.gebruiker_id = gebruiker.gebruiker_id;
  }

  verstuurUitwerking(uitwerking: Uitwerking){
    uitwerking.type = UitwerkingType.OPDRACHTUITWERKING;
    this.uitwerkingservice.maakUitwerking(this.gebruiker_id, this.opdracht.id, uitwerking)
        .subscribe(response => this.router.navigateByUrl('student/opdrachten'));
  }
}
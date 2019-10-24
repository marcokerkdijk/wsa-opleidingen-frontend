import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { UitwerkingType } from 'src/app/model/uitwerking-type.enum';
import { AlertService } from 'src/app/_alert';
import { InfoRoute } from 'src/app/Objecten/info-route'
import { DataserviceService } from 'src/app/services/dataservice.service';

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
  inforoute: InfoRoute = new InfoRoute();

  constructor(private opdrachtservice: OpdrachtService, private route: ActivatedRoute,
    private uitwerkingservice: UitwerkingService, private authenticatieservice: AutenticatieService,
    private alertservice: AlertService, private dataservice: DataserviceService,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.haalOpdrachtOp(id);
    this.haalGebruikerIdOp();
  }

  haalOpdrachtOp(id: number): void {
    this.opdrachtservice.haalOpdrachtOpId(id).subscribe(opdracht => {
      this.opdracht = opdracht;
      this.trajectOnderdeel = opdracht.trajectOnderdeel;
    });
  }

  haalGebruikerIdOp(): void {
    const gebruiker = this.authenticatieservice.haalTokenOp();
    this.gebruiker_id = gebruiker.gebruiker_id;
  }

  verstuurUitwerking(uitwerking: Uitwerking) {
    uitwerking.type = UitwerkingType.OPDRACHTUITWERKING;
    this.inforoute.route = 'student/opdrachten';
    this.dataservice.setInfoRoute(this.inforoute);
    this.uitwerkingservice.maakUitwerking(this.gebruiker_id, this.opdracht.id, uitwerking)
      .subscribe(success => {
        this.alertservice.info("Je resultaat is succesvol verzonden.", "alert-1");
        this.navigeerNaarOpdrachten();
      },
        (error) => {
          this.alertservice.error("Voer een resultaat in van de opdracht alvorens op verzenden te klikken.", "alert-2");
        });
  }

  navigeerNaarOpdrachten(): void {
    setTimeout(() => {
      this.router.navigateByUrl('student/opdrachten');
    }, 3000);
  }
  
}
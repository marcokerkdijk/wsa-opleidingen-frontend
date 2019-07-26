import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/traject';
import { environment } from 'src/environments/environment';
import { TrajectService } from 'src/app/services/traject.service';

@Component({
  selector: 'wsa-home-informatie',
  templateUrl: './home-informatie.component.html',
  styleUrls: ['./home-informatie.component.scss']
})
export class HomeInformatieComponent implements OnInit {

  zichtbaarTrajecten : Traject[];
  private api:string = environment.apiUrl;
 
  constructor(private trajectService : TrajectService) { }
 
  ngOnInit() {
    this.getTrajecten();
  }
  
  getTrajecten(): void {
    this.trajectService.GeefZichtbareTrajectenHome()
        .subscribe(zichtbareTrajecten => this.zichtbaarTrajecten = zichtbareTrajecten);
  }

}

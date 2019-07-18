import { Component, OnInit } from '@angular/core';
import { Traject } from '../traject';
import { TrajectService } from '../services/traject.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'wsa-trajecten',
  templateUrl: './trajecten.component.html',
  styleUrls: ['./trajecten.component.scss']
})
export class TrajectenComponent implements OnInit {

  zichtbaarTrajecten : Traject[];
  private api:string = environment.apiUrl;
 
  constructor(private trajectService : TrajectService) { }
 
  ngOnInit() {
    this.getTrajecten();
  }
  
  getTrajecten(): void {
    this.trajectService.GeefZichtbareTrajecten()
        .subscribe(zichtbareTrajecten => this.zichtbaarTrajecten = zichtbareTrajecten);
  }

  postTraject(traject:Traject): void {
    this.trajectService.MaakTraject(traject).subscribe;
  }

//   getTrajecten(): void {
//     this.trajectService.GeefZichtbareTrajecten()
//         .subscribe(zichtbareTrajecten => this.zichtbareTrajecten = zichtbareTrajecten);
//   }
 }
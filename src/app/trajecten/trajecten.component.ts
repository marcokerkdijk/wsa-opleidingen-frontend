import { Component, OnInit } from '@angular/core';
import { Traject } from '../traject';
import { TrajectService } from '../services/traject.service';

@Component({
  selector: 'wsa-trajecten',
  templateUrl: './trajecten.component.html',
  styleUrls: ['./trajecten.component.scss']
})
export class TrajectenComponent implements OnInit {

  zichtbaarTrajecten : Traject[];
 
 
  constructor(private trajectService : TrajectService) { }
 
  ngOnInit() {
    this.getTrajecten();
  }
  
  getTrajecten(): void {
    this.trajectService.GeefZichtbareTrajecten()
        .subscribe(zichtbareTrajecten => this.zichtbaarTrajecten = zichtbareTrajecten);
  }

//   getTrajecten(): void {
//     this.trajectService.GeefZichtbareTrajecten()
//         .subscribe(zichtbareTrajecten => this.zichtbareTrajecten = zichtbareTrajecten);
//   }
 }
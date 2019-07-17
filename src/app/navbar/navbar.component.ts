import { Component, OnInit } from '@angular/core';

import { ModalService } from '../services/modal.service';

@Component({
  selector: 'wsa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  login(): void {
    alert("U bent ingelogd.")
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.login();
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsa-installatiehulp',
  templateUrl: './installatiehulp.component.html',
  styleUrls: ['./installatiehulp.component.scss']
})
export class InstallatiehulpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToInstallInstructions(){
    window.open("https://docs.oracle.com/javase/7/docs/webnotes/install/windows/jdk-installation-windows.html", "_blank")
  }
  goToJDKDownload(){
    window.open("http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html", "_blank")
  }
  goToNotepadWebsite(){
    window.open("https://notepad-plus-plus.org", "_blank")
  }
}

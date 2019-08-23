import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsa-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.scss']
})
export class GettingstartedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToCodecademy(){
    window.open("https://www.codecademy.com/", "_blank")
  }
  goToNewBoston()
  {
    window.open("https://www.youtube.com/playlist?list=PLFE2CE09D83EE3E28", "_blank")
  }
  goToMOOCFI()
  {
    window.open("https://moocfi.github.io/courses/2013/programming-part-1/", "_blank")
  }
  goToTutorialspoint()
  {
    window.open("https://www.tutorialspoint.com/java/index.htm", "_blank")
  }
}

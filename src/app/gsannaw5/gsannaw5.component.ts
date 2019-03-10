import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsannaw5',
  templateUrl: './gsannaw5.component.html',
  styleUrls: ['./gsannaw5.component.css']
})
export class Gsannaw5Component implements OnInit {

  constructor() { }

  colorGenerator = () =>
  {
    const colorArray = [
      'red'
      ,'orange'
      ,'yellow'
      ,'green'
      ,'blue'
      ,'indigo'
      ,'violet'
    ];

    let random_number = Math.random() * (7 - 0) + 0;

    return colorArray[Math.floor(random_number)];
    
  }

  generateParty = () =>
  {
    this.partyOut = 'RAINBOW PARTY';
    // this.partyOut.style.color = this.colorGenerator();
    // this.color = 'style="' + this.colorGenerator();
  }

  ngOnInit() {
  }

}

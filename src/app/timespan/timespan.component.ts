import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timespan',
  templateUrl: './timespan.component.html',
  styleUrls: ['./timespan.component.css']
})
export class TimespanComponent implements OnInit {
  
  startingDate;
  endingDate;
  age;

  calculateAge = () => {
    
  }

  constructor() { }

  ngOnInit() {
  }

}

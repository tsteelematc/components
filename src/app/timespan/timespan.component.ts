import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timespan-calculator',
  templateUrl: './timespan.component.html',
  styleUrls: ['./timespan.component.css']
})
export class TimespanComponent implements OnInit {
  
  startingDate;
  endingDate;
  age;

  calculateAge = () => {
    let dateOne = new Date(this.startingDate);
    let dateTwo = new Date(this.endingDate);

    this.age = dateTwo.getFullYear() - dateOne.getFullYear();

    let months = dateTwo.getMonth() - dateOne.getMonth();
    if (months < 0 || (months === 0 && dateTwo.getDate() < dateOne.getDate())) {
        this.age--;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

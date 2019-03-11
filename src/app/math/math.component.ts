import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  numberOne = 2;
  numberTwo = 3;
  addTotal = 0;
  totalNumbers;

  constructor() { }

   addEqual = () => {
    this.addTotal = this.numberOne + this.numberTwo;
  }

  ngOnInit() {
  }

}

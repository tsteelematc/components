import { Component, OnInit } from '@angular/core';

// interface NumbersToDisplay {
//   numberOne: number;
//   numberTwo: number;
// }

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  // twoSetOfNumbers: NumbersToDisplay[];
  numberOne = 2;
  numberTwo = 3;
  totalNumbers = 0;
  squNumber = 0;
  squTotal = 0
  powOne = 0;
  powTwo = 0;
  powTotal = 0;

  constructor() { }

   addEqual = () => {
    this.totalNumbers = this.numberOne + this.numberTwo;
  }

  squareEqual = () => {
    this.squTotal = Math.sqrt(this.squNumber);
  }

  powerEqual = () => {
    this.powTotal = Math.pow(this.powOne, this.powTwo);
  }

  ngOnInit() {
  }

}

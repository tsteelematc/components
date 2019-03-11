import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worst',
  templateUrl: './worst.component.html',
  styleUrls: ['./worst.component.css']
})
export class WorstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numberOne;
  numberTwo;
  answer;

  calculateNumbers() {
    this.answer = (this.numberOne * this.numberTwo) / 2;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-subtract',
  templateUrl: './tjs-subtract.component.html',
  styleUrls: ['./tjs-subtract.component.css']
})
export class TjsSubtractComponent implements OnInit {

  numberOne = 10;
  numberTwo = 5;
  answer = 5;
  subtractNumbers = () => {
    this.answer = this.numberOne - this.numberTwo;
  }

  constructor() { }

  ngOnInit() {
  }

}

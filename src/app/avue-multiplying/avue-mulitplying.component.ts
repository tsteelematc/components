import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avue-mulitplying',
  templateUrl: './avue-mulitplying.component.html',
  styleUrls: ['./avue-mulitplying.component.css']
})
export class AvueMultiplyingComponent implements OnInit {

  numberOne;
  numberTwo;
  answer;

  subtractNumbers =() => {
    this.answer = this.numberOne * this.numberTwo;
  }

  constructor() {}

  ngOnInit() {
  }

}

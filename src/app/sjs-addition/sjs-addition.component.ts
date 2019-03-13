import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sjs-addition',
  templateUrl: './sjs-addition.component.html',
  styleUrls: ['./sjs-addition.component.css']
})
export class SjsAdditionComponent implements OnInit {

  firstNumber = 4;
  secondNumber = 4;
  thirdNumber = 2;
  answer = 4;

  addNumbers = () => {
    this.answer = (this.firstNumber + this.secondNumber) / this.thirdNumber;
  }

  constructor() { }

  ngOnInit() {
  }

}

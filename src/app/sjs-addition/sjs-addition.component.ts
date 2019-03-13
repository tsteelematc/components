import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sjs-addition',
  templateUrl: './sjs-addition.component.html',
  styleUrls: ['./sjs-addition.component.css']
})
export class SjsAdditionComponent implements OnInit {
  
  constructor() { }
    firstNumber;
    secondNumber;
    thirdNumber;
    answer;
    
  ngOnInit() {
  }

  addNumbers = () => {
    this.answer = (this.firstNumber + this.secondNumber) / this.thirdNumber;
  }

}

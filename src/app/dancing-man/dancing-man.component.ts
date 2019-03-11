import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dancing-man',
  templateUrl: './dancing-man.component.html',
  styleUrls: ['./dancing-man.component.css']
})
export class DancingManComponent implements OnInit {

  constructor() { }
  inputOne;
  inputTwo;
  answer;
  
  

  ngOnInit() {
  }

  makeDance = () => {
     this.answer =  this.inputOne + this.inputTwo;
  }

}

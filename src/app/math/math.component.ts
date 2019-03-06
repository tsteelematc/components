import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  numberOne = 0;
  numberTwo = 0;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dfs-subtract',
  templateUrl: './dfs-subtract.component.html',
  styleUrls: ['./dfs-subtract.component.css']
})
export class DfsSubtractComponent implements OnInit {

  numberOne = 10;
  numberTwo = 5;
  answer = 5;
  constructor() { }

  ngOnInit() {
  }

}

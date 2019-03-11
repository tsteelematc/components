import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit {
  colors = [
    {name:"red", checked: true}
    , {name:"yellow", checked: true}
    , {name:"blue", checked: false}
  ];
  foundColor = "";

  firstNumber = 100;
  secondNumber = 20;
  result = 120;

  addNumbers = () => {
    this.result = this.firstNumber + this.secondNumber;
  }

  findColor = () => {
    this.foundColor = "";
    this.findChecked().forEach(element => {
      this.foundColor += element.name;
    });

    if (this.foundColor == "yellow") {
      this.foundColor = "yellow";
    } else if (this.foundColor == "red") {
      this.foundColor = "red";
    } else if (this.foundColor == "blue") {
      this.foundColor = "blue";
    } else if (this.foundColor.includes("y") && this.foundColor.includes("r") && !this.foundColor.includes("b")) {
      this.foundColor = "orange";
    } else if (this.foundColor.includes("y") && this.foundColor.includes("b") && !this.foundColor.includes("r")) {
      this.foundColor = "green";
    } else if (this.foundColor.includes("r") && this.foundColor.includes("b") && !this.foundColor.includes("y")) {
      this.foundColor = "purple";
    } else {
      this.foundColor = "brown";
    }
  }

  findChecked = () => {
    // console.log(this.colors.filter( function (x) { return x.checked == true;}));
    let checkedColors = this.colors.filter( function (x) { return x.checked == true;});
    return checkedColors;
  }


  constructor() { }

  ngOnInit() {
  }

}

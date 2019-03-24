import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prefixer',
  templateUrl: './prefixer.component.html',
  styleUrls: ['./prefixer.component.css']
})
export class PrefixerComponent implements OnInit {

  name = "";
  message = "";
  prefixed = "";

  constructor() { }

  prefix = () => {
    this.prefixed = `<strong>${this.name} says:</strong> ${this.message}`;
  }

  ngOnInit() {

  }

}

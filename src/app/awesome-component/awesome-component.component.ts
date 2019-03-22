import { Component, OnInit } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';
import { CLEANUP } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-awesome-component',
  templateUrl: './awesome-component.component.html',
  styleUrls: ['./awesome-component.component.css']
})
export class AwesomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message = "";
  
  generateMessage = () => {
    this.message = 'Ow!';
    this.reset();
    
  }
  reset = () => {
    this.removeMessage();
  }
  removeMessage = () => {
    setTimeout(()=>{ this.message = "" }, 1500)
  }
}

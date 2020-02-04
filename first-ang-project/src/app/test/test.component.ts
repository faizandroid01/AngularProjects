import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  isToggleOn = false;
  toggleCount = 1;
  logs = [];


  date: Date = new Date();

  constructor() {

  }

  ngOnInit() {
  }


  toggleDisplay() {
    this.logs.push(this.toggleCount++ + '..........' + new Date());
    this.isToggleOn = !this.isToggleOn;

  }


}

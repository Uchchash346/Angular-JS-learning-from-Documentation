import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-within-component',
  template: '<h2>I am within component</h2>',
  styleUrls: ['./within-component.component.css']
})
export class WithinComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

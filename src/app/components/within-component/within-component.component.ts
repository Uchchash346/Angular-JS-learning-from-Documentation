import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-within-component',
  template: '<h2>I am within component</h2>',
  styles: ['h2 {font-weight: normal; color: red}']
})
export class WithinComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beauty-form',
  template: `
    <div>
      <input #myInput type="text">
      <br>
      <br>
      <button (click)="onClick($event, myInput.value)">Click me2 - $event + value!</button>
    </div>
  `,
  styles: []
})
export class BeautyFormComponent implements OnInit {
  onClick(event, value){
    console.log(event);
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}

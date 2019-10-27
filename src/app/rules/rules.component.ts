import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  template: `
  <button (click)="onClick()">
  Кнопка?!
</button>
{{clickMessage}}
  `,
  styles: []
})
export class RulesComponent implements OnInit {

  constructor() { }
public clickMessage=''
  ngOnInit() {
  }
  onClick(){
    this.clickMessage = 'Follow the rules!';

  }

}

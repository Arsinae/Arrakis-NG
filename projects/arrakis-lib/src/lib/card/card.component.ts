import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ARCardComponent implements OnInit {

  @Input() shadow: string = 'shadow';
  @Input() rounded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  get getClasses() {
    const classes = 'ar-card ar-' + this.shadow;
    return (this.rounded) ? (classes + ' ar-rounded') : classes;
  }
}

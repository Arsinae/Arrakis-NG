import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ARCardComponent implements OnInit {

  @Input() shadow: string = 'shadow';
  @Input() border: string = 'rounded';

  constructor() { }

  ngOnInit() {
  }

  get getClasses() {
    return 'ar-card ar-' + this.shadow + ' ar-' + this.border;
  }
}

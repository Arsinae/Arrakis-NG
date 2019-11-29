import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ARButtonComponent implements OnInit {

  @Input() color = 'primary';
  @Input() size = 'medium';
  @Input() rounded = false;
  @Input() display = 'inline';

  constructor() { }

  ngOnInit() {
  }

  get ButtonClass() {
    if (this.display === 'inline') {
      return `ar-button ar-background-color-${this.color} ar-button-size-${this.size}`;
    } else {
      return `ar-button ar-outline-button ar-background-color-${this.color}-hover ar-color-${this.color} ar-button-size-${this.size}` +
      ` ar-border-color-${this.color}`;
    }
  }

}

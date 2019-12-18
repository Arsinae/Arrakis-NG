import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class ARInputNumberComponent implements OnInit {

  @Input() value = 1;
  @Input() label = null;
  @Input() color = 'primary';
  @Input() display = 'both';
  @Input() min = null;
  @Input() max = null;
  @Input() increment = 1;
  @Input() disabled = false;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  public dark = false;

  constructor() { }

  ngOnInit() {
  }

  incrementValue(increment) {
    if (!this.disabled) {
      const newValue = this.value + increment;
      if (this.min != null && newValue < this.min) {
        this.value = this.min;
      } else if (this.max != null && newValue > this.max) {
        this.value = this.max;
      } else {
        this.value = newValue;
      }
      this.valueChange.emit(this.value);
    }
  }

}

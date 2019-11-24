import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ar-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class ARNotationComponent implements OnInit {

  @Input() value: number = 0;
  @Input() maxNumber: number = 5;
  @Input() color: string = 'primary';
  @Input() size: number = 16;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  private savedValue = -1;

  constructor() { }

  ngOnInit() {
  }

  get StarValue() {
    const star = [];
    let iterator = 0;
    for (; iterator < this.value; iterator++) {
      star.push('fas fa-star');
    }
    for (; iterator < this.maxNumber; iterator++) {
      star.push('far fa-star');
    }
    return star;
  }

  getNote(index) {
    this.savedValue = index + 1;
    this.value = index + 1;
    this.valueChange.emit(this.value);
  }

  hoverNote(index) {
    if (this.savedValue === -1) {
      this.savedValue = this.value;
    }
    this.value = index + 1;
  }

  resetNote() {
    if (this.savedValue !== -1) {
      this.value = this.savedValue;
      this.savedValue = -1;
    }
  }

  get StarClasses() {
    return `ar-star ar-color-${this.color}`;
  }

}

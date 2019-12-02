import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ar-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class ARInputComponent implements OnInit {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() color = 'gold';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() pressEnter = new EventEmitter<any>();

  @ViewChild('input', {static: false}) input;

  public focus = false;

  constructor() { }

  ngOnInit() {
    this.focus = (this.value === '' || this.value === null) ? false : true;
  }

  ngOnChanges(changes) {
    this.focus = (this.value === '' || this.value === null) ? false : true;
  }

  changeFocus() {
    this.input.nativeElement.focus();
  }

  changeValue(event) {
    this.value = event;
    this.valueChange.emit(event);
  }

  focusInput() {
    this.focus = true;
  }

  unfocusInput() {
    if (this.value === '' || this.value === null) {
      this.focus = false;
    }
  }

}

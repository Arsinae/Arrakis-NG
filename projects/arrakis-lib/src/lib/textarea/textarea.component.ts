import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class ARTextareaComponent implements OnInit {

  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() resizable: boolean = true;
  @Input() lines: number = 5;
  @Input() value: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  get TextAreaClasses() {
    let classes = `ar-textarea ar-border-color-${this.color}`;
    classes += (this.disabled) ? ' ar-disabled' : '';
    classes += (this.resizable) ? ' ar-resizable' : '';
    return classes
  }

  changeValue(event) {
    this.value = event;
    this.valueChange.emit(event);
  }
}

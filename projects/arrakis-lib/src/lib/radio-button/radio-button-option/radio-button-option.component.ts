import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-radio-button-option',
  templateUrl: './radio-button-option.component.html',
  styleUrls: ['./radio-button-option.component.scss']
})
export class ARRadioButtonOptionComponent implements OnInit {

  @Input() text: string = '';
  @Input() disabled: boolean = false;

  @Output() checkedChange: EventEmitter<any> = new EventEmitter();

  public checked = false;
  public color = 'primary';
  public display = 'inline';

  constructor() { }

  ngOnInit() {
  }

  changeCheck() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }

  get RadioButtonClasses() {
    const classes = `ar-radio-button-container ar-color-${this.color}-hover ar-radio-button-${this.display}`;
    return (this.disabled) ? `${classes} ar-disabled` : classes;
  }

}

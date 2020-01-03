import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-check-box-option',
  templateUrl: './check-box-option.component.html',
  styleUrls: ['./check-box-option.component.scss']
})
export class ARCheckBoxOptionComponent implements OnInit {

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
      console.log(this.display);
      this.checkedChange.emit(this.checked);
    }
  }

  get CheckBoxClasses() {
    const classes = `ar-checkbox-container ar-color-${this.color}-hover ar-checkbox-${this.display}`;
    return (this.disabled) ? `${classes} ar-disabled` : classes;
  }

}

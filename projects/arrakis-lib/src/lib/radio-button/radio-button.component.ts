import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { ARRadioButtonOptionComponent } from './radio-button-option/radio-button-option.component';

@Component({
  selector: 'ar-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class ARRadioButtonComponent implements OnInit {


  @Input() color = 'primary';
  @Input() value = '';
  @Input() display = 'inline';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(ARRadioButtonOptionComponent) options: QueryList<ARRadioButtonOptionComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.options.forEach(option => {
      this.setColorOption(option);
      this.setDisplay(option);
      this.setChecked(option);
      this.subscribeToChecked(option);
    });
  }

  ngOnChanges(changes) {
    if (this.options) {
      this.options.forEach(option => {
        this.setColorOption(option);
        this.setDisplay(option);
        this.setChecked(option);
        this.subscribeToChecked(option);
      });
    }
  }

  setColorOption(option: ARRadioButtonOptionComponent) {
    Promise.resolve(null).then(() => option.color = this.color);
  }

  setDisplay(option: ARRadioButtonOptionComponent) {
    Promise.resolve(null).then(() => option.display = this.display);
  }

  setChecked(option: ARRadioButtonOptionComponent) {
    if (this.value === option.text) {
      Promise.resolve(null).then(() => option.checked = true);
    }
  }

  subscribeToChecked(option: ARRadioButtonOptionComponent) {
    if (option.checkedChange.observers.length === 0) {
      option.checkedChange.subscribe(check => {
        if (check) {
          this.value = option.text;
          this.options.forEach(otherOptions => {
            if (option !== otherOptions) {
              otherOptions.checked = false;
            }
          });
        } else if (!check) {
          this.value = '';
        }
        this.valueChange.emit(this.value);
      });
    }
  }

}

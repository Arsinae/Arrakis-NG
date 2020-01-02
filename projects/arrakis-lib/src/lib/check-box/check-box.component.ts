import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { ARCheckBoxOptionComponent } from './check-box-option/check-box-option.component';

@Component({
  selector: 'ar-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class ARCheckBoxComponent implements OnInit {


  @Input() color = 'primary';
  @Input() values: Array<string> = [];
  @Input() display = 'inline';

  @Output() valuesChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(ARCheckBoxOptionComponent) options: QueryList<ARCheckBoxOptionComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.options.forEach(option => {
      console.log(option);
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

  setColorOption(option: ARCheckBoxOptionComponent) {
    Promise.resolve(null).then(() => option.color = this.color);
  }

  setDisplay(option: ARCheckBoxOptionComponent) {
    Promise.resolve(null).then(() => option.display = this.display);
  }

  setChecked(option: ARCheckBoxOptionComponent) {
    if (this.values.indexOf(option.text) !== -1) {
      Promise.resolve(null).then(() => option.checked = true);
    }
  }

  subscribeToChecked(option: ARCheckBoxOptionComponent) {
    console.log(option.checkedChange)
    if (option.checkedChange.observers.length === 0) {
      option.checkedChange.subscribe(check => {
        if (check) {
          this.values.push(option.text);
        } else if (!check && this.values.indexOf(option.text) !== -1) {
          this.values.splice(this.values.indexOf(option.text), 1);
        }
        this.valuesChange.emit(this.values);
      });
    }
  }

}

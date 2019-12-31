import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, NgZone, AfterViewInit } from '@angular/core';
import { ARSelectOptionComponent } from './select-option/select-option.component';

@Component({
  selector: 'ar-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class ARSelectComponent implements OnInit, AfterViewInit {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() color = 'primary';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(ARSelectOptionComponent) options: QueryList<ARSelectOptionComponent>;

  public open = false;
  public text = '';
  public dark = false;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.options.forEach(option => {
      option.valueChange.subscribe((event) => {
        this.value = event;
        this.valueChange.emit(this.value);
        this.text = (option.text !== '') ? option.text : option.value;
        this.open = false;
      });
    });
    this.changeText();
  }

  ngOnChanges(changes) {
    this.changeText();
  }

  changeText() {
    if (this.options && this.value !== '') {
      this.options.forEach(option => {
        if (option.value === this.value) {
          this.text = (option.text !== '') ? option.text : option.value;
        }
      });
    }
  }

}

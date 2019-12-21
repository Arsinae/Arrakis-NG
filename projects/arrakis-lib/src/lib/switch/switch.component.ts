import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class ARSwitchComponent implements OnInit {

  @Input() color:string = 'primary';
  @Input() checked: boolean = false;

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get SwitchContainerClass() {
    if (this.checked) {
      return `ar-switch-container checked ar-background-color-${this.color}`;   
    }
    return 'ar-switch-container'
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class ARSwitchComponent implements OnInit {

  @Input() color:string = 'primary';
  @Input() checked: boolean = false;
  @Input() size: string = 'medium';

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get SwitchContainerClass() {
    if (this.checked) {
      return `ar-switch-container checked ar-background-color-${this.color} ar-switch-${this.size}`;   
    }
    return `ar-switch-container ar-switch-${this.size}`;
  }

}

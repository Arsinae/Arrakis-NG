import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-input',
  templateUrl: './theme-input.component.html',
  styleUrls: ['./theme-input.component.scss']
})
export class ThemeInputComponent implements OnInit {

  @Input() value: any;
  @Input() label = '';
  @Input() type = 'color';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  public direction: Array<number> = [];

  constructor() {
    this.direction = [0, 45, 90, 135, 180, 225, 270, 315];
  }

  ngOnInit() {
  }

}

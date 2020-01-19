import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-input',
  templateUrl: './theme-input.component.html',
  styleUrls: ['./theme-input.component.scss']
})
export class ThemeInputComponent implements OnInit {

  @Input() value = '';
  @Input() label = '';
  @Input() type = 'color';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

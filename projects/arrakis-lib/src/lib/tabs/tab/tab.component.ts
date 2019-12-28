import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class ARTabComponent implements OnInit {

  @Input() title = '';

  @Output() changeDisplay: EventEmitter<any> = new EventEmitter();

  public display = false;

  constructor() { }

  ngOnInit() {
  }

}

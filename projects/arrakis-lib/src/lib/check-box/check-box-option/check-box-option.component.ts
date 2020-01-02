import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-check-box-option',
  templateUrl: './check-box-option.component.html',
  styleUrls: ['./check-box-option.component.scss']
})
export class ARCheckBoxOptionComponent implements OnInit {

  @Input() text = '';

  @Output() checkedChange: EventEmitter<any> = new EventEmitter();

  public checked = false;
  public color = 'primary';
  public display = 'inline';

  constructor() { }

  ngOnInit() {
  }

  changeCheck() {
    this.checked = !this.checked;
    console.log(this.display);
    this.checkedChange.emit(this.checked);
  }

}

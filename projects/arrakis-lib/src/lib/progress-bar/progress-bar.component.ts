import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ARProgressBarComponent implements OnInit {

  @Input() progress = 50;
  @Input() height = 15;
  @Input() padding: number = 3;
  @Input() color = 'primary';
  @Input() display = false;

  constructor() { }

  ngOnInit() {
  }

  get ProgressClasses() {
    return `ar-progression ar-background-color-${this.color}`;
  }

}

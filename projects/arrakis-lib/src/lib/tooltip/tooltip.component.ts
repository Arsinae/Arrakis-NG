import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class ARTooltipComponent implements OnInit {

  @Input() position = 'top';
  @Input() color = 'primary';
  @Input() style = 'dotted';
  @Input() width: number = null;

  constructor() { }

  ngOnInit() {
  }

  tooltipClassList() {
    return 'ar-tooltip-container ' + (`ar-${this.position}-tooltip `) + (`ar-color-${this.color}-hover `) + (`ar-${this.style}-tooltip`);
  }

}

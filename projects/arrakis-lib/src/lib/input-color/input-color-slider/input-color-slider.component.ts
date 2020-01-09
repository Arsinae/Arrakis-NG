import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-input-color-slider',
  templateUrl: './input-color-slider.component.html',
  styleUrls: ['./input-color-slider.component.scss']
})
export class ARInputColorSliderComponent implements OnInit {

  @Input() color: Array<number> = [0, 0, 0, 255];
  @Input() index: number = 0;
  @Input() max: number = 255;
  @Input() display: string = 'rgba';

  @Output() colorChange: EventEmitter<Array<number>> = new EventEmitter();

  @ViewChild('slider', {static: false}) slider;

  public width: number = 200;

  constructor() { }

  ngOnInit() {
  }

  get Gradient() {
    const values = [[...this.color], [...this.color]];
    values[0][this.index] = 0;
    values[1][this.index] = this.max;
    let gradient = '';
    if (this.display === 'rgba') {
      gradient = (this.index !== 3) ? 
      `linear-gradient(90deg, rgb(${values[0][0]},${values[0][1]},${values[0][2]}), rgb(${values[1][0]},${values[1][1]},${values[1][2]}))` :
      `linear-gradient(90deg, rgba(${values[0][0]},${values[0][1]},${values[0][2]},0), rgba(${values[1][0]},${values[1][1]},${values[1][2]}, 1))`;
    } else {
      gradient = (this.index === 0) ?
        `linear-gradient(90deg, hsl(0,100%,50%) 0%, hsl(45,100%,50%) 12.5%, hsl(90,100%,50%) 25%, hsl(135,100%,50%) 37.5%, ` +
        `hsl(180,100%,50%) 50%, hsl(225,100%,50%) 62.5%, hsl(270,100%,50%) 75%, hsl(305,100%,50%) 87.5%, hsl(360,100%,50%) 100%)` :
      (this.index !== 3) ?
        `linear-gradient(90deg, hsl(${values[0][0]},${values[0][1]}%,${values[0][2]}%), hsl(${values[1][0]},${values[1][1]}%,${values[1][2]}%))` :
        `linear-gradient(90deg, hsla(${values[0][0]},${values[0][1]}%,${values[0][2]}%,0), hsla(${values[1][0]},${values[1][1]}%,${values[1][2]}%, 1))`;
    }
    return {'background': gradient};
  }

  get SliderStyle() {
    const colorIndex = [...this.color];
    colorIndex[3] = (colorIndex[3] * 100) / this.max / 100;
    const color = (this.display === 'rgba') ? 'rgba(' + colorIndex.join(',') + ')' : `hsla(${colorIndex[0]},${colorIndex[1]}%,${colorIndex[2]}%,${colorIndex[3]})`;
    return {'background': color, 'left': (this.color[this.index] * 100 / this.max) + '%'};
  }

  sliderClick(event: MouseEvent) {
    const clickX = event.clientX - this.slider.nativeElement.getBoundingClientRect().left;
    let percent = Math.round(clickX * (this.max) / this.width);
    percent = Math.max(Math.min(percent, this.max), 0);
    this.color[this.index] = percent;
    this.colorChange.emit(this.color);
  }

}

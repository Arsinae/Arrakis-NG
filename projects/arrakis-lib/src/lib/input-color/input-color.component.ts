import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ar-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss']
})
export class ARInputColorComponent implements OnInit, OnChanges {

  @Input() value: string | Array<number> = '#000000ff';
  @Input() type: string = 'hexa';

  @Output() valueChange: EventEmitter<string | Array<number>> = new EventEmitter();

  public colorIndex: Array<number> = [0, 0, 0, 255];
  public displayType: string = 'rgba';
  public open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.value) {
    }
  }

  changeDisplayType(type) {
    if (this.displayType !== type) {
      this.displayType = type;
      this.colorIndex = (this.displayType === 'rgba') ? this.hslToRgb(this.colorIndex) : this.rgbToHsl(this.colorIndex);
    }
  }

  changeColor(color) {
    this.colorIndex = color;
    if (this.displayType === 'rgba') {
      if (this.type === 'hexa') {
        this.value = this.rgbToHex(this.colorIndex);
      } else if (this.type === 'rgb') {
        this.value = this.colorIndex;
      } else {
        this.value = this.rgbToHsl(this.colorIndex);
      }
    } else {
      if (this.type === 'hexa') {
        this.value = this.rgbToHex(this.hslToRgb(this.colorIndex));
      } else if (this.type === 'rgb') {
        this.value = this.hslToRgb(this.colorIndex);
      } else {
        this.value = this.colorIndex;
      }
    }
    this.valueChange.emit(this.value);
  }

  rgbToHex(color: Array<number>) {
    const r = ('00' + color[0].toString(16)).substr(-2),
      g = ('00' + color[1].toString(16)).substr(-2),
      b = ('00' + color[2].toString(16)).substr(-2),
      a = ('00' + color[3].toString(16)).substr(-2);
    return `#${r}${g}${b}${a}`;
  }

  hexToRGB(color) {
    const r = parseInt(color.substr(1, 2), 16),
      g = parseInt(color.substr(3, 2), 16),
      b = parseInt(color.substr(5, 2), 16),
      a = parseInt(color.substr(7, 2), 16);
    return [r, g, b, a];
  }

  rgbToHsl(color: Array<number>) {
    const ratio = {r: color[0] / 255, g: color[1] / 255, b: color[2] / 255};
    const minValue = Math.min(ratio.r, ratio.g, ratio.b);
    const maxValue = Math.max(ratio.r, ratio.g, ratio.b);
    const luminance = Math.round((minValue + maxValue) / 2 * 100);
    let saturation = 0;
    let hue = 0;
    if (minValue !== maxValue) {
      saturation = (luminance < 50) ?
        Math.round((maxValue - minValue) / (maxValue + minValue) * 100) :
        Math.round((maxValue - minValue) / (2 - maxValue - minValue) * 100);
      hue = this.calcHue(ratio, minValue, maxValue);
    }
    return [hue, saturation, luminance, color[3]];
  }

  calcHue(ratio, minValue, maxValue) {
    if (ratio.r === maxValue) {
      return Math.round((ratio.g - ratio.b) / (maxValue - minValue) * 60);
    } else if (ratio.g === maxValue) {
      return Math.round((2 + (ratio.b - ratio.r) / (maxValue - minValue)) * 60);
    } else {
      return Math.round((4 + (ratio.r - ratio.g) / (maxValue - minValue)) * 60);
    }
  }

  hslToRgb(color: Array<number>) {
    const c = (1 - Math.abs(2 * (color[2] / 100) - 1)) * (color[1] / 100);
    const x = c * (1 - Math.abs((color[0] / 60) % 2 - 1));
    const m = (color[2] / 100) - c / 2;
    let prime = {r: 0, g: 0, b: 0};
    if (color[0] < 60 || color[0] === 360) {
      prime = {r: c, g: x, b: 0};
    } else if (color[0] < 120) {
      prime = {r: x, g: c, b: 0};
    } else if (color[0] < 180) {
      prime = {r: 0, g: c, b: x};
    } else if (color[0] < 240) {
      prime = {r: 0, g: x, b: c};
    } else if (color[0] < 300) {
      prime = {r: x, g: 0, b: c};
    } else  {
      prime = {r: c, g: 0, b: x};
    }
    return [Math.round((prime.r + m) * 255), Math.round((prime.g + m) * 255),
      Math.round((prime.b + m) * 255), color[3]
    ];
  }

}

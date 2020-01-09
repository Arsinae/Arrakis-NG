import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARInputColorComponent } from './input-color.component';
import { ARInputColorSliderComponent } from './input-color-slider/input-color-slider.component';



@NgModule({
  declarations: [
    ARInputColorComponent,
    ARInputColorSliderComponent
  ], imports: [
    CommonModule
  ], exports: [
    ARInputColorComponent,
    ARInputColorSliderComponent
  ]
})
export class ARInputColorModule { }

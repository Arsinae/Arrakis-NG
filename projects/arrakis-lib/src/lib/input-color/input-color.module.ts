import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ARInputColorComponent } from './input-color.component';
import { ARInputColorSliderComponent } from './input-color-slider/input-color-slider.component';

@NgModule({
  declarations: [
    ARInputColorComponent,
    ARInputColorSliderComponent
  ], imports: [
    CommonModule,
    FormsModule
  ], exports: [
    ARInputColorComponent,
    ARInputColorSliderComponent
  ]
})
export class ARInputColorModule { }

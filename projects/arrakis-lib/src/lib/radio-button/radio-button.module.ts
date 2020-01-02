import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARRadioButtonComponent } from './radio-button.component';
import { ARRadioButtonOptionComponent } from './radio-button-option/radio-button-option.component';



@NgModule({
  declarations: [
    ARRadioButtonComponent,
    ARRadioButtonOptionComponent
  ], imports: [
    CommonModule
  ], exports: [
    ARRadioButtonComponent,
    ARRadioButtonOptionComponent
  ]
})
export class ARRadioButtonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARCheckBoxComponent } from './check-box.component';
import { ARCheckBoxOptionComponent } from './check-box-option/check-box-option.component';



@NgModule({
  declarations: [
    ARCheckBoxComponent,
    ARCheckBoxOptionComponent
  ], imports: [
    CommonModule
  ], exports: [
    ARCheckBoxComponent,
    ARCheckBoxOptionComponent
  ]
})
export class ARCheckBoxModule { }

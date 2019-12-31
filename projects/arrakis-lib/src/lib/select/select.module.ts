import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARSelectComponent } from './select.component';
import { ARSelectOptionComponent } from './select-option/select-option.component';



@NgModule({
  declarations: [
    ARSelectComponent,
    ARSelectOptionComponent
  ], imports: [
    CommonModule
  ], exports: [
    ARSelectComponent,
    ARSelectOptionComponent
  ]
})
export class ARSelectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTableComponent } from './table.component';



@NgModule({
  declarations: [ARTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ARTableComponent
  ]
})
export class ARTableModule { }

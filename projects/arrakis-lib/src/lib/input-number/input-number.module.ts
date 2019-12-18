import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ARInputNumberComponent } from './input-number.component';

@NgModule({
  declarations: [ARInputNumberComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ARInputNumberComponent
  ]
})
export class ARInputNumberModule { }

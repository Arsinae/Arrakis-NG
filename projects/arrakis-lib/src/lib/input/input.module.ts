import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ARInputComponent } from './input.component';



@NgModule({
  declarations: [ARInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ARInputComponent
  ]
})
export class ARInputModule { }

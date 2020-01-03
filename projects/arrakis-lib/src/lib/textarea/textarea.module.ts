import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTextareaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ARTextareaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ARTextareaComponent
  ]
})
export class ARTextareaModule { }

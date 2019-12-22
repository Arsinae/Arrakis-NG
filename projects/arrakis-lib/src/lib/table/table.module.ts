import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ARTableComponent } from './table.component';

@NgModule({
  declarations: [ARTableComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ARTableComponent
  ]
})
export class ARTableModule { }

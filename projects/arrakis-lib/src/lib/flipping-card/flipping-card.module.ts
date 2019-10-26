import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARFlippingCardComponent } from './flipping-card.component';

@NgModule({
  declarations: [ARFlippingCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ARFlippingCardComponent
  ]
})
export class ARFlippingCardModule { }

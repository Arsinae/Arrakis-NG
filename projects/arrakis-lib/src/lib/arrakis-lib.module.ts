import { NgModule } from '@angular/core';
import { ARCardModule } from './card/card.module';
import { ARFlippingCardModule } from './flipping-card/flipping-card.module';

@NgModule({
  declarations: [],
  imports: [
    ARCardModule,
    ARFlippingCardModule
  ],
  exports: [
    ARCardModule,
    ARFlippingCardModule
  ]
})
export class ArrakisLibModule { }

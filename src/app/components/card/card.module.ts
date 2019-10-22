import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { ARCardModule } from 'projects/arrakis-lib/src/lib/card/card.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    ARCardModule
  ],
  entryComponents: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }

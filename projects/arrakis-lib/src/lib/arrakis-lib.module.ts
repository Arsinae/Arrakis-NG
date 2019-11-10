import { NgModule, ModuleWithProviders } from '@angular/core';

import { ARAlertModule } from './alert/alert.module';
import { ARCardModule } from './card/card.module';
import { ARFlippingCardModule } from './flipping-card/flipping-card.module';
import { ARTestimonialCardModule } from './testimonial-card/testimonial-card.module';
import { ARSnackBarModule } from './snack-bar/snack-bar.module';
import { ARTableModule } from './table/table.module';

import { ARAlertService } from './alert/alert.service';
import { ARSnackBarService } from './snack-bar/snack-bar.service';
import { ARAccordionModule } from './accordion/accordion.module';

@NgModule({
  imports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTestimonialCardModule,
    ARTableModule,
    ARAccordionModule,
    ARAlertModule,
    ARSnackBarModule,
  ],
  exports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTestimonialCardModule,
    ARTableModule,
    ARAccordionModule,
    ARAlertModule,
    ARSnackBarModule
  ]
})
export class ArrakisLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ArrakisLibModule,
      providers: [
        ARAlertService,
        ARSnackBarService
      ]
    };
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core';

import { ARAccordionModule } from './accordion/accordion.module';
import { ARAlertModule } from './alert/alert.module';
import { ARCardModule } from './card/card.module';
import { ARConfirmModalModule } from './confirm-modal/confirm-modal.module'
import { ARFlippingCardModule } from './flipping-card/flipping-card.module';
import { ARModalModule } from './modal/modal.module'
import { ARSnackBarModule } from './snack-bar/snack-bar.module';
import { ARTableModule } from './table/table.module';
import { ARTestimonialCardModule } from './testimonial-card/testimonial-card.module';
import { ARTooltipModule } from './tooltip/tooltip.module';

import { ARAlertService } from './alert/alert.service';
import { ARSnackBarService } from './snack-bar/snack-bar.service';

@NgModule({
  imports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTestimonialCardModule,
    ARTableModule,
    ARAccordionModule,
    ARTooltipModule,
    ARModalModule,
    ARConfirmModalModule,
    ARAlertModule,
    ARSnackBarModule,
  ],
  exports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTestimonialCardModule,
    ARTableModule,
    ARAccordionModule,
    ARTooltipModule,
    ARModalModule,
    ARConfirmModalModule,
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

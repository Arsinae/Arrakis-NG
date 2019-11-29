import { NgModule, ModuleWithProviders } from '@angular/core';

import { ARAccordionModule } from './accordion/accordion.module';
import { ARAlertModule } from './alert/alert.module';
import { ARBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ARCardModule } from './card/card.module';
import { ARConfirmModalModule } from './confirm-modal/confirm-modal.module'
import { ARFlippingCardModule } from './flipping-card/flipping-card.module';
import { ARModalModule } from './modal/modal.module'
import { ARProgressBarModule } from './progress-bar/progress-bar.module';
import { ARSnackBarModule } from './snack-bar/snack-bar.module';
import { ARTableModule } from './table/table.module';
import { ARTestimonialCardModule } from './testimonial-card/testimonial-card.module';
import { ARTooltipModule } from './tooltip/tooltip.module';

import { ARAlertService } from './alert/alert.service';
import { ARSnackBarService } from './snack-bar/snack-bar.service';
import { ARNotationModule } from './notation/notation.module';
import { ARButtonModule } from './button/button.module';

@NgModule({
  imports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTestimonialCardModule,
    ARTableModule,
    ARAccordionModule,
    ARBreadcrumbModule,
    ARTooltipModule,
    ARProgressBarModule,
    ARNotationModule,
    ARModalModule,
    ARConfirmModalModule,
    ARAlertModule,
    ARSnackBarModule,
    ARButtonModule,
  ],
  exports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTestimonialCardModule,
    ARTableModule,
    ARAccordionModule,
    ARBreadcrumbModule,
    ARTooltipModule,
    ARProgressBarModule,
    ARNotationModule,
    ARModalModule,
    ARConfirmModalModule,
    ARAlertModule,
    ARSnackBarModule,
    ARButtonModule
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

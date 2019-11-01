import { NgModule, ModuleWithProviders } from '@angular/core';

import { ARAlertModule } from './alert/alert.module';
import { ARCardModule } from './card/card.module';
import { ARFlippingCardModule } from './flipping-card/flipping-card.module';
import { ARSnackBarModule } from './snack-bar/snack-bar.module';
import { ARTableModule } from './table/table.module';

import { ARAlertService } from './alert/alert.service';
import { ARSnackBarService } from './snack-bar/snack-bar.service';

@NgModule({
  imports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTableModule,
    ARAlertModule,
    ARSnackBarModule
  ],
  exports: [
    ARCardModule,
    ARFlippingCardModule,
    ARTableModule,
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

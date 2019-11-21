import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components.component';

import { CardComponent} from './card/card.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';

import { ArrakisLibModule } from 'projects/arrakis-lib/src/lib/arrakis-lib.module';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import { AlertComponent } from './alert/alert.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TableComponent } from './table/table.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ModalComponent } from './modal/modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    ComponentsComponent,
    AlertComponent,
    CardComponent,
    FlippingCardComponent,
    SnackBarComponent,
    TableComponent,
    TestimonialCardComponent,
    AccordionComponent,
    TooltipComponent,
    ModalComponent,
    ConfirmModalComponent,
    ProgressBarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({languages: hljsLanguages}),
    ArrakisLibModule
  ],
  exports: [
    ComponentsComponent
  ],
})
export class ComponentsModule { }

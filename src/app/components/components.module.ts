import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components.component';

import { CardComponent} from './card/card.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
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
import { NotationComponent } from './notation/notation.component';
import { ButtonComponent } from './button/button.component';
import { FixedBackgroundComponent } from './fixed-background/fixed-background.component';

import { ArrakisLibModule } from 'projects/arrakis-lib/src/lib/arrakis-lib.module';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputFileComponent } from './input-file/input-file.component';
import { SwitchComponent } from './switch/switch.component';


export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'css', func: css},
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
    BreadcrumbComponent,
    NotationComponent,
    ButtonComponent,
    FixedBackgroundComponent,
    InputComponent,
    InputNumberComponent,
    InputFileComponent,
    SwitchComponent
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

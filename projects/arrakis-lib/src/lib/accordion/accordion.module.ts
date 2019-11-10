import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARAccordionComponent } from './accordion.component';
import { ARPanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [ARAccordionComponent, ARPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ARAccordionComponent,
    ARPanelComponent
  ]
})
export class ARAccordionModule { }

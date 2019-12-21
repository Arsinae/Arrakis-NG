import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARSwitchComponent } from './switch.component';



@NgModule({
  declarations: [ARSwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ARSwitchComponent
  ]
})
export class ARSwitchModule { }

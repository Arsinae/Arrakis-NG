import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARSnackBarComponent } from './snack-bar.component';



@NgModule({
  declarations: [ARSnackBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ARSnackBarComponent
  ]
})
export class ARSnackBarModule { }

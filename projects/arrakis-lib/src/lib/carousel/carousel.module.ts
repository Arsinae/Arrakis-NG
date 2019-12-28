import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARCarouselComponent } from './carousel.component';
import { ARCarouselBoxComponent } from './carousel-box/carousel-box.component';



@NgModule({
  declarations: [
    ARCarouselComponent, 
    ARCarouselBoxComponent
  ], imports: [
    CommonModule
  ],
  exports: [
    ARCarouselComponent,
    ARCarouselBoxComponent,
  ]
})
export class ARCarouselModule { }

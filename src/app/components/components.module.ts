import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    ComponentsComponent
  ],
})
export class ComponentsModule { }

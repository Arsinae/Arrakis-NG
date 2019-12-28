import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTabsComponent } from './tabs.component';
import { ARTabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    ARTabsComponent,
    ARTabComponent
  ], imports: [
    CommonModule
  ], exports: [
    ARTabsComponent,
    ARTabComponent
  ]
})
export class ARTabsModule { }

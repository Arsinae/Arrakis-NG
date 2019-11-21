import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARBreadcrumbComponent } from './breadcrumb.component';



@NgModule({
  declarations: [ARBreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ARBreadcrumbComponent
  ]
})
export class ARBreadcrumbModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ThemeComponent } from './theme.component';
import { ArrakisLibModule } from 'projects/arrakis-lib/src/public-api';

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ArrakisLibModule
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }

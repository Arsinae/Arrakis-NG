import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ThemeComponent } from './theme.component';
import { ArrakisLibModule } from 'projects/arrakis-lib/src/public-api';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import { ThemeInputComponent } from './theme-input/theme-input.component';

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
    ThemeComponent,
    ThemeInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ArrakisLibModule,
    HighlightModule.forRoot({languages: hljsLanguages}),
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }

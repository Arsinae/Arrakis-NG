import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { ARCardModule } from 'projects/arrakis-lib/src/lib/card/card.module';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    ARCardModule,
    HighlightModule.forRoot({languages: hljsLanguages})
  ],
  entryComponents: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }

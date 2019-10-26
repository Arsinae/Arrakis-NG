import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';

import { CardComponent} from './card/card.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';

import { ArrakisLibModule } from 'projects/arrakis-lib/src/lib/arrakis-lib.module';
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
  declarations: [
    ComponentsComponent,
    CardComponent,
    FlippingCardComponent
  ],
  imports: [
    CommonModule,
    HighlightModule.forRoot({languages: hljsLanguages}),
    ArrakisLibModule
  ],
  exports: [
    ComponentsComponent
  ],
})
export class ComponentsModule { }

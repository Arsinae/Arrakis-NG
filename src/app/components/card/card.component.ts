import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public htmlCode = '<ar-card [shadow]=\"\'shadow\'\" [radius]=\"\'rounded\'\">\n  <div>\n    Une carte\n  </div>\n</ar-card>';
  public explanations: Array<{title: string, explanation: string}> = []

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-card'},
      {title: 'Contenu', explanation: 'Le contenu de la carte'},
      {title: '@Input() shadow', explanation: 'L\'ombre de la carte; "shadow"(défaut), "small-shadow" ou "big-shadow"'},
      {title: '@Input() radius', explanation: 'Les coins arrondis de la carte; "rounded"(défaut) ou "none"'}
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent implements OnInit {

  public htmlCode = '<ar-flipping-card [height]="150" [shadow]="\'small-shadow\'" [rounded]="true">\n  <div front>\n    Une carte\n  </div>\n' +
  '  <div back>\n    Arrière d\'une carte\n  </div>\n</ar-flipping-card>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-card'},
      {title: 'Contenu \'front\'', explanation: 'Le contenu avant de la carte'},
      {title: 'Contenu \'back\'', explanation: 'Le contenu arrière de la carte'},
      {title: '@Input() height', explanation: 'Hauteur de la carte en px; Number: 200(défaut)'},
      {title: '@Input() shadow', explanation: 'L\'ombre de la carte; String: "shadow"(défaut), "small-shadow" ou "big-shadow"'},
      {title: '@Input() rounded', explanation: 'Les coins arrondis de la carte; Boolean: true(défaut)'},
      {title: '@Input() bounce', explanation: 'Mets l\'animation de rebondissement sur la carte; Boolean: false(défaut)'}
    ]
  }

}

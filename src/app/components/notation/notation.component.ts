import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit {

  public htmlCode = '<ar-notation [color]="4" [size]="20" [(value)]="note"></ar-notation>';
  public tsCode = 'public note: number = 3;';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-notation'},
      {title: '@Input() value', explanation: 'Valeur de la note; Number: 0(défaut)'},
      {title: '@Input() maxNumber', explanation: 'Nombre maximum de la note; Number: 5(défaut)'},
      {title: '@Input() color', explanation: 'Couleur des étoiles de la note; String: primary(défaut), secondary, 1-7'},
      {title: '@Input() size', explanation: 'Taille des étoiles de la note; Number: 16(défaut)'},
      {title: '@Output() valueChange', explanation: 'Evènement émis lors du changement de valeur des notes; Number'}
    ];
  }

}

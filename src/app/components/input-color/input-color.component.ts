import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss']
})
export class InputColorComponent implements OnInit {

  public htmlCode = '<ar-input-color [value]="[0, 0, 255, 255]" type="rgb"></ar-input-color>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-input-color'},
      {title: '@Input() value', explanation: 'Valeur de l\'input; String au format hexa | Array<number> de quatre nombres'},
      {title: '@Input() type', explanation: 'Type de la valeur de l\'input; String: \'hexa\'(défaut), \'rgb\', \'hsl\''},
      {title: '@Input() display', explanation: 'Type d\'affichage de l\'input, String: \'both\'(défaut), \'value\', \'pins\''},
      {title: '@Output() valueChange', explanation: 'Evènement émis lors du changement de valeur de l\'input; String | Array<number>'},
    ]
  }

}

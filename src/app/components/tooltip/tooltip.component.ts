import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  public htmlCode = ' <span>\n  Paul est devenu le "\n  <ar-tooltip [color]="2" [position]="\'bottom\'" [width]="150">\n    '+
    '<span text>Muad\'Dib</span>\n    <span explanation>Souris du désert.</span>\n  </ar-tooltip>\n  " pour les Fremens.\n</span>';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-tooltip'},
      {title: 'Contenu text', explanation: 'Le texte à expliquer'},
      {title: 'Contenu explanation', explanation: 'Le contenu de la fenêtre explicative'},
      {title: '@Input() position', explanation: 'Positionnement de la fenêtre; String: "top"(défaut), "bottom", "left" ou "right"'},
      {title: '@Input() color', explanation: 'Couleur par défaut des lignes; String: primary(défaut), secondary, 1-7'},
      {title: '@Input() width', explanation: 'Largeur de la fenêtre; Number: null(défaut)'},
      {title: '@Input() style', explanation: 'Style du texte à expliquer; String: "dotted"(défaut) ou "underline"'}
    ]
  }

}

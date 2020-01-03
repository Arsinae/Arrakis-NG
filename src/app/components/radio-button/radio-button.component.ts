import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  public value = 'Arrakis';

  public htmlCode = '<ar-check-box color="2" display="inline" [(values)]="values">\n  ' +
    '<ar-check-box-option *ngFor="let option of options" [text]="option"></ar-check-box-option>\n</ar-check-box>\n';
  public tsCode = 'public options: Array<string> = [\'Arrakis\', \'Caladan\', \'Giedi Prime\'];\n\npublic values: Array<string> = []\n';
  public explanations: Array<{title: string, explanation: string}> = [];

  constructor() { }

  ngOnInit() {
    this.explanations = [
      {title: 'Balise HTML', explanation: 'ar-radio-button'},
      {title: '@Input() value', explanation: 'Valeur des boutons; String: \'\'(défaut)'},
      {title: '@Input() display', explanation: 'Type d\'affichage des boutons; String: \'inline\'(défaut) ou \'line\''},
      {title: '@Input() color', explanation: 'Couleur de l\'input; String: primary(défaut), secondary, 1-7, success, info, warning, danger'},
      {title: '@Output() valueChange', explanation: 'Emission d\'évènement lors du clic sur une option; String'},
      {title: 'Contenu', explanation: 'Liste des options (ar-radio-button-option)'},
      {title: '', explanation: ''},
      {title: 'Balise HTML', explanation: 'ar-radio-button-option'},
      {title: '@Input() text', explanation: 'Texte de l\'option; String: \'\'(défaut)'},
      {title: '@Input() disabled', explanation: 'Désactive l\'option; Boolean: false(défaut)'},
      {title: '@Output() checkedChange', explanation: 'Emission d\'évènement lors du clic sur l\'option; Boolean'},
    ];
  }

}
